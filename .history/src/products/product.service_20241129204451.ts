import { Product } from "./product.model";

export const product: Product[] = [];

export const addProduct = (data: Product) =>{
 product.push(data);
}

export const clcstock = ():number =>{
  let total = 0;
  products.forEach(product) =>{
    total += product.stock;
  }
}
