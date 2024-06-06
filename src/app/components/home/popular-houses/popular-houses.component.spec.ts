import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularHousesComponent } from './popular-houses.component';

describe('PopularHousesComponent', () => {
  let component: PopularHousesComponent;
  let fixture: ComponentFixture<PopularHousesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopularHousesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PopularHousesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
