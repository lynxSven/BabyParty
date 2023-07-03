import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../items/items.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit{
  constructor(public itemsService: ItemsService) {

  }
  ngOnInit() {
    this.itemsService.loadAllData();
    this.itemsService.loadDataReservedByCurrentUser();
  }

}
