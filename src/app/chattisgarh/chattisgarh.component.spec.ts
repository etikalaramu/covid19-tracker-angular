import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChattisgarhComponent } from './chattisgarh.component';

describe('ChattisgarhComponent', () => {
  let component: ChattisgarhComponent;
  let fixture: ComponentFixture<ChattisgarhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChattisgarhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChattisgarhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
