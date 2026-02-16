import React, { InputHTMLAttributes, forwardRef, useState } from 'react';

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: 'outlined' | 'filled' | 'standard';
  color?: 'primary' | 'secondary';
  fullWidth?: boolean;
  error?: boolean;
  helperText?: string;
  label?: string;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
}

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      variant = 'outlined',
      color = 'primary',
      fullWidth = false,
      error = false,
      helperText,
      label,
      startAdornment,
      endAdornment,
      className = '',
      disabled,
      onFocus,
      onBlur,
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const [hasValue, setHasValue] = useState(!!props.value || !!props.defaultValue);

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);
      onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      setHasValue(!!e.target.value);
      onBlur?.(e);
    };

    const baseClasses = 'transition-all duration-200 outline-none peer w-full';
    
    const variantClasses = {
      outlined: `border rounded px-3.5 ${startAdornment ? 'pl-10' : ''} ${
        endAdornment ? 'pr-10' : ''
      } py-3.5 ${
        error
          ? 'border-red-500 focus:border-red-500'
          : disabled
          ? 'border-gray-300 bg-gray-50'
          : color === 'primary'
          ? 'border-gray-300 hover:border-gray-900 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20'
          : 'border-gray-300 hover:border-gray-900 focus:border-secondary-500 focus:ring-2 focus:ring-secondary-500/20'
      }`,
      filled: `border-0 border-b-2 bg-gray-100 rounded-t px-3.5 ${
        startAdornment ? 'pl-10' : ''
      } ${endAdornment ? 'pr-10' : ''} pt-6 pb-2 ${
        error
          ? 'border-red-500 focus:border-red-500'
          : disabled
          ? 'border-gray-300 bg-gray-50'
          : color === 'primary'
          ? 'border-gray-400 hover:bg-gray-200 focus:border-primary-500 focus:bg-gray-50'
          : 'border-gray-400 hover:bg-gray-200 focus:border-secondary-500 focus:bg-gray-50'
      }`,
      standard: `border-0 border-b px-0.5 ${startAdornment ? 'pl-8' : ''} ${
        endAdornment ? 'pr-8' : ''
      } pt-4 pb-1 ${
        error
          ? 'border-red-500 focus:border-red-500'
          : disabled
          ? 'border-gray-300'
          : color === 'primary'
          ? 'border-gray-400 hover:border-gray-900 focus:border-primary-500 focus:border-b-2'
          : 'border-gray-400 hover:border-gray-900 focus:border-secondary-500 focus:border-b-2'
      }`,
    };

    const labelPositionClasses = {
      outlined: isFocused || hasValue
        ? '-top-2 text-xs bg-white px-1'
        : 'top-3.5 text-base',
      filled: isFocused || hasValue
        ? 'top-1.5 text-xs'
        : 'top-5 text-base',
      standard: isFocused || hasValue
        ? 'top-0 text-xs'
        : 'top-4 text-base',
    };

    return (
      <div className={`${fullWidth ? 'w-full' : 'inline-block'} relative`}>
        <div className="relative">
          {startAdornment && (
            <div className={`absolute ${variant === 'standard' ? 'left-0 top-4' : 'left-3 top-1/2 -translate-y-1/2'} text-gray-500`}>
              {startAdornment}
            </div>
          )}
          
          <input
            ref={ref}
            disabled={disabled}
            className={`${baseClasses} ${variantClasses[variant]} ${
              disabled ? 'cursor-not-allowed text-gray-400' : ''
            } ${className}`}
            onFocus={handleFocus}
            onBlur={handleBlur}
            {...props}
          />
          
          {label && (
            <label
              className={`absolute left-${startAdornment && variant !== 'outlined' ? '8' : variant === 'outlined' ? '3' : '0.5'} transition-all duration-200 pointer-events-none ${
                labelPositionClasses[variant]
              } ${
                error
                  ? 'text-red-500'
                  : disabled
                  ? 'text-gray-400'
                  : isFocused
                  ? color === 'primary'
                    ? 'text-primary-500'
                    : 'text-secondary-500'
                  : 'text-gray-600'
              }`}
            >
              {label}
            </label>
          )}
          
          {endAdornment && (
            <div className={`absolute ${variant === 'standard' ? 'right-0 top-4' : 'right-3 top-1/2 -translate-y-1/2'} text-gray-500`}>
              {endAdornment}
            </div>
          )}
        </div>
        
        {helperText && (
          <p
            className={`text-xs mt-1 ml-3.5 ${
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

TextField.displayName = 'TextField';
