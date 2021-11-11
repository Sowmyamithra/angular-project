import { Component, OnInit } from '@angular/core';

interface Product{
  sno: string, 
  name: string,
  image: string,
  qty: number,
  price: number
}

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  public products: Product[] = [
    {
      sno: 'AA101',
      name: 'MI Watch',
      image: 'assets/img/miW.jpeg',
      qty: 2,
      price: 1500
    },
    {
      sno: 'AA102',
      name: 'Apple Watch',
      image: 'assets/img/appleW.jpeg',
      qty: 2,
      price: 1800
    },
    {
      sno: 'AA103',
      name: 'Redmi Watch',
      image: 'assets/img/redmiW.jpeg',
      qty: 2,
      price: 1400
    },
    {
      sno: 'AA104',
      name: 'Oppo Watch',
      image: 'assets/img/oppoW.jpeg',
      qty: 2,
      price: 1400
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
  
  public incrementQty(product: Product): void{
    product.qty = product.qty + 1;
  }

  public decrementQty(product: Product): void{
    product.qty = (product.qty > 0) ? (product.qty - 1) : 0;
  }

  public getGrandTotal(): number{
    let total = 0;
    for(let product of this.products){
      total = total + (product.qty * product.price);
    }
    return total;
  }

}
