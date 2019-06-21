import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectiontableComponent } from './selectiontable.component';

describe('SelectiontableComponent', () => {
  let component: SelectiontableComponent;
  let fixture: ComponentFixture<SelectiontableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectiontableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectiontableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
