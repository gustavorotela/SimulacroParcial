import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculaEliminarComponent } from './pelicula-eliminar.component';

describe('PeliculaEliminarComponent', () => {
  let component: PeliculaEliminarComponent;
  let fixture: ComponentFixture<PeliculaEliminarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeliculaEliminarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeliculaEliminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
