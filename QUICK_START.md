# Ascent UI Library - Quick Start Guide

## Installation & Setup

### 1. Install the library

```bash
npm install
```

### 2. Build the library

```bash
npm run build
npm pack
```

This will create a `dist` folder with the compiled library files.

### 3. Using in Your Project

#### Local Development
To use this library locally in another project:

```bash
# In the ascent-ui-library directory
npm link

# In your project directory
npm link ascent-ui-library
```

#### Install from Built Package
Or you can install directly from the built package:

```bash
npm install /path/to/ascent-ui-library
```

### 4. Setup Tailwind CSS in Your Project

**Install Tailwind CSS:**
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

**Configure `tailwind.config.js`:**
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/ascent-ui-library/dist/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e3f2fd',
          100: '#bbdefb',
          200: '#90caf9',
          300: '#64b5f6',
          400: '#42a5f5',
          500: '#2196f3',
          600: '#1e88e5',
          700: '#1976d2',
          800: '#1565c0',
          900: '#0d47a1',
        },
        secondary: {
          50: '#fce4ec',
          100: '#f8bbd0',
          200: '#f48fb1',
          300: '#f06292',
          400: '#ec407a',
          500: '#e91e63',
          600: '#d81b60',
          700: '#c2185b',
          800: '#ad1457',
          900: '#880e4f',
        },
      },
    },
  },
  plugins: [],
}
```

**Add Tailwind directives to your CSS:**
```css
/* src/index.css or src/App.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 5. Start Using Components

```tsx
import React, { useState } from 'react';
import {
  Button,
  TextField,
  Checkbox,
  Select,
  Text
} from 'ascent-ui-library';

function App() {
  const [name, setName] = useState('');
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="p-8 max-w-md mx-auto">
      <Text variant="h3" gutterBottom>
        Welcome to Ascent UI
      </Text>

      <div className="space-y-4">
        <TextField
          label="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
        />

        <Checkbox
          label="I agree to the terms"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
        />

        <Button
          variant="contained"
          color="primary"
          fullWidth
          disabled={!agreed}
        >
          Submit
        </Button>
      </div>
    </div>
  );
}

export default App;
```

## Component Examples

### Input Components
```tsx
// Basic Input
<Input
  label="Username"
  placeholder="Enter username"
  variant="outlined"
  fullWidth
/>

// TextField with icon
<TextField
  label="Email"
  type="email"
  startAdornment={<EmailIcon />}
  fullWidth
/>

// Textarea
<Textarea
  label="Description"
  minRows={4}
  fullWidth
/>
```

### Selection Components
```tsx
// Checkbox
<Checkbox
  label="Remember me"
  checked={checked}
  onChange={(e) => setChecked(e.target.checked)}
/>

// Radio
<Radio
  label="Option 1"
  name="options"
  value="1"
  checked={selected === '1'}
  onChange={(e) => setSelected(e.target.value)}
/>

// Switch
<Switch
  label="Enable notifications"
  checked={enabled}
  onChange={(e) => setEnabled(e.target.checked)}
/>

// Select
<Select
  label="Country"
  options={[
    { value: 'us', label: 'United States' },
    { value: 'uk', label: 'United Kingdom' }
  ]}
  fullWidth
/>

// Slider
<Slider
  label="Volume"
  min={0}
  max={100}
  value={volume}
  onChange={(e) => setVolume(Number(e.target.value))}
  showValue
/>
```

### Display Components
```tsx
// Typography
<Text variant="h1">Heading</Text>
<Text variant="body1" color="textSecondary">
  Description text
</Text>

// Image
<Image
  src="/image.jpg"
  alt="Description"
  variant="rounded"
  elevation={2}
/>
```

### Action Components
```tsx
// Button
<Button
  variant="contained"
  color="primary"
  size="medium"
  startIcon={<PlusIcon />}
  onClick={handleClick}
>
  Add Item
</Button>

// Button Group
<ButtonGroup variant="outlined">
  <Button>One</Button>
  <Button>Two</Button>
  <Button>Three</Button>
</ButtonGroup>
```

## Common Patterns

### Form Example
```tsx
function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    subscribe: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <TextField
        label="Name"
        value={formData.name}
        onChange={(e) => setFormData({...formData, name: e.target.value})}
        fullWidth
        required
      />

      <TextField
        label="Email"
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({...formData, email: e.target.value})}
        fullWidth
        required
      />

      <Textarea
        label="Message"
        value={formData.message}
        onChange={(e) => setFormData({...formData, message: e.target.value})}
        minRows={4}
        fullWidth
        required
      />

      <Checkbox
        label="Subscribe to newsletter"
        checked={formData.subscribe}
        onChange={(e) => setFormData({...formData, subscribe: e.target.checked})}
      />

      <Button type="submit" variant="contained" fullWidth>
        Send Message
      </Button>
    </form>
  );
}
```

## Customization

### Custom Colors
You can customize colors by updating your `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        500: '#your-primary-color',
        600: '#your-primary-dark',
        // ...
      },
    },
  },
}
```

### Custom Styles
All components accept a `className` prop for additional styling:

```tsx
<Button className="hover:scale-105 transition-transform">
  Custom Button
</Button>
```

## TypeScript Support

The library is fully typed. Import types as needed:

```tsx
import { ButtonProps, TextFieldProps } from 'ascent-ui-library';

const MyButton: React.FC<ButtonProps> = (props) => {
  return <Button {...props} />;
};
```

## Troubleshooting

### Styles not applying
1. Make sure Tailwind CSS is properly configured
2. Check that the library path is in your `tailwind.config.js` content array
3. Ensure Tailwind directives are in your CSS file

### Components not found
1. Verify the library is properly installed
2. Check the import path: `import { Component } from 'ascent-ui-library'`
3. Ensure the library is built: `npm run build`

## Next Steps

- Explore all components in the `src/Example.tsx` file
- Read the full documentation in `README.md`
- Customize the theme to match your brand
- Build amazing applications!

## Support

For issues or questions:
- Check the README.md for detailed documentation
- Review the Example.tsx file for usage examples
- Open an issue on GitHub
