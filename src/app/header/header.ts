import { Component, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Panier } from '../panier';

@Component({
  selector: 'app-header',
  imports: [CurrencyPipe],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  panier = inject(Panier);
}