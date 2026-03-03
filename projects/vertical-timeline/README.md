# Angular Vertical Timeline

A sleek and flexible Angular component for displaying a chronological timeline. Built with modern Angular features (Standalone, Signals, Zoning-less friendly), it offers both default styling and customizable visualization options for your chronological data.

## Features

- **Modern Angular**: Standalone components, robust signals approach.
- **Auto-grouping**: Automatically organizes your timeline items by Year and Date.
- **Navigable**: Side navigation menu grouped by timeline entries.
- **Smooth scrolling**: Click a timeline thumbnail to scroll directly to the chosen event.
- **Customizable**: Supply your own component for rendering items instead of using the default one!

## Installation

To install this library into your Angular project, run:

```bash
npm install ng-vertical-timeline-component
```

> **Note:** Make sure you have the `@angular/core` and `@angular/common` dependencies installed (requires Angular v17+).

## Basic Usage

Import `VerticalTimeline` into your standalone component or NgModule:

```typescript
import { Component } from '@angular/core';
import { VerticalTimeline } from 'ng-vertical-timeline-component';
import { TimeLineItem } from 'ng-vertical-timeline-component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [VerticalTimeline],
  template: `
    <div style="width: 100%; max-width: 800px; margin: 0 auto;">
      <lib-vertical-timeline [items]="timelineData" [timelineWidth]="150" height="700px">
      </lib-vertical-timeline>
    </div>
  `,
})
export class AppComponent {
  timelineData: TimeLineItem[] = [
    {
      id: 'event-1',
      title: 'Project Kickoff',
      description: 'The start of something amazing.',
      date: new Date('2024-01-15T10:00:00'),
      icon: 'rocket',
      color: '#3498db',
      imageSrc: 'assets/kickoff.png',
      thumbnailSrc: 'assets/kickoff-thumb.png',
    },
    {
      id: 'event-2',
      title: 'First Release',
      description: 'V1.0 is officially live!',
      date: new Date('2024-06-20T14:30:00'),
      icon: 'check-circle',
      color: '#2ecc71',
    },
  ];
}
```

## Advanced Customization (Custom Component Rendering)

If you aren't satisfied with the default rendering (`lib-base-element`), you can pass your own component using the `customComponent` input.

```html
<lib-vertical-timeline [items]="timelineData" [customComponent]="MyCustomCardComponent">
  <!-- Add any additional content projection if supported -->
</lib-vertical-timeline>
```

## API Reference

### Inputs

| Input                   | Type                    | Default                                   | Description                                                      |
| ----------------------- | ----------------------- | ----------------------------------------- | ---------------------------------------------------------------- |
| `items`                 | `TimeLineItem[]`        | `[]`                                      | The array of timeline events to display.                         |
| `timelineWidth`         | `number`                | `100`                                     | The width (in pixels) of the right-side timeline navigation bar. |
| `height`                | `string`                | `'600px'`                                 | The CSS height given to the scrollable container.                |
| `customComponent`       | `Component`             | `undefined`                               | A custom Angular component to render each timeline item.         |
| `scrollIntoViewOptions` | `ScrollIntoViewOptions` | `{ behavior: 'smooth', block: 'center' }` | Options indicating how to scroll when navigating to an element.  |

### Models

#### `TimeLineItem`

The primary data type for populating the timeline.

```typescript
export interface TimeLineItem {
  id: string; // Unique identifier (used for scroll linking)
  title: string; // Main event title
  description: string; // Detailed event description
  date: Date; // Timeline sorting and grouping date
  icon: string; // Icon identifier or class
  color: string; // Accent color for the item
  imageSrc?: string; // Main image URL (optional)
  thumbnailSrc?: string; // Navigation thumbnail URL (optional)
  customFooterMessage?: string; // Optional footer note
  url?: string; // Optional link url
}
```

## Styling

The timeline comes with a lightweight base design. The main layout is divided into the scrolling events area and a sticky navigation timeline on the right side. You can override its base classes via global CSS by targeting `.timeline-container`, `.scroll-container`, `.timeline-nav`, `.thumbnail-image`, and more.

## License

MIT License
