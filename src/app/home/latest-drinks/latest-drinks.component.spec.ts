import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestDrinksComponent } from './latest-drinks.component';

describe('LatestDrinksComponent', () => {
  let component: LatestDrinksComponent;
  let fixture: ComponentFixture<LatestDrinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatestDrinksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LatestDrinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
