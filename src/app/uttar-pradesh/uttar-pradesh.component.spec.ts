import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UttarPradeshComponent } from './uttar-pradesh.component';

describe('UttarPradeshComponent', () => {
  let component: UttarPradeshComponent;
  let fixture: ComponentFixture<UttarPradeshComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UttarPradeshComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UttarPradeshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
