import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';


@Component({
  selector: 'demo-form',
  template: `
    <div class="ui raised segment">
      <h2 class="ui header">Demo Form: with validations (explicit)</h2>
      <form [formGroup]="myForm"
          (ngSubmit)="onSubmit(myForm.value)"
          class="ui form">
 
        <div class="field"
            [class.error]="!myForm.controls['sku'].valid && myForm.controls['sku'].touched">
          
          <label for="skuInput">SKU</label>
          <input type="text"
              id="skuInput"
              placeholder="SKU"
              [formControl]="myForm.controls['sku']">
          
          <div *ngIf="!myForm.controls['sku'].valid"
              class="ui error message">SKU is invalid</div>
          <div *ngIf="myForm.controls['sku'].hasError('required')"
              class="ui error message">SKU is required</div>
        
        </div>
 
        <div *ngIf="!myForm.valid"
            class="ui error message">Form is invalid</div>
     
        <button type="submit" class="ui button">Submit</button>
      </form>
    </div>
  `
})
export class DemoFormComponent {

    myForm: FormGroup;



    constructor(fb: FormBuilder) {
      this.myForm = fb.group({
        'sku': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
      });
    }

    onSubmit(value: any): void {
        console.log(value);
    }
}