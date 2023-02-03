import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofitemsComponent } from './listofitems.component';

describe('ListofitemsComponent', () => {
  let component: ListofitemsComponent;
  let fixture: ComponentFixture<ListofitemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListofitemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListofitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
