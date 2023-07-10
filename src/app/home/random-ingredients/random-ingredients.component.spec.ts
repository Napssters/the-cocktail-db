import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomIngredientsComponent } from './random-ingredients.component';

describe('RandomIngredientsComponent', () => {
  let component: RandomIngredientsComponent;
  let fixture: ComponentFixture<RandomIngredientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomIngredientsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomIngredientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
