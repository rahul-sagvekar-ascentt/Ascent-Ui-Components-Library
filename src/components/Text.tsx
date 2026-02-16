import React, { HTMLAttributes } from 'react';

export interface TextProps extends HTMLAttributes<HTMLElement> {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'caption' | 'overline';
  color?: 'primary' | 'secondary' | 'textPrimary' | 'textSecondary' | 'error';
  align?: 'left' | 'center' | 'right' | 'justify';
  gutterBottom?: boolean;
  noWrap?: boolean;
  component?: keyof JSX.IntrinsicElements;
}

export const Text: React.FC<TextProps> = ({
  variant = 'body1',
  color = 'textPrimary',
  align = 'left',
  gutterBottom = false,
  noWrap = false,
  component,
  className = '',
  children,
  ...props
}) => {
  const variantStyles = {
    h1: 'text-6xl font-light leading-tight',
    h2: 'text-5xl font-light leading-tight',
    h3: 'text-4xl font-normal leading-tight',
    h4: 'text-3xl font-normal leading-snug',
    h5: 'text-2xl font-normal leading-snug',
    h6: 'text-xl font-medium leading-snug',
    subtitle1: 'text-base font-normal leading-relaxed',
    subtitle2: 'text-sm font-medium leading-relaxed',
    body1: 'text-base font-normal leading-relaxed',
    body2: 'text-sm font-normal leading-relaxed',
    caption: 'text-xs font-normal leading-normal',
    overline: 'text-xs font-normal uppercase tracking-wide leading-relaxed',
  };

  const colorStyles = {
    primary: 'text-primary-500',
    secondary: 'text-secondary-500',
    textPrimary: 'text-gray-900',
    textSecondary: 'text-gray-600',
    error: 'text-red-500',
  };

  const alignStyles = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
    justify: 'text-justify',
  };

  const defaultComponents: Record<string, keyof JSX.IntrinsicElements> = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    subtitle1: 'h6',
    subtitle2: 'h6',
    body1: 'p',
    body2: 'p',
    caption: 'span',
    overline: 'span',
  };

  const Component = component || defaultComponents[variant];

  return React.createElement(
    Component,
    {
      className: `
        ${variantStyles[variant]}
        ${colorStyles[color]}
        ${alignStyles[align]}
        ${gutterBottom ? 'mb-4' : ''}
        ${noWrap ? 'truncate' : ''}
        ${className}
      `,
      ...props,
    },
    children
  );
};

Text.displayName = 'Text';

// Alias for convenience
export const Label = Text;
