import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCreatedModalComponent } from './user-created-modal.component';

describe('UserCreatedModalComponent', () => {
  let component: UserCreatedModalComponent;
  let fixture: ComponentFixture<UserCreatedModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCreatedModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCreatedModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
