import { CSSProperties, type FC, memo } from 'react';
import classNames from 'classnames';
import styles from './CircleChart.module.scss';

interface CircleChatProps {
  percentA: number;
  className?: string;
}

export const CircleChart: FC<CircleChatProps> = memo(({ className, percentA }) => {
  const percentB = 100 - percentA;

  const circleStyle: CSSProperties = {
    background: `conic-gradient(var(--red) 0% ${percentA}%, var(--blue) ${percentA}% 100%)`,
  };

  return (
    <div className={classNames(styles.wrapper, className)}>
      <div className={styles.circle} style={circleStyle} />
      <div className={styles.legend}>
        <div className={styles.legendItem}>
          <div className={classNames(styles.legendMarker, styles.red)} />
          <div className={styles.legendText}>A - {percentA}%</div>
        </div>
        <div className={styles.legendItem}>
          <div className={classNames(styles.legendMarker, styles.blue)} />
          <div className={styles.legendText}>B - {percentB}%</div>
        </div>
      </div>
    </div>
  );
});
