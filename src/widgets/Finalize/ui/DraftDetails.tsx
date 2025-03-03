import { type ChangeEvent, useState, type FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { type TestWithSite } from '@/entities/tests';
import { TestType } from '@/shared/model/types';
import { APP_ROUTES, TYPE_MAP } from '@/shared/const';
import { Button } from '@/shared/ui/Button';
import styles from './DraftDetails.module.scss';

interface DraftDetailsProps {
  test: TestWithSite;
}

export const DraftDetails: FC<DraftDetailsProps> = ({ test }) => {
  const { type, site } = test;
  const [formState, setFormState] = useState({ site, type });
  const navigate = useNavigate();

  const handleChangeSite = (e: ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, site: e.target.value });
  };

  const handleChangeType = (e: ChangeEvent<HTMLSelectElement>) => {
    setFormState({ ...formState, type: e.target.value as TestType });
  };

  return (
    <div className={styles.wrapper}>
      <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
        <div className={styles.formControl}>
          <label htmlFor='site' className={styles.label}>
            Site:{' '}
          </label>
          <input
            className={styles.input}
            id='site'
            type='text'
            value={formState.site}
            onChange={handleChangeSite}
          />
        </div>
        <div className={styles.formControl}>
          <label htmlFor='type' className={styles.label}>
            Type:{' '}
          </label>
          <div className={styles.selectWrapper}>
            <select
              className={styles.select}
              name='type'
              id='type'
              value={formState.type}
              onChange={handleChangeType}
            >
              {Object.values(TestType).map((value) => (
                <option className={styles.option} key={value} value={value}>
                  {TYPE_MAP[value]}
                </option>
              ))}
            </select>
          </div>
        </div>
        <Button className={styles.button} onClick={() => navigate(APP_ROUTES.HOME_PAGE)}>
          Finalize
        </Button>
      </form>
    </div>
  );
};
