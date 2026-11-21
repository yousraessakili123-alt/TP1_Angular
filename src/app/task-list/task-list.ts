import { Component, signal, computed } from '@angular/core';
import { DatePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-task-list',
  imports: [DatePipe, UpperCasePipe],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList {
  tasks = signal([
    { id: 0, title: 'Lire le cours Angular', dueDate: '2026-11-13' },
    { id: 1, title: 'Installer la CLI', dueDate: '2026-11-14' },
    { id: 2, title: 'Créer TaskFlow', dueDate: '2026-11-15' },
  ]);

  count = computed(() => this.tasks().length);

  addTask() {
    this.tasks.update(list => [
      ...list,
      { id: Date.now(), title: 'Nouvelle tâche', dueDate: '2026-11-20' },
    ]);
  }

  clearTasks() {
    this.tasks.set([]);
  }
}


/*import { Component } from '@angular/core';
import { DatePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-task-list',
  imports: [DatePipe, UpperCasePipe],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList {
  tasks = [
    { id: 0, title: 'Lire le cours Angular', dueDate: '2026-11-13' },
    { id: 1, title: 'Installer la CLI', dueDate: '2026-11-14' },
    { id: 2, title: 'Créer TaskFlow', dueDate: '2026-11-15' },
  ];

  clearTasks() {
    this.tasks = [];
  }
}    */