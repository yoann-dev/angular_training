import { Component, OnInit, Input } from '@angular/core';
import { Hero } from './hero'
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService }  from './hero.service';

import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;

  constructor(private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location,
    private snackBar: MatSnackBar
    ) { }

  ngOnInit() {
    this.getHero();
  }

  private getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  public goBack(): void {
    this.location.back();
  }

  private snackBarAndgoBack(): void {
    this.snackBar.open("Heroes saved", "DONE", { duration:3000 });
    this.goBack();
  }

  save(): void {
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.snackBarAndgoBack());
  }
}
