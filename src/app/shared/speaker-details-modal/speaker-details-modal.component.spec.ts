import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakerDetailsModalComponent } from './speaker-details-modal.component';

describe('SpeakerDetailsModalComponent', () => {
  let component: SpeakerDetailsModalComponent;
  let fixture: ComponentFixture<SpeakerDetailsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpeakerDetailsModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpeakerDetailsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
