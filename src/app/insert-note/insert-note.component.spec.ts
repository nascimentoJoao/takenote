import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertNoteComponent } from './insert-note.component';

describe('InsertNoteComponent', () => {
  let component: InsertNoteComponent;
  let fixture: ComponentFixture<InsertNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertNoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
