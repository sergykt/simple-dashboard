import { type Site, type Test } from '@/shared/model/types';

export type TestWithSite = Omit<Test, 'siteId'> & { site: Site['url'] };
