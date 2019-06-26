import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpgetdataComponent } from './httpgetdata.component';

describe('HttpgetdataComponent', () => {
  let component: HttpgetdataComponent;
  let fixture: ComponentFixture<HttpgetdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpgetdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpgetdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
