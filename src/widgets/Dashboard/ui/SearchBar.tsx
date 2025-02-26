import { ChangeEvent, type FC, memo, useState } from 'react';
import { SearchIcon } from '@/shared/ui/icons/SearchIcon';
import { useDebounce } from '@/shared/lib/helperHooks/useDebounce';
import { plural } from '@/shared/lib/plural';
import { useFilters } from '../lib/useFilters';
import styles from './SearchBar.module.scss';

interface SearchBarProps {
  count: number;
}

export const SearchBar: FC<SearchBarProps> = memo(({ count = 0 }) => {
  const { search, setSearch } = useFilters();
  const [inputValue, setInputValue] = useState(search);
  const debouncedSetSearch = useDebounce(setSearch, 500);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    if (e.target.value.length > 1 || e.target.value.length === 0) {
      debouncedSetSearch(e.target.value);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.iconWrapper}>
        <SearchIcon className={styles.icon} />
      </div>
      <input
        className={styles.input}
        type='text'
        value={inputValue}
        aria-label='Search'
        onChange={onChange}
        placeholder='What test are you looking for?'
      />
      <div className={styles.count}>
        {`${count} ${plural(count, { one: 'test', other: 'tests' })}`}
      </div>
    </div>
  );
});
