import React, { TextareaHTMLAttributes, forwardRef } from 'react';

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant?: 'outlined' | 'filled' | 'standard';
  color?: 'primary' | 'secondary';
  fullWidth?: boolean;
  error?: boolean;
  helperText?: string;
  label?: string;
  minRows?: number;
  maxRows?: number;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      variant = 'outlined',
      color = 'primary',
      fullWidth = false,
      error = false,
      helperText,
      label,
      minRows = 3,
      className = '',
      disabled,
      ...props
    },
    ref
  ) => {
    const baseClasses = 'transition-all duration-200 outline-none resize-y';
    
    const variantClasses = {
      outlined: `border rounded px-3.5 py-2 ${
        error
          ? 'border-red-500 focus:border-red-500'
          : disabled
          ? 'border-gray-300 bg-gray-50'
          : color === 'primary'
          ? 'border-gray-300 hover:border-gray-900 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20'
          : 'border-gray-300 hover:border-gray-900 focus:border-secondary-500 focus:ring-2 focus:ring-secondary-500/20'
      }`,
      filled: `border-0 border-b-2 bg-gray-100 rounded-t px-3.5 py-2 ${
        error
          ? 'border-red-500 focus:border-red-500'
          : disabled
          ? 'border-gray-300 bg-gray-50'
          : color === 'primary'
          ? 'border-gray-400 hover:bg-gray-200 focus:border-primary-500 focus:bg-gray-50'
          : 'border-gray-400 hover:bg-gray-200 focus:border-secondary-500 focus:bg-gray-50'
      }`,
      standard: `border-0 border-b px-0.5 py-1 ${
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
        <textarea
          ref={ref}
          disabled={disabled}
          rows={minRows}
          className={`${baseClasses} ${variantClasses[variant]} ${
            fullWidth ? 'w-full' : ''
          } ${disabled ? 'cursor-not-allowed text-gray-400' : ''} ${className}`}
          {...props}
        />
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

Textarea.displayName = 'Textarea';
