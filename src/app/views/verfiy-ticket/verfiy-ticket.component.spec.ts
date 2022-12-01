import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerfiyTicketComponent } from './verfiy-ticket.component';

describe('VerfiyTicketComponent', () => {
  let component: VerfiyTicketComponent;
  let fixture: ComponentFixture<VerfiyTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerfiyTicketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerfiyTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
