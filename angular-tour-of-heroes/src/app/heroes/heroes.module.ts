import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from '../material.module';
import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';

import { HeroService } from './hero.service'

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    TranslateModule,
    FlexLayoutModule,
    MaterialModule,
    HeroesRoutingModule
  ],
  declarations: [
    HeroesComponent,
    HeroDetailComponent
  ],
  providers: [ HeroService ],
})
export class HeroesModule { }
