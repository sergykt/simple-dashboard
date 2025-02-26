import { memo } from 'react';
import classNames from 'classnames';
import { useFilters } from '../lib/useFilters';
import styles from './Filters.module.scss';

export const Filters = memo(() => {
  const { sortBy, order, toggleOrder } = useFilters();

  const getButtonClass = (field: string) =>
    classNames(styles.toggle, {
      [styles.active]: sortBy === field,
      [styles.desc]: sortBy === field && order === 'desc',
    });

  return (
    <div className={styles.wrapper}>
      <div className={styles.name}>
        <button
          className={getButtonClass('name')}
          type='button'
          onClick={() => toggleOrder('name')}
        >
          Name
        </button>
      </div>
      <div className={styles.type}>
        <button
          className={getButtonClass('type')}
          type='button'
          onClick={() => toggleOrder('type')}
        >
          Type
        </button>
      </div>
      <div className={styles.status}>
        <button
          className={getButtonClass('status')}
          type='button'
          onClick={() => toggleOrder('status')}
        >
          Status
        </button>
      </div>
      <div className={styles.site}>
        <button
          className={getButtonClass('site')}
          type='button'
          onClick={() => toggleOrder('site')}
        >
          Site
        </button>
      </div>
      <div className={styles.empty} />
    </div>
  );
});
