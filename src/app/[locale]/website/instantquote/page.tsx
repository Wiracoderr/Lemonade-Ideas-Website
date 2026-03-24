import ConstructionQuoteCalculator from '@/components/calculator/ConstructionQuoteCalculator';

export const metadata = {
  title: "Instant Quote for Construction Websites | Lemonade Ideas",
  description: "Get an instant price estimate for your California construction or general contractor website.",
};

export default function InstantQuotePage() {
  return (
    <main className="bg-slate-50 min-h-screen py-16 md:py-24">
      <ConstructionQuoteCalculator />
    </main>
  );
}
