export interface TimeLineItem {
  title: string;
  description: string;
  icon: string;
  color: string;
  date: Date;
  id: string;
  imageSrc?: string;
  thumbnailSrc?: string;
  customFooterMessage?: string;
  url?: string;
}

export interface TimeLineMark {
  imgSrc?: string;
}

export interface TimeLineHandler {
  [year: string]: TimeLineItem[];
}
