import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpmatcardComponent } from './httpmatcard.component';

describe('HttpmatcardComponent', () => {
  let component: HttpmatcardComponent;
  let fixture: ComponentFixture<HttpmatcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpmatcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpmatcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
