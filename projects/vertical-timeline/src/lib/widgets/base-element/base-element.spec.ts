import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';

import { BaseElement } from './base-element';
import { TimeLineItem } from '../../vertical-timeline.interface';

describe('BaseElement', () => {
  let component: BaseElement;
  let fixture: ComponentFixture<BaseElement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaseElement],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(BaseElement);
    component = fixture.componentInstance;

    // Set default item to avoid errors
    const mockItem: TimeLineItem = {
      id: 'test-1',
      title: 'Test Title',
      description: 'Test description',
      icon: 'test-icon',
      color: 'red',
      date: new Date(),
    };
    fixture.componentRef.setInput('item', mockItem);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
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
});
