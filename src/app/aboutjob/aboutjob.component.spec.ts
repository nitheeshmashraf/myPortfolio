import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutjobComponent } from './aboutjob.component';

describe('AboutjobComponent', () => {
  let component: AboutjobComponent;
  let fixture: ComponentFixture<AboutjobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutjobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutjobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
