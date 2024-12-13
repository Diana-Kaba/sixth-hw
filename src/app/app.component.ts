import { Component } from '@angular/core';
import { ProductsFilterService } from './shared/products-filter.service';
import { Card } from './interfaces/card';
import { NumbersService } from './shared/numbers.service';
import { ProductsSortService } from './shared/products-sort.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sixth-hw';
  products!: Card[];
  valueForFilter!: string;
  // isEmpty: boolean[] = [false, false, false];
  isEmpty: boolean = false;


  numbers!: number[];

  constructor(
    public productsFilterService: ProductsFilterService,
    public productsSortService: ProductsSortService,
    public numbersService: NumbersService
    ) {}

  ngOnInit() {
    this.products = this.productsFilterService.products;
    this.numbers = this.numbersService.numbers;
  }

  filterByProp(prop: string, newVal: string) {
    this.valueForFilter = newVal;
    this.products = this.productsFilterService.filterProductsByProp(prop, this.valueForFilter);
    if (this.products.length == 0)
      this.isEmpty = true;
    else
      this.isEmpty = false;
  }

  // filterByName(newVal: string) {
  //   this.valueForFilter = newVal;
  //   this.products = this.productsFilterService.filterProductsByProp('name', this.valueForFilter);
  //   if (this.products.length == 0)
  //     this.isEmpty[0] = true;
  //   else
  //     this.isEmpty[0] = false;
  // }

  // filterByDescr(newVal: string) {
  //   this.valueForFilter = newVal;
  //   this.products = this.productsFilterService.filterProductsByProp('descr', this.valueForFilter);
  //   if (this.products.length == 0)
  //     this.isEmpty[1] = true;
  //   else
  //     this.isEmpty[1] = false;
  // }

  // filterByColor(newVal: string) {
  //   this.valueForFilter = newVal;
  //   this.products = this.productsFilterService.filterProductsByProp('color', this.valueForFilter);
  //   if (this.products.length == 0)
  //     this.isEmpty[2] = true;
  //   else
  //     this.isEmpty[2] = false;
  // }
}
