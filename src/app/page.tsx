import { Metadata } from "next";
import { getItems } from "./services/fetch";
import { RootPage } from "@/components/rootPage/rootPage";

export const metadata:Metadata = {
  title:"Home Page",
  description:"Home Page"
}

export default async function Home() {
  const items: IItems[] = await getItemsFunc();
  return <RootPage items={items} />;
}

async function getItemsFunc() {
  const data = await getItems();
  return data;
}
