import { Component, computed, input, signal } from '@angular/core';
import { TimeLineHandler, TimeLineItem } from './vertical-timeline.interface';
import { BaseElement } from './widgets/base-element/base-element';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'lib-vertical-timeline',
  imports: [BaseElement, DatePipe],
  templateUrl: './vertical-timeline.html',
  styleUrl: './vertical-timeline.css',
})
export class VerticalTimeline {
  customComponent = input<Component>();
  items = input<TimeLineItem[]>([]);
  timelineWidth = input<number>(100);
  height = input<string>('600px');
  scrollIntoViewOptions = input<ScrollIntoViewOptions>({ behavior: 'smooth', block: 'center' });

  imageLoading = true;
  imageError = signal<boolean>(false);

  imageUrl = '';
  placeholder = './assets/media/discovery/lightG-square.png';

  onImageLoaded() {
    this.imageLoading = false;
  }
  handleEmptyImage() {
    this.imageLoading = false;
    this.imageUrl = this.placeholder;
    this.imageError.set(true);
  }

  elementsByYear = computed(() => {
    return this.separateByYearData(this.items());
  });

  years = computed(() => {
    return Object.keys(this.elementsByYear()).sort().reverse();
  });

  scrollTo(elementId: string): void {
    const element = document.getElementById(elementId);
    element?.scrollIntoView(this.scrollIntoViewOptions());
  }

  separateByYearData(data: TimeLineItem[]): TimeLineHandler {
    const separatedByYear = data.reduce((acc, item) => {
      const year = item.date?.getFullYear();
      if (!year) return acc;
      if (!acc[year]) {
        acc[year] = [];
      }
      acc[year].push(item);
      return acc;
    }, {} as TimeLineHandler);
    return separatedByYear;
  }
}
