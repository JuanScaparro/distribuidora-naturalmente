import { Component, OnDestroy, OnInit, AfterViewInit , ViewChild, ElementRef } from '@angular/core';

import { CartService } from '../../services/cart.service';

import { IProductPayload } from '../../interfaces/IProductPayload.interface';
import { Subscription } from 'rxjs';

import { CartLabelTable } from '../../utils/constants';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy, AfterViewInit {


  @ViewChild('modal') theModal: ElementRef = new ElementRef(null)



  public products: IProductPayload[] = [];
  private subscription$: Subscription = new Subscription();

  public cartLabelTable: any;

  constructor( private cartService: CartService ) {
    this.cartLabelTable = CartLabelTable;
  };

  ngOnInit(): void {
    this.getCart();
  };

  ngAfterViewInit(): void {
    setTimeout(() => {
      console.log(this.theModal)
      this.theModal.nativeElement.classList.remove("modal")
    });
  }


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
