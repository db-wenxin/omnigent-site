import PublicationIndex from "@/components/blog/PublicationIndex";
import { productionSiteUrl } from "@/lib/site";

export const metadata = {
  title: "Feature notes",
  description: "Short posts spotlighting individual Omnigent features.",
  alternates: { canonical: `${productionSiteUrl}/feature-notes` },
};

export default function FeatureNotesIndex() {
  return <PublicationIndex notesSelected />;
}
