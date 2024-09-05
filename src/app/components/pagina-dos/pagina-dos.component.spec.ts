import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaDosComponent } from './pagina-dos.component';

describe('PaginaDosComponent', () => {
  let component: PaginaDosComponent;
  let fixture: ComponentFixture<PaginaDosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaDosComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PaginaDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
