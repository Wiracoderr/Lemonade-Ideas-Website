"use client";

import dynamic from "next/dynamic";

// We wrap the heavy CameraScroll component in a Client Component.
// This allows us to use `ssr: false` natively, completely stopping
// Next.js from hydrating or executing its complex JS on page-load.
const CameraScroll = dynamic(() => import("./CameraScroll"), {
    ssr: false,
});

export default function CameraScrollWrapper() {
    return <CameraScroll />;
}
