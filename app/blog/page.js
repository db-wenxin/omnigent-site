import PublicationIndex from "@/components/blog/PublicationIndex";
import { productionSiteUrl } from "@/lib/site";

export const metadata = {
  title: "Blog",
  description:
    "Product updates, tutorials, and deep dives from the Omnigent team, partners, and community.",
  alternates: { canonical: `${productionSiteUrl}/blog` },
};

export default function BlogIndex() {
  return <PublicationIndex />;
}
