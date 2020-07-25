import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes'


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  dishes : Dish[] = DISHES;

  selectedDish: Dish = DISHES[0]; //get the first element of dish array

  constructor() { }

  ngOnInit() {
  }

  onSelect(dish : Dish){
    this.selectedDish = dish;
  }

}
