import { Injectable }             from '@angular/core';
import { Router, Resolve,
    ActivatedRouteSnapshot } from '@angular/router';
import { Hero } from '../hero';
import {HeroService} from "../../../core/hero.service";

@Injectable()
export class HeroDetailResolve implements Resolve<Hero> {

    constructor(private hs: HeroService, private router: Router) {}

    resolve(route: ActivatedRouteSnapshot): Promise<Hero> | boolean {
        console.log('go resolve hero');

//        if (route.params['id'] !== undefined) {
            console.log('load existing hero '+route.params['id']);
            let id = +route.params['id'];
            return this.hs.getHero(id).then(hero => {
                if (hero) {
                    return hero;
                } else { // id not found
                    this.router.navigate(['/heroes']);
                    return false;
                }
            });
 //       } else {
 //           console.log('new hero');
 //           return new Promise(function(resolve, reject) { resolve(new Hero(44, '', 0, '')); }).then(hero => { return hero});
 //       }
    }
}