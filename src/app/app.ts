import { Component } from '@angular/core';
import { Header } from './header/header';
import { Aside } from './aside/aside';
import { Footer } from './footer/footer';
import { Catalogue } from './catalogue/catalogue';

@Component({
  selector: 'app-root',
  imports: [Header, Aside, Footer, Catalogue],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}