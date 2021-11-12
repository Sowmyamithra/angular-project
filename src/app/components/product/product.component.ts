import { Component, Input, OnInit } from '@angular/core';

interface Product{
  sno: string,
  name: string,
  image: string,
  qty: number,
  price: number
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product: Product | undefined; //can be get from parent tag

  constructor() { }

  ngOnInit(): void {
  }

  public incrementQty(): void{
    if(this.product){
      this.product.qty = this.product.qty + 1;
    }
  }

  public decrementQty(): void{
    if(this.product){
      this.product.qty = (this.product.qty > 0) ? (this.product.qty - 1) : 0;
    }
  }

}
