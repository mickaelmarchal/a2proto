
import { Component } from '@angular/core';

import { Hero } from '../hero';


@Component({
  moduleId: module.id,
  selector: 'hero-edit',
  templateUrl: 'hero-edit.component.html'
})
export class HeroEditComponent {

    powers = ['Really smart', 'Super flexible', 'Super hot', 'Weather changer'];

    model = new Hero(18, 'Dr IQ', 36, this.powers[0], 'Chuck Overstreet');

    submitted = false;

    active = true;

    onSubmit() { this.submitted = true; }

    // creates a "diagnostic" property and set a getter
    get diagnostic() { return JSON.stringify(this.model); }

    newHero() {
        this.model = new Hero(42, '', 12, '');

        //fix to reset form
        this.active = false;
        setTimeout(() => this.active = true, 0);
    }
}
