# Vertical Timeline

A customizable and responsive vertical timeline component for Angular. It groups timeline items by year, allowing you to showcase events, news, or history in a visually beautiful and chronological format.

## Installation

Install the library using npm:

```bash
npm install vertical-timeline
```

## Features

- **Group by Year:** Automatically groups and sorts timeline items based on their date (descending order).
- **Custom Content:** Supports images, icons, dates, titles, descriptions, and custom footer messages for each node.
- **Custom Components:** You can pass a custom Angular component to be rendered inside the timeline entries using the `customComponent` input.
- **Scroll to item:** Easily programmatically scroll to a specific item ID.
- **Fallback Images:** Handles image load failures gracefully with a customizable fallback placeholder.

## Usage

### 1. Import the Component

The `VerticalTimeline` component is standalone. You can directly import it in your module or standalone component.

```typescript
import { Component } from '@angular/core';
import { VerticalTimeline, TimeLineItem } from 'vertical-timeline';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [VerticalTimeline],
  template: ` <lib-vertical-timeline [items]="mockItems"></lib-vertical-timeline> `,
})
export class App {
  mockItems: TimeLineItem[] = [
    {
      id: 'event1',
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
      id: 'event2',
      title: 'Beta Release',
      description: 'We started beta testing with customers.',
      icon: 'icon-check',
      color: 'green',
      date: new Date('2023-11-05T09:15:00Z'),
      imageSrc: 'https://picsum.photos/id/240/500',
      customFooterMessage: 'Initial beta preview',
      thumbnailSrc: 'https://picsum.photos/id/240/50',
    },
  ];
}
```

### 2. Available Inputs

| Input             | Type             | Description                                                                      |
| ----------------- | ---------------- | -------------------------------------------------------------------------------- |
| `items`           | `TimeLineItem[]` | An array of objects representing each timeline event.                            |
| `customComponent` | `Component`      | Provide an Angular component to be rendered instead of the default content card. |

### 3. `TimeLineItem` Interface

The data you pass into the timeline must follow the `TimeLineItem` interface:

```typescript
export interface TimeLineItem {
  id: string; // Unique identifier for the timeline item
  title: string; // Event title
  description: string; // Event detail/description
  icon: string; // Icon class or name
  color: string; // Color associated with the item
  date: Date; // JavaScript Date object (used for grouping and sorting)
  imageSrc?: string; // Optional URL to the main image
  thumbnailSrc?: string; // Optional URL to the thumbnail image
  customFooterMessage?: string; // Optional text to display in the footer
  url?: string; // Optional link associated with the item
}
```

### 4. API / Methods

Alternatively, if you grab a ViewChild reference to the `VerticalTimeline` component, you can call its methods programmatically:

- `scrollTo(elementId: string): void`: Will smoothly scroll the page so the given timeline event is centered.

## Development

- Start sandbox demo: `ng serve`
- Build library: `ng build vertical-timeline`
- Run tests: `ng test`
