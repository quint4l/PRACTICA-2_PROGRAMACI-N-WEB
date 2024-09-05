import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PaginaUnoComponent } from "./components/pagina-uno/pagina-uno.component";
import { PaginaUnoTarjetasComponent } from "./components/pagina-uno-tarjetas/pagina-uno-tarjetas.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PaginaUnoComponent, PaginaUnoTarjetasComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})

export class AppComponent {
  title = 'Practica2';
}
