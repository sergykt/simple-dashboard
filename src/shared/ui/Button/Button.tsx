import { type ComponentProps, type FC, memo } from 'react';
import classNames from 'classnames';
import styles from './Button.module.scss';

interface ButtonProps extends ComponentProps<'button'> {
  variant?: 'primary' | 'secondary';
}

export const Button: FC<ButtonProps> = memo((props) => {
  const { type, children, className, variant = 'primary', ...rest } = props;

  const buttonClassName = classNames(styles.button, className, {
    [styles.primary]: variant === 'primary',
    [styles.secondary]: variant === 'secondary',
  });

  return (
    <button
      type={type === 'submit' ? 'submit' : 'button'}
      className={buttonClassName}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
    >
      {children}
    </button>
  );
});
