import { Injectable } from '@angular/core';
import { Supplement } from '../types/supplement';
import { Subject } from '.././types/subject';

@Injectable({
  providedIn: 'root'
})
export class UserService {
history: Subject[] = []

  constructor() { }
}
