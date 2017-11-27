import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { OnDestroy, OnInit } from '@angular/core';
import { MessageService } from './message.service'

@Injectable()
export class HeroService implements OnDestroy, OnInit {

  current_heroes: Hero[] = HEROES;

  constructor(private messageService: MessageService) { }

  ngOnDestroy() {
    console.log('HeroService destroy');
  }

  ngOnInit(){
    console.log('HeroService creation');
  } 

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes')
    return of(this.current_heroes);
  }
}
