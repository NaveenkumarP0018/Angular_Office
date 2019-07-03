import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MattableshowComponent } from './mattableshow.component';

describe('MattableshowComponent', () => {
  let component: MattableshowComponent;
  let fixture: ComponentFixture<MattableshowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MattableshowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MattableshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
