export interface Image {
  width: number;
  height: number;
  url: string;
  preview: string;
  title?: string;
}

export interface Gallery {
  galleryCollection: {
    items: {
      carName: string;
      services?: string;
      imagesCollection: {
        items: Image[];
      };
    }[];
  };
}

export interface Rating {
  ratingsCollection: {
    items: {
      author: string;
      content: string;
      rating: number;
    }[];
  };
}

export interface Service {
  servicesCollection: {
    items: {
      name: string;
      description: string;
      highlighted: boolean;
      icon: {
        url: string;
      };
    }[];
  };
}

export interface Package {
  packagesCollection: {
    items: {
      name: string;
      description?: string;
      category: string;
      startingPrice?: number;
      services?: string[];
      prices?: {
        id: string;
        key: string;
        value: string;
      }[];
    }[];
  };
}

export interface Asset {
  assetCollection: {
    items: Image[];
  };
}

export interface Page {
  pageCollection: {
    items: {
      _id: string;
      name: string;
      description?: string;
      seoTitle: string;
      seoDescription: string;
    }[];
  };
}
