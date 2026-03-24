import GrowthBlueprintEstimator from '@/components/calculator/GrowthBlueprintEstimator';

export const metadata = {
  title: "Growth Blueprint Estimator | Lemonade Ideas",
  description: "Calculate your comprehensive B2B Marketing, Local SEO, and Branding strategy.",
};

export default function GrowthEstimatePage() {
  return (
    <main className="bg-slate-50 min-h-screen py-16 md:py-24 pt-32">
      <GrowthBlueprintEstimator />
    </main>
  );
}
