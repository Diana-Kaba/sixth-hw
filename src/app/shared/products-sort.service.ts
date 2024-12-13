import { Injectable } from '@angular/core';
import { products } from './products';
import { Card } from '../interfaces/card';

@Injectable({
  providedIn: 'root'
})
export class ProductsSortService {

  constructor() { }

  private _products: Card[] = products;

  get products() {
    return this._products;
  }

  sortInDecline() { // За спаданням
    this.products.sort((a, b) => a.price - b.price);
  }

  sortInAscending () { // За зростанням
    this.products.sort((a, b) => b.price - a.price);
  }
}
