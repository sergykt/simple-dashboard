export const APP_ROUTES = {
  HOME_PAGE: '/',
  RESULTS: (id?: number) => (id ? `/results/${id}` : '/results'),
  FINALIZE: (id?: number) => (id ? `/finalize/${id}` : '/finalize'),
  NOT_FOUND: '*',
} as const;
