import fetcher from "@/lib/fetcher";
import type {
  Gallery,
  Rating,
  Service,
  Package,
  Asset,
  Page,
} from "@/lib/types";

export async function getGallery() {
  const query = `
    query {
      galleryCollection(order: sys_publishedAt_ASC) {
        items {
          carName
          services
          imagesCollection {
            items {
              width
              height
              url(transform: {
                format: WEBP
                quality: 80
              })
              preview: url(transform: {
                width: 350,
                height: 250,
                quality: 75,
                format: WEBP,
                resizeStrategy: THUMB
              })
              title
            }
          }
        }
      }
    }
  `;

  const data = await fetcher<Gallery>({ query });

  if (!data) {
    return null;
  }

  return data;
}

export async function getLatestImages(
  variables: {
    limit: number | null;
    where: { contentType: string | null } | null;
  } = {
    limit: 4,
    where: {
      contentType: "image/jpeg",
    },
  },
) {
  const query = `
    query($limit: Int, $where: AssetFilter) {
      assetCollection(limit: $limit, where: $where, order: sys_publishedAt_ASC) {
        items {
          title
          width
          height
          url(transform: {
            format: WEBP
            quality: 80
          })
          preview: url(transform: {
            width: 350,
            height: 250,
            quality: 75,
            format: WEBP,
            resizeStrategy: THUMB
          })
        }
      }
    }
  `;

  const data = await fetcher<Asset>({ query, variables });

  if (!data) {
    return null;
  }

  return data;
}

export async function getRatings() {
  const query = `
    query {
      ratingsCollection(limit: 3, order: sys_publishedAt_ASC) {
        items {
          author
          rating
          content
        }
      }
    }
  `;

  const data = await fetcher<Rating>({ query });

  if (!data) {
    return null;
  }

  return data;
}

export async function getServices(
  variables: { limit: number | null } = {
    limit: null,
  },
) {
  const query = `
    query($limit: Int) {
      servicesCollection(limit: $limit) {
        items {
          name
          description
          highlighted
          icon {
            url
          }
        }
      }
    }
  `;

  const data = await fetcher<Service>({
    query,
    variables,
  });

  if (!data) {
    return null;
  }

  return data;
}

export async function getPackages(
  variables: { limit: number | null } = {
    limit: null,
  },
) {
  const query = `
    query($limit: Int) {
      packagesCollection(limit: $limit) {
        items {
          name
          description
          category
          startingPrice
          services
          prices
        }
      }
    }
  `;

  const data = await fetcher<Package>({
    query,
    variables,
  });

  if (!data) {
    return null;
  }

  return data;
}

export async function getPages(
  variables: { where: { name: string | null } } = {
    where: { name: null },
  },
) {
  const query = `
    query($where: PageFilter) {
      pageCollection(where: $where) {
        items {
          _id
          name
          description
          seoTitle
          seoDescription
        }
      }
    }
  `;

  const data = await fetcher<Page>({ query, variables });

  if (!data) {
    return null;
  }

  return data.pageCollection.items.at(0);
}
