export const getItems = async () => {
  return fetch("http://localhost:4000/items").then((res) => res.json());
};

export const getItemsBuSlug = async (slug: string) => {
  return fetch(`http://localhost:4000/items/slug/${slug}`).then((res) =>
    res.json()
  );
};
