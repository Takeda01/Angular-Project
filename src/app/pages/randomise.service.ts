import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomiseService {

  constructor() { }
  getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
   generateSequence(): number[] {
    const firstNumber = this.getRandomNumber(0, 5);
    let secondNumber = this.getRandomNumber(0, 5);
  
   
    while (Math.abs(secondNumber - firstNumber) > 3) {
      secondNumber = this.getRandomNumber(0, 5);
    }
  
    const sequence: number[] = [];
    for (let i = Math.min(firstNumber, secondNumber); i <= Math.max(firstNumber, secondNumber) + 3; i++) {
      sequence.push(i % 9); 
    }
  
    return sequence;
  }
  
}
