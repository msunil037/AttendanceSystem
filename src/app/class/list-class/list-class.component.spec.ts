import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListClassComponent } from './list-class.component';

describe('ListClassComponent', () => {
  let component: ListClassComponent;
  let fixture: ComponentFixture<ListClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListClassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
