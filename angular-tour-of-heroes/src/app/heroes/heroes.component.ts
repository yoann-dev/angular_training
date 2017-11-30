import { Component, OnInit, OnDestroy } from '@angular/core';
import { Hero } from './hero'
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

  private getHeroes(): void {
    this.subscription.add(this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes));
  }

  public add(name: string) : void {
    name = name.trim();
    if (!name) { 
      return; 
    }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  public delete(hero: Hero): void {
      this.heroService.deleteHero(hero).subscribe(_ => {
        this.heroes = this.heroes.filter(h => h !== hero);
      });
  }

  ngOnInit() {
    this.getHeroes();
  }

  ngOnDestroy() {
    console.log("HeroesComponent::ngOnDestroy");
    this.subscription.unsubscribe();
  }
}
