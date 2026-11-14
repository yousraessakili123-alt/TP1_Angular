import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Header } from './header/header';
import { TaskList } from './task-list/task-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, Header, TaskList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}