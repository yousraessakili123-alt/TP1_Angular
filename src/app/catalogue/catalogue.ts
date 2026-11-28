import { Component, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { ProductCard } from '../product-card/product-card';
import { Panier } from '../panier';

@Component({
  selector: 'app-catalogue',
  imports: [ProductCard, CurrencyPipe],
  templateUrl: './catalogue.html',
  styleUrl: './catalogue.css',
})
export class Catalogue {
  panier = inject(Panier);     // instance de panier (singleton) : all components ont la meme instance panier  

  produits = [
    { id: 1, name: 'Clavier', price: 49.9 },
    { id: 2, name: 'Souris', price: 19.9 },
    { id: 3, name: 'Écran', price: 149 },
  ];
}    
                   