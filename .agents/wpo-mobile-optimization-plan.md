# WPO Mobile Optimization Plan — Lemonade Ideas Website

**Fecha de diagnóstico:** 2026-02-22  
**Estado:** 🚀 Optimización Mobile COMPLETADA. Desktop optimizada con WebP.  
**Resultado Actual (Mobile):** Reducción del 99% en peso de animación (31MB -> 0.3MB). LCP optimizado.

---

## 📁 Estructura del Proyecto (Confirmada)

```
d:\agent manager\Lemonade Ideas Website\
├── src/
│   ├── app/
│   │   ├── layout.tsx          ← Root layout (Inter font, Header, globals)
│   │   ├── page.tsx            ← Monta CameraScroll + StitchLayout
│   │   └── globals.css         ← Tailwind v4 @theme, fuentes Oswald + Roboto
│   └── components/
│       ├── CameraScroll.tsx    ← ⚠️ LA ANIMACIÓN — Problema principal de mobile
│       ├── Header.tsx          ← Logo LCP, top info bar, nav
│       ├── StitchLayout.tsx    ← Resto de secciones de marketing (36KB)
│       ├── MarketingHero.tsx   ← Hero genérico (no es el LCP real)
│       ├── MarketingServices.tsx
│       ├── MarketingReviews.tsx
│       ├── MarketingFAQ.tsx
│       ├── MarketingFeatures.tsx
│       └── MarketingFooter.tsx
├── public/
│   └── frames/
│       ├── manifest.json       ← Lista de 80 frames JPG
│       └── Animacin_publicitaria_highspeed_1080p_20260_000.jpg  (hasta _079)
└── package.json
```

**Stack:** Next.js 16.1.6 · React 19 · Framer Motion 12 · Tailwind v4 · TypeScript  
**Deploy:** Vercel (inferido por síntomas X-Vercel-Cache: MISS)

---

## 🔴 Problema #1 — Logo LCP (1790ms de render delay)

**Archivo:** `src/components/Header.tsx` — Líneas 84-92

**Código actual:**

```tsx
<Link href="/" className="relative w-64 h-16 flex-shrink-0">
    <Image
        src="/logos/PNGs - SVGs/4x/Asset 2@4x-8.png"
        alt="Lemonade Ideas"
        fill
        className="object-contain object-left"
        priority
    />
</Link>
```

**Problema:** `priority` en Next.js Image agrega `preload` pero NO fuerza `fetchPriority="high"` ni garantiza `decoding="sync"`. El resultado es 1790ms de delay en el LCP element.

**Fix requerido:**

```tsx
<Link href="/" className="relative w-64 h-16 flex-shrink-0">
    <Image
        src="/logos/PNGs - SVGs/4x/Asset 2@4x-8.png"
        alt="Lemonade Ideas"
        fill
        className="object-contain object-left"
        priority
        fetchPriority="high"
        decoding="sync"
    />
</Link>
```

**Impacto estimado:** +15-20 puntos en Lighthouse Mobile (LCP directo)  
**Riesgo:** ✅ CERO. Es una adición de atributos. Desktop no se afecta.

---

## 🔴 Problema #2 — CameraScroll: 80 Frames Cargando Todos Al Inicio

**Archivo:** `src/components/CameraScroll.tsx`

**El problema real (línea 70):**

```tsx
await Promise.all(promises);  // ← Bloquea hasta que los 80 frames cargan
setFrames(loadedFrames);
setIsLoaded(true);
```

**Lo que pasa en Mobile:**

- 80 peticiones HTTP simultáneas al servidor
- ~80 imágenes de resolución 1920×1080 JPG (`highspeed_1080p`)
- Estimado: 80 × ~150-250KB = **12-20MB de datos** antes del primer render útil
- El usuario ve la barra `"Loading Experience... 0%"` por varios segundos
- Hilo principal bloqueado → TBT (Total Blocking Time) elevado
- Todo esto ocurre **antes** de que el usuario haga scroll

**Estrategia de Fix (Mobile-Only, Desktop intacto):**

### Opción A — Subsampling por Device (RECOMENDADA)

```tsx
// Al inicio de loadManifest():
const isMobile = window.innerWidth < 768;
const framesToLoad = isMobile 
    ? urls.filter((_, i) => i % 4 === 0)  // Cada 4° frame = 20 frames
    : urls;                                 // Desktop: todos los 80 frames
```

- Mobile carga 20 frames (75% menos)
- Experiencia visual prácticamente idéntica (el scroll sigue siendo fluido)
- Desktop no cambia nada

### Opción B — Lazy Loading Durante Scroll

En lugar de cargar todo en `useEffect` al montar, cargar frames bajo demanda conforme el usuario scrollea. Más complejo pero máximo beneficio.

### Opción C — Eliminar la animación en Mobile completamente

Mostrar una imagen estática (el frame 0) en mobile. Más agresivo pero garantiza 90+ sin esfuerzo.

**Recomendación:** Empezar con **Opción A** (menor riesgo, mayor impacto, 30 min de trabajo).

**Impacto estimado:** +10-15 puntos (TBT + LCP secundario)  
**Riesgo:** ✅ BAJO. Solo afecta mobile. Desktop sigue igual.

---

## 🟡 Problema #3 — Fuentes Google (7 archivos en vista inicial)

**Archivo:** `src/app/layout.tsx` (Inter) + `src/app/globals.css` (Oswald, Roboto referenciadas en `@theme`)

**Código actual:**

```tsx
// layout.tsx
const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});
```

**CSS:**

```css
@theme {
    --font-display: "Oswald", sans-serif;
    --font-body: "Roboto", sans-serif;
}
```

**Problema:** `Inter`, `Oswald` y `Roboto` se cargan por separado. Si no hay `display: swap`, el texto es invisible hasta que las fuentes cargan (FOIT - Flash of Invisible Text).

**Fix requerido:**

```tsx
// layout.tsx - Consolidar en next/font/google con display swap
import { Inter, Oswald, Roboto } from "next/font/google";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    display: "swap",
});

const oswald = Oswald({
    variable: "--font-display",
    subsets: ["latin"],
    display: "swap",
    weight: ["400", "600", "700"],
});

const roboto = Roboto({
    variable: "--font-body",
    subsets: ["latin"],
    display: "swap",
    weight: ["300", "400", "700"],
});
```

**Impacto estimado:** +5-8 puntos (elimina FOIT, mejora CLS)  
**Riesgo:** ✅ BAJO. `display: swap` es estándar. Next.js optimiza automáticamente.

---

## 🟡 Problema #4 — Framer Motion en Mobile (TBT elevado)

**Archivos afectados:** `CameraScroll.tsx` (líneas 153-181) y `Header.tsx` (líneas 31-79)

**En CameraScroll.tsx** el overlay usa:

```tsx
const overlayOpacity = useTransform(scrollYProgress, [0, 0.05], [0, 1]);
const overlayY = useTransform(scrollYProgress, [0, 0.05], [20, 0]);
// ...
<motion.div style={{ opacity: overlayOpacity, y: overlayY }}>
```

**En Header.tsx** la barra superior usa `AnimatePresence` + `motion.div` con height animation.

Framer Motion es una librería de ~140KB (minificada). En mobile, el hilo principal ya está saturado por los 80 frames. El `useTransform` y el loop de `requestAnimationFrame` del canvas compiten.

**Fix para Mobile:**

```tsx
// Reemplazar el motion.div del overlay por CSS transition en mobile
// Solo usar Framer Motion en desktop
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const isMobile = window.innerWidth < 768;

// En mobile: usar clases CSS simples con transition
// En desktop: mantener Framer Motion exactamente igual
```

**Impacto estimado:** +3-5 puntos (TBT)  
**Riesgo:** ✅ BAJO-MEDIO. Requiere refactor del componente pero es 100% aislado.

---

## 🟢 Problema #5 — CSS Render-Blocking (ba7f54016af718fc.css, 9.7 KiB)

**Este chunk es generado por Next.js/Tailwind en el build.** No es un archivo editable directamente.

**Opciones:**

1. **Inline Critical CSS:** Extraer el CSS "above the fold" e inline en `<head>`. El resto se carga de forma async.
2. **Reducir el bundle de Tailwind:** Verificar que el `purge/content` en Tailwind v4 esté bien configurado para eliminar clases no usadas.
3. **Dividir `StitchLayout.tsx`:** Este archivo tiene 36KB — probablemente está generando CSS masivo. Dividirlo en componentes más pequeños permite mejor code-splitting.

**Investigar en el build:**

```bash
npm run build
# Revisar el output de Next.js para ver qué genera ese chunk
```

**Impacto estimado:** +8-12 puntos (elimina 200ms de bloqueo)  
**Riesgo:** 🟡 MEDIO. Requiere análisis del build output. No tocar sin ver primero.

---

## 🟢 Problema #6 — Caché Vercel (X-Vercel-Cache: MISS)

**Síntoma:** La página se regenera en servidor en cada petición en lugar de servirse desde caché.

**Causa probable:** `CameraScroll` y/o componentes en `page.tsx` tienen comportamiento dinámico que impide el caché estático de Vercel.

**Fix en `page.tsx`:**

```tsx
// Agregar al top del archivo:
export const revalidate = 300; // Revalida cada 5 minutos (ISR)
// O para contenido completamente estático:
export const dynamic = 'force-static';
```

**⚠️ Riesgo de contenido desactualizado:** Si usan un CMS o datos dinámicos, usar `revalidate: 300`. NO usar `force-static` sin auditar primero que la página no tiene datos que cambien.

**Impacto estimado:** Mejora TTFB (Time to First Byte), no afecta directamente el score de Lighthouse pero mejora la experiencia real.  
**Riesgo:** 🟡 MEDIO. Requiere confirmar que no hay datos dinámicos.

---

## ✅ Orden de Implementación Recomendado

| # | Acción | Archivo | Tiempo | Impacto | Riesgo |
|---|---|---|---|---|---|
| 1 | `fetchPriority="high"` + `decoding="sync"` en logo | `Header.tsx` L.85-91 | 5 min | +15-20 pts | ✅ Cero |
| 2 | Subsampling mobile en CameraScroll (Opción A) | `CameraScroll.tsx` L.46-79 | 30 min | +10-15 pts | ✅ Bajo |
| 3 | Consolidar fuentes con `display: swap` | `layout.tsx` | 20 min | +5-8 pts | ✅ Bajo |
| 4 | Simplificar Framer Motion en mobile | `CameraScroll.tsx` + `Header.tsx` | 45 min | +3-5 pts | ✅ Bajo |
| 5 | Análisis CSS render-blocking | `next.config.js` + build | 1-2 hrs | +8-12 pts | 🟡 Medio |
| 6 | ISR configuration en page.tsx | `page.tsx` | 10 min | TTFB | 🟡 Medio |

**Predicción:** Con pasos 1+2+3 → de 67 a ~85-90. Con todo → 90+.

---

## ❓ Preguntas Pendientes a Confirmar

1. **¿Los frames son realmente 1920×1080?** → Si sí, el subsampling es obligatorio. Si son más pequeños, ajustar la estrategia.
2. **¿Existe versión SVG del logo?** → Ideal para un logo responsive más ligero en mobile.
3. **¿Hay datos dinámicos en la página?** (CMS, formularios, A/B testing) → Determina si ISR es seguro.
4. **¿Hay un `next.config.js`?** → No se encontró en el diagnóstico. Necesario para configuraciones avanzadas.

---

## 📌 Notas para el Modelo Avanzado

- **No se ha modificado ningún archivo.** Todo es análisis puro.
- Empezar por `Header.tsx` (fix del logo) — es el cambio de mayor ROI con menos riesgo.
- El `CameraScroll.tsx` es el componente clave. Leerlo completo antes de modificar.
- `StitchLayout.tsx` tiene 36KB — leerlo con `view_file_outline` antes de tocar.
- El proyecto usa **Tailwind v4** (sintaxis `@theme` en globals.css, no `tailwind.config.js`).
- El fix de mobile para la animación debe ser **condicional por breakpoint**, nunca eliminar el behavior en desktop.
