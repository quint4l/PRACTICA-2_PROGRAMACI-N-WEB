import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PaginaUnoComponent } from './components/pagina-uno/pagina-uno.component';
import { PaginaUnoTarjetasComponent } from './components/pagina-uno-tarjetas/pagina-uno-tarjetas.component';
import { PaginaDosComponent } from './components/pagina-dos/pagina-dos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    PaginaUnoComponent,
    PaginaUnoTarjetasComponent,
    PaginaDosComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Practica2';
}
