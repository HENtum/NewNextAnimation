import { getItems, getItemsBuSlug } from "@/app/services/fetch";
import OnePage from "@/components/onePage/onePage";

interface rootPage {
  params: IItems;
}

export async function generateMetadata<T extends rootPage>({ params }: T) {
  return {
    title: params.slug + " page",
    description: "About coffe",
  };
}

export default async function Page<T extends rootPage>({ params }: T) {
  const data = await getBySlug(params?.slug);
  return <OnePage data={data} />;
}
export async function generateStaticParams() {
  const posts = await getItems();
  return posts.map((obj: IItems) => ({
    slug: obj.slug,
  }));
}

async function getBySlug(slug: string) {
  const data = await getItemsBuSlug(slug);
  return data;
}
