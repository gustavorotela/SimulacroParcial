import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculaModificarComponent } from './pelicula-modificar.component';

describe('PeliculaModificarComponent', () => {
  let component: PeliculaModificarComponent;
  let fixture: ComponentFixture<PeliculaModificarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeliculaModificarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeliculaModificarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
