import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesModelComponent } from './pipes-model.component';

describe('PipesServiceModelComponent', () => {
  let component: PipesModelComponent;
  let fixture: ComponentFixture<PipesModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipesModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PipesModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
