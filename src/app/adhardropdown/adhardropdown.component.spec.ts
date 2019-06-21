import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdhardropdownComponent } from './adhardropdown.component';

describe('AdhardropdownComponent', () => {
  let component: AdhardropdownComponent;
  let fixture: ComponentFixture<AdhardropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdhardropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdhardropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
