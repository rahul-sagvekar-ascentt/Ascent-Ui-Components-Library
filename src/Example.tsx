import React, { useState } from 'react';
import {
  Input,
  TextField,
  Textarea,
  Checkbox,
  Radio,
  Switch,
  Select,
  Slider,
  Text,
  Image,
  Button,
  ButtonGroup,
} from './index';

const ExampleApp: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [textFieldValue, setTextFieldValue] = useState('');
  const [checked, setChecked] = useState(false);
  const [selectedRadio, setSelectedRadio] = useState('option1');
  const [switchValue, setSwitchValue] = useState(false);
  const [selectValue, setSelectValue] = useState('');
  const [sliderValue, setSliderValue] = useState(50);

  const selectOptions = [
    { value: '', label: 'Select an option' },
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  return (
    <div className="p-8 max-w-4xl mx-auto space-y-8">
      {/* Typography */}
      <section>
        <Text variant="h3" gutterBottom>Typography</Text>
        <div className="space-y-2">
          <Text variant="h1">Heading 1</Text>
          <Text variant="h2">Heading 2</Text>
          <Text variant="h3">Heading 3</Text>
          <Text variant="h4">Heading 4</Text>
          <Text variant="h5">Heading 5</Text>
          <Text variant="h6">Heading 6</Text>
          <Text variant="subtitle1">Subtitle 1</Text>
          <Text variant="subtitle2">Subtitle 2</Text>
          <Text variant="body1">Body 1 - Lorem ipsum dolor sit amet</Text>
          <Text variant="body2">Body 2 - Lorem ipsum dolor sit amet</Text>
          <Text variant="caption">Caption text</Text>
          <Text variant="overline">Overline text</Text>
        </div>
      </section>

      {/* Inputs */}
      <section>
        <Text variant="h3" gutterBottom>Input Components</Text>
        
        <div className="space-y-4">
          <Input
            label="Basic Input"
            placeholder="Enter text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            fullWidth
          />

          <Input
            label="Outlined Input"
            variant="outlined"
            placeholder="Outlined variant"
            fullWidth
          />

          <Input
            label="Filled Input"
            variant="filled"
            placeholder="Filled variant"
            fullWidth
          />

          <Input
            label="Standard Input"
            variant="standard"
            placeholder="Standard variant"
            fullWidth
          />

          <Input
            label="Error Input"
            variant="outlined"
            error
            helperText="This field has an error"
            fullWidth
          />
        </div>
      </section>

      {/* TextField */}
      <section>
        <Text variant="h3" gutterBottom>TextField</Text>
        
        <div className="space-y-4">
          <TextField
            label="Email"
            type="email"
            placeholder="example@email.com"
            value={textFieldValue}
            onChange={(e) => setTextFieldValue(e.target.value)}
            fullWidth
          />

          <TextField
            label="Password"
            type="password"
            variant="filled"
            fullWidth
          />

          <TextField
            label="With Start Adornment"
            startAdornment={
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            }
            fullWidth
          />

          <TextField
            label="With End Adornment"
            endAdornment={
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            }
            fullWidth
          />
        </div>
      </section>

      {/* Textarea */}
      <section>
        <Text variant="h3" gutterBottom>Textarea</Text>
        
        <div className="space-y-4">
          <Textarea
            label="Comments"
            placeholder="Enter your comments..."
            minRows={4}
            fullWidth
          />

          <Textarea
            label="Error Textarea"
            variant="outlined"
            error
            helperText="This field is required"
            fullWidth
          />
        </div>
      </section>

      {/* Checkboxes */}
      <section>
        <Text variant="h3" gutterBottom>Checkbox</Text>
        
        <div className="space-y-2">
          <Checkbox
            label="Primary Checkbox"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          />
          <Checkbox label="Secondary Checkbox" color="secondary" />
          <Checkbox label="Disabled Checkbox" disabled />
          <Checkbox label="Disabled Checked" disabled checked />
        </div>
      </section>

      {/* Radio */}
      <section>
        <Text variant="h3" gutterBottom>Radio Buttons</Text>
        
        <div className="space-y-2">
          <Radio
            label="Option 1"
            name="radio-group"
            value="option1"
            checked={selectedRadio === 'option1'}
            onChange={(e) => setSelectedRadio(e.target.value)}
          />
          <Radio
            label="Option 2"
            name="radio-group"
            value="option2"
            checked={selectedRadio === 'option2'}
            onChange={(e) => setSelectedRadio(e.target.value)}
          />
          <Radio
            label="Option 3"
            name="radio-group"
            value="option3"
            checked={selectedRadio === 'option3'}
            onChange={(e) => setSelectedRadio(e.target.value)}
          />
          <Radio label="Disabled" disabled />
        </div>
      </section>

      {/* Switch */}
      <section>
        <Text variant="h3" gutterBottom>Switch</Text>
        
        <div className="space-y-2">
          <Switch
            label="Primary Switch"
            checked={switchValue}
            onChange={(e) => setSwitchValue(e.target.checked)}
          />
          <Switch label="Secondary Switch" color="secondary" />
          <Switch label="Disabled Switch" disabled />
          <Switch label="Disabled Checked" disabled checked />
        </div>
      </section>

      {/* Select */}
      <section>
        <Text variant="h3" gutterBottom>Select / Dropdown</Text>
        
        <div className="space-y-4">
          <Select
            label="Country"
            options={selectOptions}
            value={selectValue}
            onChange={(e) => setSelectValue(e.target.value)}
            fullWidth
          />

          <Select
            label="Filled Select"
            variant="filled"
            options={selectOptions}
            fullWidth
          />

          <Select
            label="Standard Select"
            variant="standard"
            options={selectOptions}
            fullWidth
          />
        </div>
      </section>

      {/* Slider */}
      <section>
        <Text variant="h3" gutterBottom>Slider</Text>
        
        <div className="space-y-6">
          <Slider
            label="Volume"
            value={sliderValue}
            onChange={(e) => setSliderValue(Number((e.target as HTMLInputElement).value))}
            showValue
            marks
          />

          <Slider
            label="Temperature"
            color="secondary"
            min={0}
            max={100}
            step={10}
            valueLabelDisplay="on"
          />

          <Slider
            label="Disabled Slider"
            disabled
            value={30}
          />
        </div>
      </section>

      {/* Image */}
      <section>
        <Text variant="h3" gutterBottom>Image</Text>
        
        <div className="grid grid-cols-3 gap-4">
          <Image
            src="https://via.placeholder.com/300"
            alt="Square image"
            variant="square"
            elevation={1}
            className="w-full h-48"
          />
          <Image
            src="https://via.placeholder.com/300"
            alt="Rounded image"
            variant="rounded"
            elevation={2}
            className="w-full h-48"
          />
          <Image
            src="https://via.placeholder.com/300"
            alt="Circular image"
            variant="circular"
            elevation={3}
            className="w-48 h-48"
          />
        </div>
      </section>

      {/* Buttons */}
      <section>
        <Text variant="h3" gutterBottom>Buttons</Text>
        
        <div className="space-y-4">
          <div className="flex gap-2 flex-wrap">
            <Button>Primary</Button>
            <Button color="secondary">Secondary</Button>
            <Button color="error">Error</Button>
            <Button color="success">Success</Button>
            <Button color="warning">Warning</Button>
            <Button disabled>Disabled</Button>
          </div>

          <div className="flex gap-2 flex-wrap">
            <Button variant="outlined">Outlined</Button>
            <Button variant="outlined" color="secondary">Secondary</Button>
            <Button variant="outlined" color="error">Error</Button>
          </div>

          <div className="flex gap-2 flex-wrap">
            <Button variant="text">Text</Button>
            <Button variant="text" color="secondary">Secondary</Button>
            <Button variant="text" color="error">Error</Button>
          </div>

          <div className="flex gap-2 flex-wrap items-center">
            <Button size="small">Small</Button>
            <Button size="medium">Medium</Button>
            <Button size="large">Large</Button>
          </div>

          <div className="flex gap-2 flex-wrap">
            <Button
              startIcon={
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              }
            >
              With Start Icon
            </Button>
            <Button
              endIcon={
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              }
            >
              With End Icon
            </Button>
          </div>

          <Button fullWidth>Full Width Button</Button>
        </div>
      </section>

      {/* Button Groups */}
      <section>
        <Text variant="h3" gutterBottom>Button Groups</Text>
        
        <div className="space-y-4">
          <ButtonGroup>
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </ButtonGroup>

          <ButtonGroup variant="outlined" color="secondary">
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </ButtonGroup>

          <ButtonGroup orientation="vertical">
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </ButtonGroup>
        </div>
      </section>
    </div>
  );
};

export default ExampleApp;
