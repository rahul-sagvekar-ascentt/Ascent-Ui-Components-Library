import React, { ImgHTMLAttributes, useState } from 'react';

export interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  variant?: 'rounded' | 'circular' | 'square';
  elevation?: 0 | 1 | 2 | 3;
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  fallback?: React.ReactNode;
  showLoading?: boolean;
}

export const Image: React.FC<ImageProps> = ({
  variant = 'square',
  elevation = 0,
  objectFit = 'cover',
  fallback,
  showLoading = true,
  className = '',
  alt = '',
  onError,
  onLoad,
  ...props
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const variantStyles = {
    square: '',
    rounded: 'rounded-lg',
    circular: 'rounded-full',
  };

  const elevationStyles = {
    0: '',
    1: 'shadow-mui',
    2: 'shadow-mui-md',
    3: 'shadow-mui-lg',
  };

  const objectFitStyles = {
    contain: 'object-contain',
    cover: 'object-cover',
    fill: 'object-fill',
    none: 'object-none',
    'scale-down': 'object-scale-down',
  };

  const handleLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    setIsLoading(false);
    onLoad?.(e);
  };

  const handleError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    setIsLoading(false);
    setHasError(true);
    onError?.(e);
  };

  if (hasError && fallback) {
    return <div className={`${variantStyles[variant]} ${className}`}>{fallback}</div>;
  }

  return (
    <div className={`relative inline-block ${variantStyles[variant]} overflow-hidden ${className}`}>
      {isLoading && showLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          <svg
            className="w-10 h-10 text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      )}
      <img
        alt={alt}
        className={`
          ${variantStyles[variant]}
          ${elevationStyles[elevation]}
          ${objectFitStyles[objectFit]}
          ${isLoading ? 'opacity-0' : 'opacity-100'}
          transition-opacity duration-300
          w-full h-full
        `}
        onLoad={handleLoad}
        onError={handleError}
        {...props}
      />
    </div>
  );
};

Image.displayName = 'Image';
