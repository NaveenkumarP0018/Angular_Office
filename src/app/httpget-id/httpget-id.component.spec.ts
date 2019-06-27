import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpgetIdComponent } from './httpget-id.component';

describe('HttpgetIdComponent', () => {
  let component: HttpgetIdComponent;
  let fixture: ComponentFixture<HttpgetIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpgetIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpgetIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
