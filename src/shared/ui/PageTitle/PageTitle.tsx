import { type FC, memo } from 'react';
import classNames from 'classnames';
import styles from './PageTitle.module.scss';

interface PageTitleProps {
  title: string;
  className?: string;
}

export const PageTitle: FC<PageTitleProps> = memo(({ title, className }) => {
  return <h1 className={classNames(styles.title, className)}>{title}</h1>;
});
