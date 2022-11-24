import {
  AfterViewInit,
  Component,
  ContentChild,
  ElementRef,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
})
export class VideoComponent implements OnInit, AfterViewInit {
  @ContentChild('video', { static: true }) videoElement: ElementRef | undefined;
  state = 'pause';

  currentState!: boolean;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    console.log(this.videoElement);
  }

  playPause() {
    this.currentState = this.videoElement?.nativeElement.paused;

    if (this.currentState) this.videoElement?.nativeElement.play();
    else this.videoElement?.nativeElement.pause();
  }
}
