import { Component } from '@angular/core';
import { FoodService } from '../service/food/food.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss']
})
export class FoodComponent {

  constructor(public foodService: FoodService){

  }

}
