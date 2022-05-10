export interface ProductData {
  id?: number;
  name: string;
  image?: string;
  price: number;
  stock: number;
  file?: any;
  file_obj?: URL | string;
  createdAt?: Date;
  updatedAt?: Date;
}
