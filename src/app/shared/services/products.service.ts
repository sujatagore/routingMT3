import { Injectable } from '@angular/core';
import { Iproducts } from '../module/products.interface';
import { Router } from '@angular/router';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  productsArr : Array<Iproducts> = [
    {
      pid: '1',
      pname: "Apple iPhone 13",
      pstatus: "Delivered",
      canReturn: 1,
      productDescription: "A sleek and powerful smartphone with a 6.1-inch display, 12MP camera, and A15 Bionic chip.",
      price: 999.99,
      brand: "Apple",
      rating: 4.8,
      images: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGtYsyTQqLoA54euK1Nr2cYU3rteTjjAHMOA&s"
    },
    {
      pid: '2',
      pname: "Samsung Galaxy S22",
      pstatus: "Dispatched",
      canReturn: 0,
      productDescription: "A feature-packed smartphone with a 6.2-inch display, 50MP camera, and large 5000mAh battery.",
      price: 899.99,
      brand: "Samsung",
      rating: 4.5,
      images: "data:image/jpeg;base64,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"
    },
    {
      pid: '3',
      pname: "Google Pixel 6",
      pstatus: "In Progress",
      canReturn: 1,
      productDescription: "A camera-centric smartphone with a 6.4-inch display, 50MP camera, and snappy Google Tensor chip.",
      price: 699.99,
      brand: "Google",
      rating: 4.7,
      images: "https://images.hindustantimes.com/tech/img/2023/02/24/960x540/Untitled_design_-_2023-02-24T124129777_1677222955655_1677222955898_1677222955898.png"
    },
    {
      pid: '4',
      pname: "OnePlus 9 Pro",
      pstatus: "Delivered",
      canReturn: 1,
      productDescription: "A fast and feature-rich smartphone with a 6.7-inch display, 48MP camera, and large 4500mAh battery.",
      price: 969.99,
      brand: "OnePlus",
      rating: 4.6,
      images: "https://oasis.opstatics.com/content/dam/oasis/page/2021/9-series/spec-image/9-pro/Morning%20mist-gallery.png"
    },
    {
      pid: '5',
      pname: "Huawei P30 Pro",
      pstatus: "Dispatched",
      canReturn: 0,
      productDescription: "A camera-focused smartphone with a 6.1-inch display, 40MP camera, and large 4200mAh battery.",
      price: 799.99,
      brand: "Huawei",
      rating: 4.4,
      images: "https://i.gadgets360cdn.com/products/large/1553612597_635_huawei_p30_pro.jpg?downsize=*:360"
    }
  ]

  constructor(
    private _router : Router,
    private _snackbar : SnackbarService
  ) { }

  fetchAllProducts(): Array<Iproducts>{
      return this.productsArr
  }

  getProductDetail(id : string) : Iproducts | undefined{
    return this.productsArr.find(product => product.pid === id)
  }

  addProduct(pro : Iproducts){
    this.productsArr.push(pro);
    this._router.navigate(['/products']);
    this._snackbar.openSnackBar(`The product ${pro.pname} is added successfully!!!!`)
  }

  removeProduct(pid: string){
    let getIndex = this.productsArr.findIndex(pro => pro.pid === pid);
    let removeproduct = this.productsArr[getIndex];
    this.productsArr.splice(getIndex, 1);
    this._router.navigate(['/products']);
    this._snackbar.openSnackBar(`The Product ${removeproduct.pname} is removed successfully!!!!`)
}

  updateProduct(updObj: Iproducts){
    let getIndex = this.productsArr.findIndex(pro => pro.pid === updObj.pid);
    let updatedProduct = this.productsArr[getIndex];
    this.productsArr[getIndex] = updObj;
    this._router.navigate(['/products']);
    this._snackbar.openSnackBar(`The Product ${updatedProduct.pname} is updated to ${updObj.pname} successfully!!!!`)
  }
}