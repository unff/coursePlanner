import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseBoxComponent } from './course-box.component';

describe('CourseBoxComponent', () => {
  let component: CourseBoxComponent;
  let fixture: ComponentFixture<CourseBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
