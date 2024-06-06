import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsTestimonyComponent } from './clients-testimony.component';

describe('ClientsTestimonyComponent', () => {
  let component: ClientsTestimonyComponent;
  let fixture: ComponentFixture<ClientsTestimonyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientsTestimonyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClientsTestimonyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
