import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';

import { VerticalTimeline } from './vertical-timeline';
import { TimeLineItem } from './vertical-timeline.interface';

describe('VerticalTimeline', () => {
  let component: VerticalTimeline;
  let fixture: ComponentFixture<VerticalTimeline>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerticalTimeline],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(VerticalTimeline);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('items', []);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have default inputs', () => {
    expect(component.timelineWidth()).toBe(100);
    expect(component.height()).toBe('600px');
    expect(component.scrollIntoViewOptions().behavior).toBe('smooth');
  });

  describe('Image loading', () => {
    it('onImageLoaded should set imageLoading to false', () => {
      component.imageLoading = true;
      component.onImageLoaded();
      expect(component.imageLoading).toBeFalse();
    });

    it('handleEmptyImage should set imageError and fallback url', () => {
      component.imageLoading = true;
      component.handleEmptyImage();
      expect(component.imageLoading).toBeFalse();
      expect(component.imageError()).toBeTrue();
      expect(component.imageUrl).toBe(component.placeholder);
    });
  });

  describe('Data processing', () => {
    const mockData: TimeLineItem[] = [
      {
        id: '1',
        date: new Date(2023, 4, 10),
        title: 'Test 1',
        description: 'desc',
        icon: 'i',
        color: 'c',
      },
      {
        id: '2',
        date: new Date(2024, 0, 1),
        title: 'Test 2',
        description: 'desc',
        icon: 'i',
        color: 'c',
      },
      {
        id: '3',
        date: new Date(2023, 10, 20),
        title: 'Test 3',
        description: 'desc',
        icon: 'i',
        color: 'c',
      },
      {
        id: '4',
        date: undefined as unknown as Date,
        title: 'No date',
        description: 'desc',
        icon: 'i',
        color: 'c',
      }, // No date
    ];

    it('separateByYearData should group items by year and ignore items without valid year', () => {
      const result = component.separateByYearData(mockData);
      expect(result['2023'].length).toBe(2);
      expect(result['2024'].length).toBe(1);
      expect(Object.keys(result).length).toBe(2);
    });

    it('elementsByYear computed should update based on items input', () => {
      fixture.componentRef.setInput('items', mockData);
      fixture.detectChanges();

      const result = component.elementsByYear();
      expect(result['2023'].length).toBe(2);
      expect(result['2024'].length).toBe(1);
    });

    it('years computed should return years sorted in descending order', () => {
      fixture.componentRef.setInput('items', mockData);
      fixture.detectChanges();

      const result = component.years();
      expect(result).toEqual(['2024', '2023']);
    });
  });

  describe('scrollTo', () => {
    it('should call scrollIntoView on element if it exists', () => {
      const docSpy = spyOn(document, 'getElementById').and.returnValue({
        scrollIntoView: jasmine.createSpy('scrollIntoView'),
      } as any);

      component.scrollTo('test-id');

      expect(docSpy).toHaveBeenCalledWith('test-id');
      const el = docSpy.calls.mostRecent().returnValue;
      expect((el as any).scrollIntoView).toHaveBeenCalledWith(component.scrollIntoViewOptions());
    });

    it('should not throw if element is not found', () => {
      spyOn(document, 'getElementById').and.returnValue(null);
      expect(() => component.scrollTo('non-existent')).not.toThrow();
    });
  });
});
