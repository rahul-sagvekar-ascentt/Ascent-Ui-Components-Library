import React, { InputHTMLAttributes, forwardRef } from 'react';

export interface SwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  color?: 'primary' | 'secondary';
  label?: string;
}

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  (
    {
      color = 'primary',
      label,
      className = '',
      disabled,
      checked,
      ...props
    },
    ref
  ) => {
    const colorClasses = {
      primary: 'peer-checked:bg-primary-500',
      secondary: 'peer-checked:bg-secondary-500',
    };

    const switchElement = (
      <label className={`relative inline-block w-11 h-6 ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`}>
        <input
          ref={ref}
          type="checkbox"
          disabled={disabled}
          checked={checked}
          className="sr-only peer"
          {...props}
        />
        <div
          className={`
            w-full h-full bg-gray-300 rounded-full
            peer-checked:bg-primary-500
            peer-focus:ring-2 peer-focus:ring-primary-500/20
            transition-colors duration-200
            ${colorClasses[color]}
          `}
        ></div>
        <div
          className={`
            absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full
            shadow-md transition-transform duration-200
            peer-checked:translate-x-5
          `}
        ></div>
      </label>
    );

    if (label) {
      return (
        <div className="inline-flex items-center gap-2">
          {switchElement}
          <span className={`text-sm select-none ${disabled ? 'text-gray-400' : 'text-gray-700'}`}>
            {label}
          </span>
        </div>
      );
    }

    return switchElement;
  }
);

Switch.displayName = 'Switch';
