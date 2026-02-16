import React, { ButtonHTMLAttributes, useState, useRef } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'contained' | 'outlined' | 'text';
  color?: 'primary' | 'secondary' | 'error' | 'success' | 'warning';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  disableRipple?: boolean;
  loading?: boolean;
  loadingPosition?: 'start' | 'center' | 'end';
  loadingIndicator?: React.ReactNode;
}

const Spinner: React.FC<{ size: 'small' | 'medium' | 'large' }> = ({ size }) => {
  const sizeMap = {
    small: 'w-3.5 h-3.5',
    medium: 'w-4 h-4',
    large: 'w-5 h-5',
  };

  return (
    <svg
      className={`animate-spin ${sizeMap[size]}`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );
};

export const Button: React.FC<ButtonProps> = ({
  variant = 'contained',
  color = 'primary',
  size = 'medium',
  fullWidth = false,
  startIcon,
  endIcon,
  disableRipple = false,
  loading = false,
  loadingPosition = 'center',
  loadingIndicator,
  className = '',
  disabled,
  onClick,
  children,
  ...props
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [ripples, setRipples] = useState<Array<{ x: number; y: number; id: number }>>([]);

  const isDisabled = disabled || loading;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!disableRipple && !isDisabled) {
      const button = buttonRef.current;
      if (button) {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const id = Date.now();

        setRipples((prev) => [...prev, { x, y, id }]);

        setTimeout(() => {
          setRipples((prev) => prev.filter((ripple) => ripple.id !== id));
        }, 600);
      }
    }

    if (!loading) {
      onClick?.(e);
    }
  };

  const sizeStyles = {
    small: 'px-2.5 py-1 text-sm',
    medium: 'px-4 py-2 text-sm',
    large: 'px-5 py-2.5 text-base',
  };

  const colorVariants = {
    contained: {
      primary: 'bg-primary-500 hover:bg-primary-600 text-white shadow-mui hover:shadow-mui-md',
      secondary: 'bg-secondary-500 hover:bg-secondary-600 text-white shadow-mui hover:shadow-mui-md',
      error: 'bg-red-500 hover:bg-red-600 text-white shadow-mui hover:shadow-mui-md',
      success: 'bg-green-500 hover:bg-green-600 text-white shadow-mui hover:shadow-mui-md',
      warning: 'bg-orange-500 hover:bg-orange-600 text-white shadow-mui hover:shadow-mui-md',
    },
    outlined: {
      primary: 'border-2 border-primary-500 text-primary-500 hover:bg-primary-50 hover:border-primary-600',
      secondary: 'border-2 border-secondary-500 text-secondary-500 hover:bg-secondary-50 hover:border-secondary-600',
      error: 'border-2 border-red-500 text-red-500 hover:bg-red-50 hover:border-red-600',
      success: 'border-2 border-green-500 text-green-500 hover:bg-green-50 hover:border-green-600',
      warning: 'border-2 border-orange-500 text-orange-500 hover:bg-orange-50 hover:border-orange-600',
    },
    text: {
      primary: 'text-primary-500 hover:bg-primary-50',
      secondary: 'text-secondary-500 hover:bg-secondary-50',
      error: 'text-red-500 hover:bg-red-50',
      success: 'text-green-500 hover:bg-green-50',
      warning: 'text-orange-500 hover:bg-orange-50',
    },
  };

  const loader = loadingIndicator || <Spinner size={size} />;

  const renderContent = () => {
    if (loading && loadingPosition === 'center') {
      return (
        <>
          <span className="invisible inline-flex items-center gap-2">
            {startIcon && <span className="inline-flex">{startIcon}</span>}
            {children}
            {endIcon && <span className="inline-flex">{endIcon}</span>}
          </span>
          <span className="absolute inset-0 flex items-center justify-center">
            {loader}
          </span>
        </>
      );
    }

    return (
      <>
        {loading && loadingPosition === 'start' ? (
          <span className="inline-flex">{loader}</span>
        ) : (
          startIcon && <span className="inline-flex">{startIcon}</span>
        )}
        {children}
        {loading && loadingPosition === 'end' ? (
          <span className="inline-flex">{loader}</span>
        ) : (
          endIcon && <span className="inline-flex">{endIcon}</span>
        )}
      </>
    );
  };

  return (
    <button
      ref={buttonRef}
      disabled={isDisabled}
      onClick={handleClick}
      aria-busy={loading}
      className={`
        relative overflow-hidden
        inline-flex items-center justify-center gap-2
        font-medium rounded
        transition-all duration-200
        focus:outline-none focus:ring-2 focus:ring-offset-2
        ${sizeStyles[size]}
        ${colorVariants[variant][color]}
        ${fullWidth ? 'w-full' : ''}
        ${isDisabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : 'cursor-pointer'}
        ${variant === 'contained' ? 'focus:ring-primary-500' : ''}
        ${className}
      `}
      {...props}
    >
      {!disableRipple && ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute rounded-full bg-white opacity-30 animate-ripple pointer-events-none"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: '20px',
            height: '20px',
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}

      {renderContent()}
    </button>
  );
};

Button.displayName = 'Button';