import React, { InputHTMLAttributes, forwardRef } from 'react';

export interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  color?: 'primary' | 'secondary';
  label?: string;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      color = 'primary',
      label,
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

    const radioElement = (
      <input
        ref={ref}
        type="radio"
        disabled={disabled}
        className={`
          w-5 h-5 rounded-full border-2 border-gray-400
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
          {radioElement}
          <span className={`text-sm select-none ${disabled ? 'text-gray-400' : 'text-gray-700'}`}>
            {label}
          </span>
        </label>
      );
    }

    return radioElement;
  }
);

Radio.displayName = 'Radio';
