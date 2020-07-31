import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiharComponent } from './bihar.component';

describe('BiharComponent', () => {
  let component: BiharComponent;
  let fixture: ComponentFixture<BiharComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiharComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiharComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
