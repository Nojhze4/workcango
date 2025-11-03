import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shopping',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shopping.html',
  styleUrls: ['./shopping.css']
})
export class ShoppingComponent {
  // Cart totals
  shipping: number = 0;
  discount: number = 0;
  total: number = 60;
  originalPrice: number = 60;

  // Cart items
  cartItems = [
    {
      name: 'Gafas de sol para hombre',
      price: 15,
      quantity: 1,
      rating: 4.7,
      image: 'assets/images/sunglasses.jpg'
    },

    {
      name: 'Zapatillas para hombre',
      price: 15,
      quantity: 1,
      rating: 4.7,
      image: 'assets/images/sunglasses.jpg'
    },
    {
      name: 'Reloj de pulsera para hombre',
      price: 15,
      quantity: 1,
      rating: 4.7,
      image: 'assets/images/sunglasses.jpg'
    },
    {
      name: 'Iphone XS Max',
      price: 15,
      quantity: 1,
      rating: 4.7,
      image: 'assets/images/sunglasses.jpg'
    },

  ];

  // metodo para actualizar el total
  updateTotal() {
    this.total = this.originalPrice + this.shipping - this.discount;
  }

  applyDiscount(code: string) {
    //Agrega aquí la lógica de descuento.
  }

  updateQuantity(index: number, change: number) {
    if (this.cartItems[index]) {
      this.cartItems[index].quantity = Math.max(1, this.cartItems[index].quantity + change);
      this.calculateOriginalPrice();
      this.updateTotal();
    }
  }

  private calculateOriginalPrice() {
    this.originalPrice = this.cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }
}
