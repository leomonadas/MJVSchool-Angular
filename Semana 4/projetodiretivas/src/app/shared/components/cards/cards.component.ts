import { Product } from './../../models/product.models';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  
    listaDeProdutos: Array<Product> = [
      { id: 1, imagem: '../../../assets/images/funko_chandler.jpg', nome: 'Funko Chandler', preco: 99.99 },
      { id: 2, imagem: '../../../assets/images/funko_joey.jpg', nome: 'Funko Joey', preco: 79.99 },
      { id: 3, imagem: '../../../assets/images/funko_phoebe.jpg', nome: 'Funko Phoebe', preco: 129.99 },
      { id: 4, imagem: '../../../assets/images/funko_rachel.jpg', nome: 'Funko Rachel', preco: 119.99 },
    ];

    constructor() { }
    
    ngOnInit(): void {
    }
}
