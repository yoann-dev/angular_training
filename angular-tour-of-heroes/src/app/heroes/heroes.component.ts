import { Component, OnInit } from '@angular/core';

export class Hero {
  id: number;
  name: string;
}

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})

export class HeroesComponent implements OnInit {

  heroes: Hero[] = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
  ];

  selectedHero: Hero;

  onSelect(hero: Hero): void {
    console.log("HeroesComponent:onSelect " + hero.name);
    this.selectedHero = hero;
  }

  constructor() { }

  ngOnInit() {
  }

}
