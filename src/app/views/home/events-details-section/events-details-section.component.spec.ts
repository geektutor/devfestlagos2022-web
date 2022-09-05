import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsDetailsSectionComponent } from './events-details-section.component';

describe('EventsDetailsSectionComponent', () => {
  let component: EventsDetailsSectionComponent;
  let fixture: ComponentFixture<EventsDetailsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventsDetailsSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventsDetailsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
