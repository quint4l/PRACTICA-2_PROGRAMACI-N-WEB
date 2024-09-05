import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaDosTarjetasComponent } from './pagina-dos-tarjetas.component';

describe('PaginaDosTarjetasComponent', () => {
  let component: PaginaDosTarjetasComponent;
  let fixture: ComponentFixture<PaginaDosTarjetasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaDosTarjetasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaDosTarjetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
