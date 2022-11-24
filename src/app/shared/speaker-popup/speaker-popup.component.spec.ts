import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakerPopupComponent } from './speaker-popup.component';

describe('SpeakerPopupComponent', () => {
  let component: SpeakerPopupComponent;
  let fixture: ComponentFixture<SpeakerPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpeakerPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpeakerPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
