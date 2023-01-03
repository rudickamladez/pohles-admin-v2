import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  constructor(@Inject(DOCUMENT) private document: Document) {}
  
  public toggleTheme() {
    this.document.body.classList.toggle('light');
    this.document.body.classList.toggle('alt-font');
  }
}
