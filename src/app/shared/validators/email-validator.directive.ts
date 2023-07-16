import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';
import { EmailValidtor } from './email-validator';

@Directive({
  selector: '[appEmailValidator]',
  providers: [
{
provide: NG_VALIDATORS,
useExisting: EmailValidatorDirective,
multi: true

}
  ]
})
export class EmailValidatorDirective implements Validator,OnChanges {
 constructor() {}
 @Input() appEmail: string[] = []
 validator: ValidatorFn = () => null
 validate(control: AbstractControl<any,any>): ValidationErrors | null{
 return this.validator(control)


 }

 ngOnChanges(changes: SimpleChanges) : void {
  const CurrChanges = changes["appEmail"]
  if (CurrChanges) {
    this.validator = EmailValidtor(CurrChanges.currentValue)
  }
 }


 
}
