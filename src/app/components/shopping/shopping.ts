import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-shopping',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './shopping.html',
  styleUrls: ['./shopping.css'],
})
export class ShoppingComponent {
  // Totales
  shipping: number = 0;
  discount: number = 0;
  total: number = 60;
  originalPrice: number = 60;

  // Código promocional
  promoCode: string = '';

  // Items del carrito
  cartItems = [
    {
      name: 'Gafas de sol para hombre',
      price: 15,
      quantity: 1,
      rating: 4.7,
      image: '/assets/gafas.png',
    },
    {
      name: 'Zapatillas para hombre',
      price: 15,
      quantity: 1,
      rating: 4.7,
      image: '/assets/zapatillas.png',
    },
    {
      name: 'Reloj de pulsera para hombre',
      price: 15,
      quantity: 1,
      rating: 4.7,
      image: '/assets/reloj.png',
    },
    {
      name: 'iPhone XS Max',
      price: 15,
      quantity: 1,
      rating: 4.7,
      image: '/assets/iphone.png',
    },
  ];

  /** Calcula el total general */
  private calculateOriginalPrice() {
    this.originalPrice = this.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  /** Actualiza el total */
  updateTotal() {
    this.total = this.originalPrice + this.shipping - this.discount;
  }

  /** Cambia la cantidad de un producto */
  updateQuantity(index: number, change: number) {
    if (this.cartItems[index]) {
      this.cartItems[index].quantity = Math.max(1, this.cartItems[index].quantity + change);
      this.calculateOriginalPrice();
      this.updateTotal();
    }
  }

  /** Elimina un producto */
  removeItem(index: number) {
    this.cartItems.splice(index, 1);
    this.calculateOriginalPrice();
    this.updateTotal();
  }

  /** Aplica un código de descuento */
  applyDiscount(code: string) {
    const normalized = code.trim().toLowerCase();

    if (normalized === 'workango10') {
      this.discount = this.originalPrice * 0.1;
    } else if (normalized === 'enviofree') {
      this.shipping = 0;
    } else {
      this.discount = 0;
      alert('Código no válido');
    }

    this.updateTotal();
  }

  /** Total de artículos */
  getTotalItems(): number {
    return this.cartItems.reduce((sum, item) => sum + item.quantity, 0);
  }
}
