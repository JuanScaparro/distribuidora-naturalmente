import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { IProduct } from '../../../../interfaces/IProduct.interface';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input('product') product: IProduct = {}
  @Output('product-payload') payloadEmitter: EventEmitter<any> = new EventEmitter<any>()

  public quantity: number = 1

  constructor() { }

  ngOnInit(): void {
  }

  public setSelectedQuantity(selectedQuantity: number) {
    this.quantity = selectedQuantity 
    console.log(this.quantity)
  }

  public setProduct( ) {
    const payload: any = {
      product: this.product,
      quantity: this.quantity
    }

    this.payloadEmitter.emit(payload)
  }
}
