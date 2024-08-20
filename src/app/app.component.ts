import {Component, OnInit} from '@angular/core';
import {PriorityType} from "./type/priority.type";
import {ItemsType} from "./type/items.type";
import {ProductService} from "./services/product.service";
import {CartService} from "./services/cart.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ProductService]
})
export class AppComponent implements OnInit {

  public menu(target: HTMLElement): void {
    target.classList.add('open')
  }
  public close(target: HTMLElement): void {
    target.classList.remove('open')
  }

  constructor(private productService: ProductService, public cartService: CartService) {

  }

  public phoneNumber: string = '375293689868'




  public priorities: PriorityType[] = [
    {
      number: '1',
      title: 'Лучшие продукты',
      description: 'Мы честно готовим макаруны только из натуральных и качественных продуктов. Мы не используем консерванты, ароматизаторы и красители.'
    },
    {
      number: '2',
      title: 'Много вкусов',
      description: 'Наша задача – предоставить вам широкое разнобразие вкусов. Вы удивитесь, но у нас более 70 вкусов пироженок.'
    },
    {
      number: '3',
      title: 'Бисквитное тесто',
      description: 'Все пирожные готовятся на бисквитном тесте с  качественным сливочным маслом 82,5%. В составе нет маргарина и дрожжей!'
    },
    {
      number: '4',
      title: 'Честный продукт',
      description: 'Вкус, качество и безопасность наших пирогов подтверждена декларацией о соответствии, которую мы получили 22.06.2016 г.'
    }
  ]

  public items: ItemsType[] = []

  public formValues = {
    itemTitle: '',
    customerName: '',
    phone: ''
  }


  ngOnInit() {
    this.items = this.productService.getProducts()
  }

  public scrollTo(target: HTMLElement): void {
    target.scrollIntoView({behavior: "smooth"})
  };

  public addToCart(item: ItemsType, target: HTMLElement): void {
    this.scrollTo(target)
    this.formValues.itemTitle = item.title.toUpperCase()
    this.cartService.count++
    alert(this.formValues.itemTitle)

  }

  showPresent: boolean = true
  showNumber: boolean = true



}
