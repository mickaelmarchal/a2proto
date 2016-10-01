import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'demo-form',
  template: `
    <div class="ui raised segment">
      <h2 class="ui header">Demo Form: Sku</h2>
      <form [formGroup]="myForm"
          (ngSubmit)="onSubmit(myForm.value)"
          class="ui form">
 
        <div class="field">
          <label for="skuInput">SKU</label>
          <input type="text"
              id="skuInput"
              placeholder="SKU"
              [formControl]="myForm.controls['sku']">
        </div>
 
        <button type="submit" class="ui button">Submit</button>
      </form>
    </div>
  `
})
export class DemoFormComponent {

    myForm: FormGroup;

    constructor(fb: FormBuilder) {
      this.myForm = fb.group({
        'sku': ['ABC123']
      });
    }

    onSubmit(value: any): void {
        console.log(value);
    }
}