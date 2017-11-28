import { Component, OnInit, OnDestroy } from '@angular/core';
import { Hero }  from './hero'
import { HeroService } from './hero.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})

export class HeroesComponent implements OnInit, OnDestroy {

  heroes: Hero[];
  private subscription: Subscription = new Subscription();
  
  constructor(private heroService: HeroService) { }
 
  getHeroes(): void {
    this.subscription.add(this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes));
  }

  ngOnInit() {
    this.getHeroes();
  }

  ngOnDestroy(){
    console.log("HeroesComponent:ngOnDestroy");
    this.subscription.unsubscribe();
  } 
}
