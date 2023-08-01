import { Component, OnInit } from '@angular/core';
import { Subject } from '../../types/subject';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  list: Subject[] = [];
  total: number = 0; // Use lowercase 'number' here

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.list = this.cartService.list;
    this.calculateTotal();
  }

  calculateTotal(): void {
    this.total = 0; // Initialize total to zero before calculating the sum

    for (const item of this.list) {
      this.total += item.Price;
    }
  }

  CheckOutDetails(){
    
  }

}

