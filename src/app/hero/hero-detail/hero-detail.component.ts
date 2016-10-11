import { Component, OnInit, HostBinding,
    EventEmitter, Input, OnInit, Output,
    trigger, transition, animate,
    style, state } from '@angular/core';

import { Component, } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';

import { Hero } from '../hero';
import { HeroService } from '../../core/hero.service';

@Component({
  moduleId: module.id,
  selector: 'my-hero-detail',
  templateUrl: 'hero-detail.component.html',
  styleUrls: ['hero-detail.component.css'],

  //animate entering and leaving the view
  animations: [
    trigger('routeAnimation', [
      state('*',
          style({
            opacity: 1,
            transform: 'translateX(0)'
          })
      ),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-100%)'
        }),
        animate('0.2s ease-in')
      ]),
      transition('* => void', [
        animate('0.5s ease-out', style({
          opacity: 0,
          transform: 'translateY(100%)'
        }))
      ])
    ])
  ]
})
export class HeroDetailComponent implements OnInit {

  @HostBinding('@routeAnimation') get routeAnimation() {
    return true;
  }

  @HostBinding('style.display') get display() {
    return 'block';
  }

  @HostBinding('style.position') get position() {
    return 'absolute';
  }

  @Input() hero: Hero;
  @Output() close = new EventEmitter();
  error: any;
  navigated = false; // true if navigated here

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      if (params['id'] !== undefined) {
        let id = +params['id'];
        this.navigated = true;
        this.heroService.getHero(id)
            .then(hero => this.hero = hero);
      } else {
        this.navigated = false;
        this.hero = new Hero(44, '', 0, '');
      }
    });
  }

  save(): void {
    this.heroService
        .save(this.hero)
        .then(hero => {
          this.hero = hero; // saved hero, w/ id if new
          this.goBack(hero);
        })
        .catch(error => this.error = error); // TODO: Display error message
  }

  goBack(savedHero: Hero = null): void {
    this.close.emit(savedHero);

    let heroId = savedHero ? savedHero.id : (this.hero ? this.hero.id : null);

    this.router.navigate(['/heroes', { id: heroId }]);

    //if (this.navigated) { window.history.back(); }
  }
}
