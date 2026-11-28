import { Component, inject, input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Panier, Produit } from '../panier';

@Component({
  selector: 'app-product-card',
  imports: [CurrencyPipe],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  panier = inject(Panier);
  product = input.required<Produit>();

  ajouter() {
    this.panier.ajouter(this.product());
  }
}