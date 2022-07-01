import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { IProduct } from '../../../../interfaces/IProduct.interface';
import { IProductPayload } from '../../../../interfaces/IProductPayload.interface';
import { ProductItem } from '../../../../utils/constants';
import { Currency } from 'src/app/utils/constants';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input('product') product: IProduct = {};
  @Output('product-payload') payloadEmitter: EventEmitter<IProductPayload> = new EventEmitter<IProductPayload>();

  public quantity: number = 1;
  public productItem: any;
  public currency: any;


  constructor() {
    this.currency = Currency;
    this.productItem = ProductItem;
  };

  ngOnInit(): void {
  };

  public setSelectedQuantity( selectedQuantity: number ) {
    this.quantity = selectedQuantity;
  };

  public setProduct() {
    const payload: IProductPayload = {
      product: this.product,
      quantity: this.quantity
    };

    this.payloadEmitter.emit( payload );
  };

};
