import { setRequestLocale } from "next-intl/server";
import { Metadata } from "next";
import EbooksForm from "./EbooksForm";

export const metadata: Metadata = {
  title: "Free Ebooks | Lemonade Ideas",
  description: "Download 4 free ebooks with proven marketing strategies for contractors and construction companies to generate leads and scale their business.",
};

export default async function EbooksPage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);

  return <EbooksForm />;
}
