export interface Image {
  id: string;
  urls: { small: string; regular: string };
  alt_description: string;
  user: {
    name: string;
  };
  likes: number;
}

export interface SelectedImage {
  imageUrl: string;
  alt: string;
}

export interface FetchImgResponse {
  results: Image[];
  total_pages: number;
}
