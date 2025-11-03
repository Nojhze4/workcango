import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  rating: number;
}

@Injectable({ providedIn: 'root' })
export class CartService {
  private items = new BehaviorSubject<CartItem[]>([]);
  items$ = this.items.asObservable();

  add(item: CartItem) {
    const current = this.items.getValue();
    this.items.next([...current, item]);
  }

  updateQuantity(id: number, qty: number) {
    const updated = this.items.getValue().map(item =>
      item.id === id ? { ...item, quantity: qty } : item
    );
    this.items.next(updated);
  }

  remove(id: number) {
    this.items.next(this.items.getValue().filter(i => i.id !== id));
  }

  total() {
    return this.items.getValue().reduce(
      (sum, item) => sum + item.price * item.quantity, 0
    );
  }
}