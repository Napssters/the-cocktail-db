import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocktailsAllComponent } from './cocktails-all.component';

describe('CocktailsAllComponent', () => {
  let component: CocktailsAllComponent;
  let fixture: ComponentFixture<CocktailsAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CocktailsAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CocktailsAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
