import { Injectable } from '@angular/core';
import {ItemsType} from "../type/items.type";

@Injectable()
export class ProductService {

  constructor() { }


  getProducts(): ItemsType[] {
    // ajax

    return [
      {
        image: '1-macaroon.png',
        title: 'Макарун с малиной',
        info: {
          quantity: '1 шт.',
          price: 1.70
        }
      },
      {
        image: '4.png',
        title: 'Макарун с манго',
        info: {
          quantity: '1 шт.',
          price:  1.70
        }
      },
      {
        image: '5.png',
        title: 'Пирог с ванилью',
        info: {
          quantity: '1 шт.',
          price: 1.70
        }
      },
      {
        image: '7.png',
        title: ' Пирог с фисташками',
        info: {
          quantity: '1 шт.',
          price:  1.70
        }
      },
    ]

  }
}
