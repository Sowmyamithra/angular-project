import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesServiceComponent } from './pipes-service.component';

describe('PipesServiceComponent', () => {
  let component: PipesServiceComponent;
  let fixture: ComponentFixture<PipesServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipesServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PipesServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
