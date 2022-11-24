import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-speaker-popup',
  templateUrl: './speaker-popup.component.html',
  styleUrls: ['./speaker-popup.component.scss'],
})
export class SpeakerPopupComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public speakerInfo: any,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {}

  closeDialog (){
    this.dialog.closeAll()
  }
}
