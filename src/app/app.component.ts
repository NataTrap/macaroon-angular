import {Component} from '@angular/core';
import {PriorityType} from "./type/priority.type";
import {ItemsType} from "./type/items.type";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public menu(target: HTMLElement): void {
    target.classList.add('open')
  }
  public close(target: HTMLElement): void {
    target.classList.remove('open')
  }


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

  public items: ItemsType[] = [
    {
      image: '1-macaroon.png',
      title: 'Макарун с малиной',
      info: {
        quantity: '1 шт.',
        price: '1,70 руб.'
      }
    },
    {
      image: '4.png',
      title: 'Макарун с манго',
      info: {
        quantity: '1 шт.',
        price: '1,70 руб.'
      }
    },
    {
      image: '5.png',
      title: 'Пирог с ванилью',
      info: {
        quantity: '1 шт.',
        price: '1,70 руб.'
      }
    },
    {
      image: '7.png',
      title: ' Пирог с фисташками',
      info: {
        quantity: '1 шт.',
        price: '1,70 руб.'
      }
    },
  ]

  public formValues = {
    itemTitle: '',
    customerName: '',
    phone: ''
  }

  public scrollTo(target: HTMLElement): void {
    target.scrollIntoView({behavior: "smooth"})
  };

  public addToCart(item: ItemsType, target: HTMLElement): void {
    this.scrollTo(target)
    this.formValues.itemTitle = item.title.toUpperCase()
  }

  showPresent: boolean = false
  showNumber: boolean = false



}
