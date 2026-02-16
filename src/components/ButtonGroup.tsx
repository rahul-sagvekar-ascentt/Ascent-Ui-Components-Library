import React, { HTMLAttributes } from 'react';

export interface ButtonGroupProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'contained' | 'outlined' | 'text';
  color?: 'primary' | 'secondary' | 'error' | 'success' | 'warning';
  size?: 'small' | 'medium' | 'large';
  orientation?: 'horizontal' | 'vertical';
  fullWidth?: boolean;
  disabled?: boolean;
}

export const ButtonGroup: React.FC<ButtonGroupProps> = ({
  variant = 'contained',
  color = 'primary',
  size = 'medium',
  orientation = 'horizontal',
  fullWidth = false,
  disabled = false,
  className = '',
  children,
  ...props
}) => {
  const orientationStyles = {
    horizontal: 'flex-row [&>*:not(:first-child)]:rounded-l-none [&>*:not(:last-child)]:rounded-r-none [&>*:not(:first-child)]:-ml-px',
    vertical: 'flex-col [&>*:not(:first-child)]:rounded-t-none [&>*:not(:last-child)]:rounded-b-none [&>*:not(:first-child)]:-mt-px',
  };

  // Clone children and inject props
  const clonedChildren = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child as React.ReactElement<any>, {
        variant: child.props.variant || variant,
        color: child.props.color || color,
        size: child.props.size || size,
        disabled: child.props.disabled !== undefined ? child.props.disabled : disabled,
        fullWidth: fullWidth,
      });
    }
    return child;
  });

  return (
    <div
      className={`
        inline-flex
        ${orientationStyles[orientation]}
        ${fullWidth ? 'w-full' : ''}
        ${variant === 'outlined' ? 'shadow-none' : ''}
        ${className}
      `}
      role="group"
      {...props}
    >
      {clonedChildren}
    </div>
  );
};

ButtonGroup.displayName = 'ButtonGroup';
