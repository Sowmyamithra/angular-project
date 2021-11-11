import { Component, OnInit } from '@angular/core';

interface Product{
  sno: string,
  name: string,
  image: string,
  qty: number,
  price: number
}

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  public product: Product = {
    sno: 'AA101',
    name: 'MI Watch',
    image: 'assets/img/miW.jpeg',
    qty: 2,
    price: 1500
  };

  constructor() { }

  ngOnInit(): void {
  }

  public incrementQty(): void{
    this.product.qty = this.product.qty + 1;
  }

  public decrementQty(): void{
    this.product.qty = (this.product.qty > 0) ? (this.product.qty - 1) : 0;
  }

}
