import { useEffect, useState } from 'react';
import { api } from './api';
import { type Order, type SortBy } from './types';
import { addSiteToTest, sortTestsBySite, sortTestsByStatus } from './mappers';
import { removeUrlPrefix } from '../lib/removeUrlPrefix';
import { type Site, type TestWithSite } from '../model/types';

interface GetSitesProps {
  search?: string;
  sortBy?: SortBy;
  order?: Order;
}

export const useGetTests = (props: GetSitesProps) => {
  const { search, sortBy, order } = props;
  const [tests, setTests] = useState<TestWithSite[] | undefined>();
  const [sites, setSites] = useState<Site[] | undefined>();

  useEffect(() => {
    const getSites = async () => {
      const sitesResponse = (await api.getSites()).map((item) => ({
        ...item,
        url: removeUrlPrefix(item.url),
      }));

      setSites(sitesResponse);
    };

    getSites().catch(console.error);
  }, []);

  useEffect(() => {
    const getTests = async () => {
      if (!sites) return;

      if (sortBy === 'site') {
        const testsResponse = await api.getTests(search);
        const testsWithSite = addSiteToTest(testsResponse, sites);
        const sortedTests = sortTestsBySite(testsWithSite, order);
        sortTestsBySite(sortedTests, order);

        setTests(testsWithSite);
      } else if (sortBy === 'status') {
        const testsResponse = await api.getTests(search);
        const testsWithSite = addSiteToTest(testsResponse, sites);
        const sortedTests = sortTestsByStatus(testsWithSite, order);

        setTests(sortedTests);
      } else {
        const testsResponse = await api.getTests(search, order, sortBy);
        const testsWithSite = addSiteToTest(testsResponse, sites);

        setTests(testsWithSite);
      }
    };

    getTests().catch(console.error);
  }, [search, sortBy, order, sites]);

  return tests;
};
