import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { merge } from 'rxjs/observable/merge';
import { filter, map, mergeMap } from 'rxjs/operators';

import { environment } from '../environments/environment';
import { Logger } from './core/logger.service';

const log = new Logger('App');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private titleService: Title) { }

  ngOnInit() {
    // Setup logger
    if (environment.production) {
      Logger.enableProductionMode();
    }

    log.debug('init');
  }
}
