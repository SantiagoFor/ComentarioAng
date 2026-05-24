import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListComentarios } from './components/list-comentarios/list-comentarios';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListComentarios],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('FEComentarios');
}
