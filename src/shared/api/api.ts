import { API_ROUTES, API_BASE_URL } from './routes';
import { type FetchRequest, type Order, type SortTestsBy } from './types';
import { type Site, type Test } from '../model/types';

export const fetchClient = async <T>(url: string, fetchOptions: FetchRequest = {}): Promise<T> => {
  const { params, ...options } = fetchOptions;

  const searchParams = params ? `?${params.toString()}` : '';
  const urlWithParams = `${API_BASE_URL}${url}${searchParams}`;

  try {
    const response = await fetch(urlWithParams, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }

    return (await response.json()) as T;
  } catch (error) {
    console.error('API request failed', error);
    throw error;
  }
};

const getSiteById = async (id: number) => fetchClient<Site>(API_ROUTES.SITES(id));

const getSites = async () => fetchClient<Site[]>(API_ROUTES.SITES());

const getTestById = async (id: number) => fetchClient<Test>(API_ROUTES.TESTS(id));

const getTests = async (search?: string, order?: Order, sortBy?: SortTestsBy) => {
  const params = new URLSearchParams({
    _sort: sortBy ?? 'name',
    _order: order ?? 'asc',
    name_like: search ?? '',
  });

  return fetchClient<Test[]>(API_ROUTES.TESTS(), { params });
};

export const api = {
  getSites,
  getSiteById,
  getTests,
  getTestById,
};
