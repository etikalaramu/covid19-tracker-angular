import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GujarathComponent } from './gujarath.component';

describe('GujarathComponent', () => {
  let component: GujarathComponent;
  let fixture: ComponentFixture<GujarathComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GujarathComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GujarathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
