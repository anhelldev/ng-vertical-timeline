import { Component, signal } from '@angular/core';
import { VerticalTimeline } from 'vertical-timeline';
import { TimeLineItem } from 'vertical-timeline';

@Component({
  selector: 'app-root',
  imports: [VerticalTimeline],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('sandbox');

  mockItems: TimeLineItem[] = [
    {
      id: 'testId',
      title: 'First Event',
      description: 'This is the description for the first event.',
      icon: 'icon-star',
      color: 'blue',
      date: new Date('2024-01-15T10:00:00Z'),
      imageSrc: 'https://picsum.photos/id/237/500',
      thumbnailSrc: 'https://picsum.photos/id/237/50',
      customFooterMessage: 'Release of v1.0',
      url: 'https://example.com/v1',
    },
    {
      id: 'testId2',
      title: 'Second Event',
      description: 'The second major update in our journey.',
      icon: 'icon-heart',
      color: 'red',
      date: new Date('2024-06-20T14:30:00Z'),
      imageSrc: 'https://picsum.photos/id/238/500',
      customFooterMessage: 'Summer update launched',
      thumbnailSrc: 'https://picsum.photos/id/238/50',
    },
    {
      id: 'testId3',
      title: 'Beta Release',
      description: 'We started beta testing with customers.',
      icon: 'icon-check',
      color: 'green',
      date: new Date('2023-11-05T09:15:00Z'),
      imageSrc: 'https://picsum.photos/id/240/500',
      customFooterMessage: 'Initial beta preview',
      thumbnailSrc: 'https://picsum.photos/id/240/50',
    },
    {
      id: 'testId4',
      title: 'Latest News',
      description: 'Stay tuned for more updates...',
      icon: 'icon-info',
      color: 'gray',
      date: new Date('2025-02-18T16:45:00Z'),
      imageSrc: 'https://picsum.photos/id/239/500',
      customFooterMessage: 'Recent announcement',
      thumbnailSrc: 'https://picsum.photos/id/239/50',
    },
    {
      id: 'testId5',
      title: 'Latest News',
      description: 'Stay tuned for more updates...',
      icon: 'icon-info',
      color: 'gray',
      date: new Date('2026-01-18T16:45:00Z'),
      imageSrc: 'https://picsum.photos/id/250/500',
      customFooterMessage: 'Recent announcement',
      thumbnailSrc: 'https://picsum.photos/id/250/50',
    },
    {
      id: 'testId6',
      title: 'Latest News',
      description: 'Stay tuned for more updates...',
      icon: 'icon-info',
      color: 'gray',
      date: new Date('2025-02-28T16:45:00Z'),
      imageSrc: 'https://picsum.photos/id/252/500',
      customFooterMessage: 'Recent announcement',
      thumbnailSrc: 'https://picsum.photos/id/252/50',
    },
  ].sort((a, b) => b.date.getTime() - a.date.getTime());
}
