import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss']
})
export class CheckOutComponent {
  name: string = '';
  city: string = '';
  postcode: string = '';
  street: string = '';
  phoneNumber: string = '';

  nameTouched: boolean = false;
  cityTouched: boolean = false;
  postcodeTouched: boolean = false;
  streetTouched: boolean = false;
  phoneNumberTouched: boolean = false;


  constructor( private router: Router, private cart:CartService) {}

  
  onFieldBlur(fieldName: string) {
    switch (fieldName) {
      case 'name':
        this.nameTouched = true;
        break;
      case 'city':
        this.cityTouched = true;
        break;
      case 'postcode':
        this.postcodeTouched = true;
        break;
      case 'street':
        this.streetTouched = true;
        break;
      case 'phoneNumber':
        this.phoneNumberTouched = true;
        break;
      default:
        break;
    }
  }


  isFieldInvalid(fieldName: string): boolean {
    switch (fieldName) {
      case 'name':
        return this.nameTouched && !this.isValidName(this.name);
      case 'city':
        return this.cityTouched && !this.isValidCity(this.city);
      case 'postcode':
        return this.postcodeTouched && !this.isValidPostcode(this.postcode);
      case 'street':
        return this.streetTouched && !this.isValidStreet(this.street);
      case 'phoneNumber':
        return this.phoneNumberTouched && !this.isValidPhoneNumber(this.phoneNumber);
      default:
        return false;
    }
  }


  isValidName(name: string): boolean {
  
    return /^[A-Za-z\s]+$/.test(name);
  }

  isValidCity(city: string): boolean {

    return /^[A-Za-z\s]+$/.test(city);
  }

  isValidPostcode(postcode: string): boolean {

    return /^\d+$/.test(postcode);
  }

  isValidStreet(street: string): boolean {
    
    return /^[A-Za-z\s\d]+$/.test(street);
  }

  isValidPhoneNumber(phoneNumber: string): boolean {
    
    return /^\d+$/.test(phoneNumber);
  }

 Submit(){
  alert("Thanks for your purchase!")
  this.cart.list = []
this.router.navigate([`/home`])
 }
}


