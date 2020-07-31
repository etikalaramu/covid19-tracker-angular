import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WestBengalComponent } from './west-bengal.component';

describe('WestBengalComponent', () => {
  let component: WestBengalComponent;
  let fixture: ComponentFixture<WestBengalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WestBengalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WestBengalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
