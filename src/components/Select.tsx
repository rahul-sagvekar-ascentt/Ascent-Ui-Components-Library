import React, { SelectHTMLAttributes, forwardRef } from 'react';

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  variant?: 'outlined' | 'filled' | 'standard';
  color?: 'primary' | 'secondary';
  fullWidth?: boolean;
  error?: boolean;
  helperText?: string;
  label?: string;
  options: SelectOption[];
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      variant = 'outlined',
      color = 'primary',
      fullWidth = false,
      error = false,
      helperText,
      label,
      options,
      className = '',
      disabled,
      ...props
    },
    ref
  ) => {
    const baseClasses = 'transition-all duration-200 outline-none appearance-none bg-white cursor-pointer';
    
    const variantClasses = {
      outlined: `border rounded px-3.5 py-2.5 pr-10 ${
        error
          ? 'border-red-500 focus:border-red-500'
          : disabled
          ? 'border-gray-300 bg-gray-50'
          : color === 'primary'
          ? 'border-gray-300 hover:border-gray-900 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20'
          : 'border-gray-300 hover:border-gray-900 focus:border-secondary-500 focus:ring-2 focus:ring-secondary-500/20'
      }`,
      filled: `border-0 border-b-2 bg-gray-100 rounded-t px-3.5 py-2.5 pr-10 ${
        error
          ? 'border-red-500 focus:border-red-500'
          : disabled
          ? 'border-gray-300 bg-gray-50'
          : color === 'primary'
          ? 'border-gray-400 hover:bg-gray-200 focus:border-primary-500 focus:bg-gray-50'
          : 'border-gray-400 hover:bg-gray-200 focus:border-secondary-500 focus:bg-gray-50'
      }`,
      standard: `border-0 border-b px-0.5 py-1.5 pr-8 ${
        error
          ? 'border-red-500 focus:border-red-500'
          : disabled
          ? 'border-gray-300'
          : color === 'primary'
          ? 'border-gray-400 hover:border-gray-900 focus:border-primary-500 focus:border-b-2'
          : 'border-gray-400 hover:border-gray-900 focus:border-secondary-500 focus:border-b-2'
      }`,
    };

    return (
      <div className={`${fullWidth ? 'w-full' : 'inline-block'}`}>
        {label && (
          <label
            className={`block text-sm font-medium mb-1 ${
              error ? 'text-red-500' : disabled ? 'text-gray-400' : 'text-gray-700'
            }`}
          >
            {label}
          </label>
        )}
        <div className="relative">
          <select
            ref={ref}
            disabled={disabled}
            className={`${baseClasses} ${variantClasses[variant]} ${
              fullWidth ? 'w-full' : ''
            } ${disabled ? 'cursor-not-allowed text-gray-400' : ''} ${className}`}
            {...props}
          >
            {options.map((option) => (
              <option
                key={option.value}
                value={option.value}
                disabled={option.disabled}
              >
                {option.label}
              </option>
            ))}
          </select>
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
        {helperText && (
          <p
            className={`text-xs mt-1 ${
              error ? 'text-red-500' : 'text-gray-600'
            }`}
          >
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Select.displayName = 'Select';
