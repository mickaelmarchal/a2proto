import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Hero } from '../hero';
import { HeroService } from '../../core/hero.service';

@Component({
  moduleId: module.id,
  selector: 'my-heroes',
  templateUrl: 'hero-list.component.html',
  styleUrls: ['hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;
  selectedId: number;
  addingHero = false;
  error: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private heroService: HeroService) { }

  getHeroes(): void {
    this.heroService
      .getHeroes()
      .then(heroes => this.heroes = heroes)
      .catch(error => this.error = error);
  }

  addHero(): void {
    this.addingHero = true;
    this.selectedHero = null;
  }

  close(savedHero: Hero): void {
    this.addingHero = false;
    if (savedHero) { this.getHeroes(); }
  }

  deleteHero(hero: Hero, event: any): void {
    event.stopPropagation();
    this.heroService
      .delete(hero)
      .then(res => {
        this.heroes = this.heroes.filter(h => h !== hero);
        if (this.selectedHero === hero) { this.selectedHero = null; }
      })
      .catch(error => this.error = error);
  }

  ngOnInit(): void {
    //the forEach allows listening to all changes in the params (which is an observable)
    this.route.params.forEach((params: Params) => {
      this.selectedId = +params['id'];
      this.getHeroes();
    });
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.selectedId = hero.id;
    this.addingHero = false;
  }

  isSelected(hero: Hero) {
    return hero.id === this.selectedId;
  }

  gotoDetail(): void {
    this.router.navigate(['./detail', this.selectedHero.id], { relativeTo: this.route });
  }
}
