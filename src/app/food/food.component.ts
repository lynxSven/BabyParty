import { Component, OnInit } from '@angular/core';
import { FoodService } from '../service/food/food.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss']
})
export class FoodComponent implements OnInit{

  constructor(public foodService: FoodService){

  }
  ngOnInit() {
    this.foodService.loadAllData();
  }
}
