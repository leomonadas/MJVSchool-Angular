import { Product } from './../../models/product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products: Array<Product> = [
    {
      id: 1,
      description: "Iphone 11",
      price: 3000
    },
    {
      id: 2,
      description: "Iphone 12",
      price: 4000
    },
    {
      id: 3,
      description: "Iphone 13",
      price: 5000
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
