import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Admin } from './components/admin/admin';
import { User } from './components/user/user';
import { DataBinding } from './components/data-binding/data-binding';
import { Signal } from "./components/signal/signal";
import { ControlFlow } from "./components/control-flow/control-flow";
import { Attribute } from "./components/attribute/attribute";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink,RouterLinkActive, Admin, User, DataBinding, Signal, ControlFlow, Attribute],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Angular_20');
}
