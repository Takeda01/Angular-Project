import { Injectable } from '@angular/core';
import { Subject } from '../types/subject';
import { Supplement } from '../types/supplement';
import { ThisReceiver } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  list:Subject[] = []
  constructor() { }
  sum:number = 0;

  AddItem(item: Supplement) {
    const newItem: Subject = {
      Name: item.EqName ? item.EqName : item.Name,
      Price: item.EqName ? item.EqPrice : item.Price,
    };

    this.list.push(newItem);
  }

}
