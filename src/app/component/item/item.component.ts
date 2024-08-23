import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ItemsType} from "../../type/items.type";
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() item: ItemsType
  @Output() addToCartEvent: EventEmitter<ItemsType> = new EventEmitter<ItemsType>()

  constructor(public cartService: CartService) {
    this.item = {
      image: '',
      title: '',
      info: {
        quantity: '',
        price: 0,
      }
    }
  }

  ngOnInit(): void {
}

addItemToCart(item: ItemsType) {
  this.addToCartEvent.emit(this.item);
  if(this.cartService.cost === 0){
    this.cartService.cost = item.info.price;
  } else {
    this.cartService.cost +=  item.info.price;
  }
  alert(item.title);
}


}
