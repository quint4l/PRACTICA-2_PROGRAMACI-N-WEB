import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaUnoTarjetasComponent } from './pagina-uno-tarjetas.component';

describe('PaginaUnoTarjetasComponent', () => {
  let component: PaginaUnoTarjetasComponent;
  let fixture: ComponentFixture<PaginaUnoTarjetasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaUnoTarjetasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaUnoTarjetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
