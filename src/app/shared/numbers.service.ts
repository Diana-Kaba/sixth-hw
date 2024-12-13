import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumbersService {

  numbers: number[] = [1, 23, 84, 5, 11, 32, 9, 44, 98, 3];

  constructor() { }

  sortInDecline() { // За спаданням
    this.numbers.sort((a, b) => a - b);
  }

  sortInAscending () { // За зростанням
    this.numbers.sort((a, b) => b - a);
  }

  getMaxValue() {
    let max: number = 0;
    this.numbers.forEach(number => {
      if (number > max)
        max = number;
    });
    return max;
  }
}
