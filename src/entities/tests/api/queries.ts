import { useEffect, useState } from 'react';
import { removeUrlPrefix } from '@/shared/lib/removeUrlPrefix';
import { api, type Order, type SortBy } from '@/shared/api';
import { type Site } from '@/shared/model/types';
import { addSiteToTest, addSiteToTests, sortTestsBySite, sortTestsByStatus } from '../lib/mappers';
import { TestWithSite } from '../model/types';

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
        const testsWithSite = addSiteToTests(testsResponse, sites);
        const sortedTests = sortTestsBySite(testsWithSite, order);
        sortTestsBySite(sortedTests, order);

        setTests(testsWithSite);
      } else if (sortBy === 'status') {
        const testsResponse = await api.getTests(search);
        const testsWithSite = addSiteToTests(testsResponse, sites);
        const sortedTests = sortTestsByStatus(testsWithSite, order);

        setTests(sortedTests);
      } else {
        const testsResponse = await api.getTests(search, order, sortBy);
        const testsWithSite = addSiteToTests(testsResponse, sites);

        setTests(testsWithSite);
      }
    };

    getTests().catch(console.error);
  }, [search, sortBy, order, sites]);

  return tests;
};

export const useGetTest = (id: number) => {
  const [test, setTests] = useState<TestWithSite | undefined>();

  useEffect(() => {
    const getTest = async () => {
      const testResponse = await api.getTestById(id);
      if (!testResponse) return;

      const site = await api.getSiteById(testResponse.siteId);

      if (site) {
        site.url = removeUrlPrefix(site.url);

        setTests(addSiteToTest(testResponse, site));
      } else {
        setTests({ ...testResponse, site: '' });
      }
    };

    getTest().catch(console.error);
  }, [id]);

  return test;
};
