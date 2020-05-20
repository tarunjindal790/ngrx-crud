import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDeletedModalComponent } from './user-deleted-modal.component';

describe('UserDeletedModalComponent', () => {
  let component: UserDeletedModalComponent;
  let fixture: ComponentFixture<UserDeletedModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDeletedModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDeletedModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
