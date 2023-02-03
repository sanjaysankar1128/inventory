import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewitemsformComponent } from './newitemsform.component';

describe('NewitemsformComponent', () => {
  let component: NewitemsformComponent;
  let fixture: ComponentFixture<NewitemsformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewitemsformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewitemsformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
