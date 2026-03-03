import { Component, effect, input, signal } from '@angular/core';
import { TimeLineItem } from '../../vertical-timeline.interface';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'lib-base-element',
  imports: [DatePipe],
  templateUrl: './base-element.html',
  styleUrl: './base-element.css',
})
export class BaseElement {
  item = input<TimeLineItem>();
  errorMessage = input<string>('No image found');
  imageLoading = true;
  imageError = signal<boolean>(false);

  imageUrl = '';
  placeholder = '';

  constructor() {
    effect(() => {
      console.log(this.item());
      this.imageUrl = this.item()?.imageSrc ?? '';
    });
  }

  onImageLoaded() {
    this.imageLoading = false;
  }

  handleEmptyImage() {
    this.imageLoading = false;
    this.imageUrl = this.placeholder;
    this.imageError.set(true);
  }
}
