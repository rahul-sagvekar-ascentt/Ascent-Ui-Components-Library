# Ascent UI Library

A Material UI inspired React component library built with Tailwind CSS. Features a comprehensive set of beautifully designed, accessible, and customizable components.

## Features

- 🎨 Material Design inspired aesthetics
- 🎯 TypeScript support
- 🎭 Multiple variants and color schemes
- ♿ Accessible components
- 📦 Tree-shakeable exports
- 🚀 Lightweight and performant
- 💅 Built with Tailwind CSS

## Installation

```bash
npm install ascent-ui-library
# or
yarn add ascent-ui-library
# or
pnpm add ascent-ui-library
```

### Prerequisites

Make sure you have the following peer dependencies installed:

```bash
npm install react react-dom
```

You also need to have Tailwind CSS set up in your project. Add the library path to your `tailwind.config.js`:

```javascript
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/ascent-ui-library/dist/**/*.{js,jsx}',
  ],
  // ... rest of your config
}
```

## Components

### Input Components

#### Input
Basic input field with multiple variants.

```tsx
import { Input } from 'ascent-ui-library';

<Input
  label="Username"
  placeholder="Enter username"
  variant="outlined"
  fullWidth
/>
```

**Props:**
- `variant`: 'outlined' | 'filled' | 'standard'
- `color`: 'primary' | 'secondary'
- `fullWidth`: boolean
- `error`: boolean
- `helperText`: string
- `label`: string

#### TextField
Advanced input field with label animation and adornments.

```tsx
import { TextField } from 'ascent-ui-library';

<TextField
  label="Email"
  type="email"
  variant="outlined"
  startAdornment={<EmailIcon />}
  fullWidth
/>
```

**Props:**
- All Input props plus:
- `startAdornment`: React.ReactNode
- `endAdornment`: React.ReactNode

#### Textarea
Multi-line text input field.

```tsx
import { Textarea } from 'ascent-ui-library';

<Textarea
  label="Comments"
  placeholder="Enter your comments..."
  minRows={4}
  fullWidth
/>
```

**Props:**
- Similar to Input
- `minRows`: number
- `maxRows`: number

### Selection Components

#### Checkbox
Checkbox input with label support.

```tsx
import { Checkbox } from 'ascent-ui-library';

<Checkbox
  label="Accept terms and conditions"
  checked={checked}
  onChange={(e) => setChecked(e.target.checked)}
/>
```

**Props:**
- `color`: 'primary' | 'secondary'
- `label`: string
- `indeterminate`: boolean

#### Radio
Radio button input with label support.

```tsx
import { Radio } from 'ascent-ui-library';

<Radio
  label="Option 1"
  name="radio-group"
  value="option1"
  checked={selected === 'option1'}
  onChange={(e) => setSelected(e.target.value)}
/>
```

**Props:**
- `color`: 'primary' | 'secondary'
- `label`: string

#### Switch
Toggle switch component.

```tsx
import { Switch } from 'ascent-ui-library';

<Switch
  label="Enable notifications"
  checked={enabled}
  onChange={(e) => setEnabled(e.target.checked)}
/>
```

**Props:**
- `color`: 'primary' | 'secondary'
- `label`: string

#### Select
Dropdown select component.

```tsx
import { Select } from 'ascent-ui-library';

const options = [
  { value: 'us', label: 'United States' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'ca', label: 'Canada' },
];

<Select
  label="Country"
  options={options}
  value={country}
  onChange={(e) => setCountry(e.target.value)}
  fullWidth
/>
```

**Props:**
- `variant`: 'outlined' | 'filled' | 'standard'
- `color`: 'primary' | 'secondary'
- `fullWidth`: boolean
- `error`: boolean
- `helperText`: string
- `label`: string
- `options`: SelectOption[]

#### Slider
Range slider with value display.

```tsx
import { Slider } from 'ascent-ui-library';

<Slider
  label="Volume"
  min={0}
  max={100}
  value={volume}
  onChange={(e) => setVolume(Number(e.target.value))}
  showValue
  marks
/>
```

**Props:**
- `color`: 'primary' | 'secondary'
- `label`: string
- `showValue`: boolean
- `marks`: boolean
- `valueLabelDisplay`: 'on' | 'auto' | 'off'

### Display Components

#### Text / Label
Typography component with multiple variants.

```tsx
import { Text } from 'ascent-ui-library';

<Text variant="h1">Heading 1</Text>
<Text variant="body1" color="textSecondary">
  Body text
</Text>
```

**Props:**
- `variant`: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'caption' | 'overline'
- `color`: 'primary' | 'secondary' | 'textPrimary' | 'textSecondary' | 'error'
- `align`: 'left' | 'center' | 'right' | 'justify'
- `gutterBottom`: boolean
- `noWrap`: boolean
- `component`: keyof JSX.IntrinsicElements

#### Image
Image component with variants and loading states.

```tsx
import { Image } from 'ascent-ui-library';

<Image
  src="/path/to/image.jpg"
  alt="Description"
  variant="rounded"
  elevation={2}
  objectFit="cover"
/>
```

**Props:**
- `variant`: 'rounded' | 'circular' | 'square'
- `elevation`: 0 | 1 | 2 | 3
- `objectFit`: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down'
- `fallback`: React.ReactNode
- `showLoading`: boolean

### Action Components

#### Button
Button component with ripple effect and multiple variants.

```tsx
import { Button } from 'ascent-ui-library';

<Button
  variant="contained"
  color="primary"
  size="medium"
  startIcon={<PlusIcon />}
  onClick={handleClick}
>
  Add Item
</Button>
```

**Props:**
- `variant`: 'contained' | 'outlined' | 'text'
- `color`: 'primary' | 'secondary' | 'error' | 'success' | 'warning'
- `size`: 'small' | 'medium' | 'large'
- `fullWidth`: boolean
- `startIcon`: React.ReactNode
- `endIcon`: React.ReactNode
- `disableRipple`: boolean

#### ButtonGroup
Group of buttons displayed together.

```tsx
import { ButtonGroup, Button } from 'ascent-ui-library';

<ButtonGroup variant="outlined" color="primary">
  <Button>One</Button>
  <Button>Two</Button>
  <Button>Three</Button>
</ButtonGroup>
```

**Props:**
- `variant`: 'contained' | 'outlined' | 'text'
- `color`: 'primary' | 'secondary' | 'error' | 'success' | 'warning'
- `size`: 'small' | 'medium' | 'large'
- `orientation`: 'horizontal' | 'vertical'
- `fullWidth`: boolean
- `disabled`: boolean

## Theming

The library uses Tailwind CSS and can be customized through your `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          // Your primary color palette
          500: '#2196f3',
          600: '#1e88e5',
          // ...
        },
        secondary: {
          // Your secondary color palette
          500: '#e91e63',
          600: '#d81b60',
          // ...
        },
      },
    },
  },
}
```

## Development

### Building the Library

```bash
npm install
npm run build
```

### Development Mode

```bash
npm run dev
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

For issues and questions, please open an issue on GitHub.
