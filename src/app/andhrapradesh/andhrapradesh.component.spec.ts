import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AndhrapradeshComponent } from './andhrapradesh.component';

describe('AndhrapradeshComponent', () => {
  let component: AndhrapradeshComponent;
  let fixture: ComponentFixture<AndhrapradeshComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AndhrapradeshComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AndhrapradeshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
