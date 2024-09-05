import { Component } from '@angular/core';
import { PaginaUnoTarjetasComponent } from "../pagina-uno-tarjetas/pagina-uno-tarjetas.component";

@Component({
  selector: 'app-pagina-uno',
  standalone: true,
  imports: [PaginaUnoTarjetasComponent],
  templateUrl: './pagina-uno.component.html',
  styleUrl: './pagina-uno.component.css'
})
export class PaginaUnoComponent {

}
