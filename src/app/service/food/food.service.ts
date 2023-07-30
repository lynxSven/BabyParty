import { Injectable } from '@angular/core';
import { FoodItems } from './foodItems';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  items: FoodItems[] = [];
  constructor() { }
}
