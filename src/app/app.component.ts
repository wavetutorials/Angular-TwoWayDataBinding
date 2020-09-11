import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  // templateUrl: './app.component.html',
  template: `
  <div class="toolbar"><img width="40" alt="Angular Logo" src="assets/angular.svg" />
    <span>Angular Tutorials</span><div class="spacer"></div><h3>Wave Tutorials</h3>
  </div><div class="header">{{title}}</div><hr/>

  <div class="content">

  Name:  <input [(ngModel)]="textName" />
  <br/>
  You Entered Text as: <b>{{textName}}</b>

  </div>`
})
export class AppComponent {
  title = 'Two-Way Data Binding';
  textName = 'Angular';

  constructor() {
  }
}
