export interface LifeEvent {
  id: string;
  date: Date;
  title: string;
  description?: string;
  mediaUrls?: string[];
}

export interface Season {
  id: string;
  startDate: Date;
  endDate?: Date;
  title: string;
  color: string;
  description?: string;
  mediaUrls?: string[];
}

export interface Goal {
  id: string;
  title: string;
  targetDate?: Date;
  priority: 'low' | 'medium' | 'high';
  completed: boolean;
  seasonId?: string;
  color?: string;
  notes?: string;
  mediaUrls?: string[];
}

export interface MonthBox {
  date: Date;
  isFilled: boolean;
  isCurrent: boolean;
  events: LifeEvent[];
  season?: Season;
}