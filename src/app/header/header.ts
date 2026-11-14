import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  title = 'TaskFlow';
  canDelete = true;
  showTitle = true;

  rename() {
    this.title = 'Mes tâches';
  }

  delete() {
    this.showTitle = false;
    this.canDelete = false;
  }
}