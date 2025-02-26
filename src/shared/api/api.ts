import { Site, Test } from './types';

type ApiResponse<T> = T;

const apiFetch = async <T>(url: string, options: RequestInit = {}): Promise<ApiResponse<T>> => {
  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }

    return (await response.json()) as ApiResponse<T>;
  } catch (error) {
    console.error('API request failed', error);
    throw error;
  }
};

export const api = {
  getSites: () => apiFetch<Site[]>('/sites'),
  getSiteById: (id: string) => apiFetch<Site>(`/sites/${id}`),
  getTests: () => apiFetch<Test[]>('/tests'),
  getTestById: (id: string) => apiFetch<Test>(`/tests/${id}`),
};
