import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Routes } from '@angular/router';
import { Iproducts } from 'src/app/shared/module/products.interface';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  productId !: string;
  ProductObj !: Iproducts;

  constructor(
    private _routes: ActivatedRoute,
    private _productsService : ProductsService
  ) { }

  ngOnInit(): void {
    this.productParams();
  }

  productParams(){
    this._routes.params
      .subscribe((params: Params)=>{
        this.productId = params['productId'];
        if (this.productId) {
          this.ProductObj = this._productsService.getProductDetail(this.productId)!;
        }
      })
  }

  onProductRemove(){
    if (this.productId) {
      this._productsService.removeProduct(this.productId)
    }
  }
}
