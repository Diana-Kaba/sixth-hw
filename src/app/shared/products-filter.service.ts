import { Injectable } from '@angular/core';
import { Card } from "../interfaces/card";
import { products } from './products';

@Injectable({
  providedIn: 'root'
})

export class ProductsFilterService {

  constructor() { }

  private _products: any[] = products;

  get products() {
    return this._products;
  }

  filterProductsByProp(prop: string, text: string) {
    return this._products.filter(product => {
      return product[prop].toString().toLowerCase().includes(text.toLowerCase());
    });
  }

  // filterProductsByName(text: string) {
  //   return this._products.filter(product => {
  //     return product.name.toLowerCase().includes(text.toLowerCase());
  //   });
  // }

  // filterProductsByDescr(text: string) {
  //   return this._products.filter(product => {
  //     return product.descr.toLowerCase().includes(text.toLowerCase());
  //   });
  // }

  // filterProductsByColor(text: string) {
  //   return this._products.filter(product => {
  //     return product.color.toLowerCase().includes(text.toLowerCase());
  //   });
  // }
}
