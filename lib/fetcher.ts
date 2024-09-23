export default async function fetcher<T>({
  query,
  variables = {},
  preview = false,
}: {
  query: string;
  variables?: object;
  preview?: boolean;
}) {
  const response = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: preview
          ? `Bearer ${process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN}`
          : `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({ query, variables }),
      next: { tags: ["content"], revalidate: 0 },
    },
  );

  const { data, errors } = await response.json();

  if (errors) {
    throw new Error("Could not get content");
  }

  return data as T;
}
