import { Directive, Input } from '@angular/core';
import { AbstractControl, FormGroup, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from "@angular/forms";



@Directive({
  selector: '[appCheckPassword]',
  providers: [{ provide: NG_VALIDATORS, useExisting: CheckPasswordDirective, multi: true }]
})
export class CheckPasswordDirective implements Validator {
  @Input() appCheckPassword!:string;
  validate(control: AbstractControl): {[key:string]:any} | null {
    const controlToCompare = control.parent?.get(this.appCheckPassword);
  
    if(controlToCompare && controlToCompare.value !== control.value){
      return {'notEqual': true}
    } 
    return null;
  }
}