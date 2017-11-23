import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { OnDestroy, OnInit } from '@angular/core';

@Injectable()
export class HeroService implements OnDestroy, OnInit {

  current_heroes: Hero[] = HEROES;

  constructor() { }

  ngOnDestroy() {
    console.log('HeroService destroy');
  }

  ngOnInit(){
    console.log('HeroService creation');
  } 

  getHeroes(): Observable<Hero[]> {
    return of(this.current_heroes);
  }

  addHero(hero: Hero ) : void {
    this.current_heroes.push(hero)
  } 

}
