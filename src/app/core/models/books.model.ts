export interface BooksResponse {
  kind: string;
  totalItems: number;
  items: BookResponse[];
}

export interface BookResponse {
  accessInfo: object;
  etag: string;
  id: string;
  kind: string;
  saleInfo: object;
  searchInfo: object;
  selfLink: string;
  volumeInfo: Book;
}

export interface Book {
  allowAnonLogging: boolean;
  authors: string[];
  canonicalVolumeLink: string;
  categories: string[];
  contentVersion: string;
  imageLinks: { smallThumbnail: string; thumbnail: string };
  industryIdentifiers: object[];
  infoLink: string;
  language: string;
  maturityRating: string;
  pageCount: number;
  panelizationSummary: object;
  previewLink: string;
  printType: string;
  publishedDate: string;
  readingModes: object;
  subtitle: string;
  title: string;
}

export interface BookData {
  items: Book[];
  totalItems: number;
}
