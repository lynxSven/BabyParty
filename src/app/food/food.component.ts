import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from '../login/auth/auth.service';
import { FoodService } from '../service/food/food.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss']
})
export class FoodComponent implements OnInit {
  foodHeadline = new FormControl('', Validators.required);
  foodText = new FormControl('');

  constructor(public foodService: FoodService, public authService: AuthService) {

  }
  ngOnInit() {
    this.foodService.loadAllData();
  }

  submit() {
    console.log("submiting");
    console.log("submiting", this.foodHeadline.value);
    console.log("submiting", this.foodText.value);

    this.foodService.createFood(this.foodHeadline.value, this.foodText.value);
  }

  delete(id: string) {
    this.foodService.deleteFood(id);
  }
}
