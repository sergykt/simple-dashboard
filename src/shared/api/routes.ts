export const API_BASE_URL = 'http://localhost:3100';

export const API_ROUTES = {
  SITES: (id?: number) => (id ? `/sites/${id}` : '/sites'),
  TESTS: (id?: number) => (id ? `/tests/${id}` : '/tests'),
} as const;
