import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-icon',
  templateUrl: './cart-icon.component.html',
  styleUrls: ['./cart-icon.component.css']
})
export class CartIconComponent implements OnInit {

  public quantity: number = 0
  private subscription$: Subscription = new Subscription()
  constructor( private cartService: CartService ) { }

  ngOnInit(): void {
    this.getProducts()
  }

  private getProducts(){
    this.subscription$ = this.cartService.products$.subscribe(cart => this.quantity = cart.length)
  }

}
