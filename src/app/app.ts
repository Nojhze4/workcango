import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShoppingComponent } from './components/shopping/shopping';
import { NavBarComponent } from './components/nav-bar/nav-bar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ShoppingComponent, NavBarComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('checkoout-1');
}
