import React, { InputHTMLAttributes, forwardRef, useState } from 'react';

export interface SliderProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  color?: 'primary' | 'secondary';
  label?: string;
  showValue?: boolean;
  marks?: boolean;
  valueLabelDisplay?: 'on' | 'auto' | 'off';
}

export const Slider = forwardRef<HTMLInputElement, SliderProps>(
  (
    {
      color = 'primary',
      label,
      showValue = false,
      marks = false,
      valueLabelDisplay = 'auto',
      min = 0,
      max = 100,
      step = 1,
      value,
      defaultValue,
      onChange,
      className = '',
      disabled,
      ...props
    },
    ref
  ) => {
    const [currentValue, setCurrentValue] = useState(
      (value as number) || (defaultValue as number) || Number(min)
    );
    const [isHovering, setIsHovering] = useState(false);
    const [isDragging, setIsDragging] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setCurrentValue(Number(e.target.value));
      onChange?.(e);
    };

    const colorClasses = {
      primary: {
        track: 'bg-primary-500',
        thumb: 'bg-primary-500 focus:ring-primary-500/20',
      },
      secondary: {
        track: 'bg-secondary-500',
        thumb: 'bg-secondary-500 focus:ring-secondary-500/20',
      },
    };

    const percentage = ((Number(currentValue) - Number(min)) / (Number(max) - Number(min))) * 100;

    const showLabel = valueLabelDisplay === 'on' || 
                     (valueLabelDisplay === 'auto' && (isHovering || isDragging));

    return (
      <div className={`w-full ${className}`}>
        {label && (
          <label className={`block text-sm font-medium mb-2 ${disabled ? 'text-gray-400' : 'text-gray-700'}`}>
            {label}
          </label>
        )}
        <div className="relative pt-6 pb-2">
          {showLabel && (
            <div
              className="absolute -top-8 left-0 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded"
              style={{ left: `${percentage}%` }}
            >
              {currentValue}
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-4 border-transparent border-t-gray-900"></div>
            </div>
          )}
          
          <div className="relative h-1 bg-gray-300 rounded-full">
            <div
              className={`absolute h-full rounded-full transition-all ${colorClasses[color].track}`}
              style={{ width: `${percentage}%` }}
            ></div>
            
            <input
              ref={ref}
              type="range"
              min={min}
              max={max}
              step={step}
              value={value !== undefined ? value : currentValue}
              onChange={handleChange}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              onMouseDown={() => setIsDragging(true)}
              onMouseUp={() => setIsDragging(false)}
              disabled={disabled}
              className={`
                absolute top-1/2 -translate-y-1/2 w-full h-1
                appearance-none bg-transparent cursor-pointer
                focus:outline-none
                ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
                
                [&::-webkit-slider-thumb]:appearance-none
                [&::-webkit-slider-thumb]:w-5
                [&::-webkit-slider-thumb]:h-5
                [&::-webkit-slider-thumb]:rounded-full
                [&::-webkit-slider-thumb]:${colorClasses[color].thumb}
                [&::-webkit-slider-thumb]:shadow-md
                [&::-webkit-slider-thumb]:transition-all
                [&::-webkit-slider-thumb]:hover:scale-110
                [&::-webkit-slider-thumb]:active:scale-125
                
                [&::-moz-range-thumb]:appearance-none
                [&::-moz-range-thumb]:w-5
                [&::-moz-range-thumb]:h-5
                [&::-moz-range-thumb]:rounded-full
                [&::-moz-range-thumb]:${colorClasses[color].thumb}
                [&::-moz-range-thumb]:border-0
                [&::-moz-range-thumb]:shadow-md
                [&::-moz-range-thumb]:transition-all
                [&::-moz-range-thumb]:hover:scale-110
                [&::-moz-range-thumb]:active:scale-125
              `}
              {...props}
            />
          </div>
          
          {marks && (
            <div className="flex justify-between mt-2 text-xs text-gray-600">
              <span>{min}</span>
              <span>{max}</span>
            </div>
          )}
          
          {showValue && !showLabel && (
            <div className="text-center mt-2 text-sm text-gray-700">
              {currentValue}
            </div>
          )}
        </div>
      </div>
    );
  }
);

Slider.displayName = 'Slider';
