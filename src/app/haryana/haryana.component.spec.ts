import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HaryanaComponent } from './haryana.component';

describe('HaryanaComponent', () => {
  let component: HaryanaComponent;
  let fixture: ComponentFixture<HaryanaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HaryanaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HaryanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
