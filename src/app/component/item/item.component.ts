import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ItemsType} from "../../type/items.type";

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() item: ItemsType

  @Output() addToCartEvent: EventEmitter<ItemsType> = new EventEmitter<ItemsType>()
  constructor() {
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

addItemToCart() {
  this.addToCartEvent.emit(this.item);

}

}
