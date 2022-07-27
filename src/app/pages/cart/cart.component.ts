import { Component, OnDestroy, OnInit } from '@angular/core';

import { CartService } from '../../services/cart.service';

import { IProductPayload } from '../../interfaces/IProductPayload.interface';
import { Subscription } from 'rxjs';

import { CartLabelTable } from '../../utils/constants';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy {

  public products: IProductPayload[] = [];
  private subscription$: Subscription = new Subscription();

  public cartLabelTable: any;

  constructor( private cartService: CartService ) {
    this.cartLabelTable = CartLabelTable;
  };

  ngOnInit(): void {
    this.getCart();
  };

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  };

  private getCart() {
    this.subscription$ = this.cartService.products$.subscribe( products => this.products = products );
  };

  public deleteProduct(product: IProductPayload){
    this.cartService.deleteProduct( product );
  };

};
