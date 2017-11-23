import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from '../material.module';
import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroesComponent } from './heroes.component';

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
    HeroesComponent
  ]
})
export class HeroesModule { }
