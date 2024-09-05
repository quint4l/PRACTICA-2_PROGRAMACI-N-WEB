import { Component } from '@angular/core';
import { PaginaDosTarjetasComponent } from '../pagina-dos-tarjetas/pagina-dos-tarjetas.component';

@Component({
  selector: 'app-pagina-dos',
  templateUrl: './pagina-dos.component.html',
  styleUrls: ['./pagina-dos.component.css'],
  standalone: true,
  imports: [PaginaDosTarjetasComponent],
})
export class PaginaDosComponent {}
