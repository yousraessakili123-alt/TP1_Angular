import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  title = signal('TaskFlow');
  canDelete = signal(true);
  showTitle = signal(true);

  rename() {
    this.title.set('Mes tâches');
  }

  delete() {
    this.showTitle.set(false);
    this.canDelete.set(false);
  }
}



/*import { Component } from '@angular/core';

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
} */