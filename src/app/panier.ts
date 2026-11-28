import { Injectable, signal, computed } from '@angular/core';

export interface Produit {
  id: number;
  name: string;
  price: number;
}

@Injectable({ providedIn: 'root' })
export class Panier {
  private state = signal<Produit[]>([]);
  readonly produits = this.state.asReadonly();

  // les 2 computed properties
  readonly count = computed(() => this.state().length);
  readonly total = computed(() =>
    this.state().reduce((somme, p) => somme + p.price, 0)
  );

  ajouter(produit: Produit) {
    this.state.update(items => [...items, produit]);
  }

  vider() {
    this.state.set([]);
  }
}