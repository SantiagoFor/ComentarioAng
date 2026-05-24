import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEditorComentario } from './agregar-editor-comentario';

describe('AgregarEditorComentario', () => {
  let component: AgregarEditorComentario;
  let fixture: ComponentFixture<AgregarEditorComentario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregarEditorComentario],
    }).compileComponents();

    fixture = TestBed.createComponent(AgregarEditorComentario);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
