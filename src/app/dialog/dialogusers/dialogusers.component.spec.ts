import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogusersComponent } from './dialogusers.component';

describe('DialogusersComponent', () => {
  let component: DialogusersComponent;
  let fixture: ComponentFixture<DialogusersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogusersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
