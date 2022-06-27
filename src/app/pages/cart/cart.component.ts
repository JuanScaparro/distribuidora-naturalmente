import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { IProductPayload } from '../../interfaces/IProductPayload.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public products: IProductPayload[] = [];

  constructor( private cartService: CartService ) { }

  ngOnInit(): void {
    this.getCart()
  }

  private getCart() {
    this.products = this.cartService.getProducts()
  }


}
