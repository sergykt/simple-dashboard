export type Order = 'asc' | 'desc';

export type SortBy = 'name' | 'type' | 'status' | 'site';

export type SortTestsBy = 'name' | 'type';

export interface FetchRequest extends RequestInit {
  params?: URLSearchParams;
}
