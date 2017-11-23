import { Component, OnInit, OnDestroy } from '@angular/core';
import { Hero }  from './hero'
import { HeroService } from './hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})

export class HeroesComponent implements OnInit, OnDestroy {

  heroes: Hero[];

  selectedHero: Hero;

  onSelect(hero: Hero): void {
    console.log("HeroesComponent:onSelect " + hero.name);
    this.selectedHero = hero;
  }

  constructor(private heroService: HeroService) { }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }

  ngOnInit() {
    this.getHeroes();
  }

  ngOnDestroy(){
    console.log("HeroesComponent:ngOnDestroy");
  } 

}
