import { Component, OnInit } from "@angular/core";
import { cartItem } from "./cart.models";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styles: [],
})
export class CartComponent implements OnInit {
  cart: cartItem[] = [{ product: "https://via.placeholder.com/150", name: "snickers", price: 150, quantity: 1, id: 1 }];

  dataSource: cartItem[] = [];

  ngOnInit() {
    this.dataSource = this.cart;
  }
}
