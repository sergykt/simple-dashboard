export const API_ROUTES = {
  SITES: (id?: string) => (id ? `/sites/${id}` : '/sites'),
  TESTS: (id?: string) => (id ? `/tests/${id}` : '/tests'),
} as const;
