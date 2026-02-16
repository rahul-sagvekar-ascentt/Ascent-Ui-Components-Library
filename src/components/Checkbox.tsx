import React, { InputHTMLAttributes, forwardRef } from 'react';

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  color?: 'primary' | 'secondary';
  label?: string;
  indeterminate?: boolean;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      color = 'primary',
      label,
      indeterminate = false,
      className = '',
      disabled,
      ...props
    },
    ref
  ) => {
    const colorClasses = {
      primary: 'checked:bg-primary-500 checked:border-primary-500 focus:ring-primary-500/20',
      secondary: 'checked:bg-secondary-500 checked:border-secondary-500 focus:ring-secondary-500/20',
    };

    const checkboxElement = (
      <input
        ref={ref}
        type="checkbox"
        disabled={disabled}
        className={`
          w-5 h-5 rounded border-2 border-gray-400
          transition-all duration-200
          cursor-pointer
          focus:outline-none focus:ring-2
          ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:border-gray-600'}
          ${colorClasses[color]}
          ${className}
        `}
        {...props}
      />
    );

    if (label) {
      return (
        <label className={`inline-flex items-center gap-2 ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}>
          {checkboxElement}
          <span className={`text-sm select-none ${disabled ? 'text-gray-400' : 'text-gray-700'}`}>
            {label}
          </span>
        </label>
      );
    }

    return checkboxElement;
  }
);

Checkbox.displayName = 'Checkbox';
