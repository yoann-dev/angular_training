import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  /**
   * Bool for displaying alert or not
   */
  public display_alert: Boolean = true;

  /**
   * Current date time
   */
  public currentDate: number = Date.now();

  /**
   * Class constructor
   */
  constructor() {}

}
