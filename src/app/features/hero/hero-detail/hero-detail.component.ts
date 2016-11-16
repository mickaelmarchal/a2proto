import { Component, OnInit, HostBinding,
    EventEmitter, Input, Output,
    trigger, transition, animate,
    style, state } from '@angular/core';

import {ActivatedRoute, Params, Router} from '@angular/router';

import { Hero } from '../hero';
import { HeroService } from '../../../core/hero.service';
import { DialogService } from "../../../core/dialog.service";

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
  heroOriginalName: string;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private router: Router,
    private dialogService: DialogService) {
  }

  ngOnInit(): void {
    this.route.data.forEach((data: { hero: Hero }) => {
      this.heroOriginalName = data.hero.name;
      this.hero = data.hero;
    });
  }
/*  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      if (params['id'] !== undefined) {
        let id = +params['id'];
        this.navigated = true;
        this.heroService.getHero(id)
            .then(hero => {
              this.hero = hero;
              this.heroOriginalName = this.hero.name;
              console.log(this.heroOriginalName, 'orgin name init');
            });
      } else {
        this.navigated = false;
        this.hero = new Hero(44, '', 0, '');
      }
    });
  }*/

  save(): void {
    this.heroService
        .save(this.hero)
        .then(hero => {
          this.hero = hero; // saved hero, w/ id if new
          this.heroOriginalName = hero.name;
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

  canDeactivate(): Promise<boolean> | boolean {
    // Allow synchronous navigation (`true`) if no hero or the hero is unchanged
    //console.log(this.heroOriginalName, 'orgin name deactivate');

    if (!this.hero || this.hero.name === this.heroOriginalName) {
      return true;
    }
    // Otherwise ask the user with the dialog service and return its
    // promise which resolves to true or false when the user decides
    return this.dialogService.confirm('Discard changes?');
  }
}
