import { type Site, Status, type Test } from '@/shared/model/types';
import { type Order } from '@/shared/api';
import { type TestWithSite } from '../model/types';

export const addSiteToTests = (testsResponse: Test[], sites: Site[]): TestWithSite[] => {
  return testsResponse.map((test) => {
    const site = sites.find((item) => item.id === test.siteId)!;
    return { ...test, site: site.url };
  });
};

export const addSiteToTest = (test: Test, site: Site): TestWithSite => {
  return { ...test, site: site.url };
};

export const sortTestsBySite = (tests: TestWithSite[], order: Order = 'asc'): TestWithSite[] =>
  tests.sort((a, b) => {
    const comparison = a.site.localeCompare(b.site);
    return order === 'asc' ? comparison : -comparison;
  });

const statusOrderAsc: Status[] = [Status.ONLINE, Status.PAUSED, Status.STOPPED, Status.DRAFT];
const statusOrderDesc: Status[] = [...statusOrderAsc].reverse();

export const sortTestsByStatus = (tests: TestWithSite[], order: Order = 'asc'): TestWithSite[] => {
  const statusOrder = order === 'asc' ? statusOrderAsc : statusOrderDesc;

  return tests.sort((a, b) => {
    const aStatusIndex = statusOrder.indexOf(a.status);
    const bStatusIndex = statusOrder.indexOf(b.status);
    return aStatusIndex - bStatusIndex;
  });
};
