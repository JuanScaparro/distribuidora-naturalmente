import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

import { IProduct } from '../../interfaces/IProduct.interface';
import { IProductPayload } from "../../interfaces/IProductPayload.interface"
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})

export class StoreComponent implements OnInit {

  public products: IProduct[] = []

  constructor( 
    private productsService: ProductsService,
    private cartService: CartService
    ) {
    
  }

  ngOnInit(): void {
    this.getProducts()
  }

  private getProducts(){
    this.productsService.getProducts().then(res => {
      console.log(res)
      this.products = res
    })
  }

  public addProductToCart(productPayload: IProductPayload) {
    
    this.cartService.addProduct(productPayload)
  }
  
}


/**
 * public addProduct(){
    const payload: IProduct = {
      id: '003',
      name: 'lentes de sol',
      description: 'Lindos lentes',
      price: 2345.8
    }

    this.productsService.postProduct(payload).then( res => {
      console.log(res)
      this.getProducts()
    })
  }
 */