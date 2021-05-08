// Libraries
import { action } from '@storybook/addon-actions';

// Stylesheet
import '../index.scss';

// Components
import AnimatedButton from '../components/AnimatedButton/AnimatedButton';

export default {
  title: 'AnimatedButton',
  component: AnimatedButton,
};

export const Clickable = () => (
  <AnimatedButton secondary onClick={action('Button clicked')}>
    Clickable
  </AnimatedButton>
);

export const Disabled = () => (
  <AnimatedButton disabled>Disabled</AnimatedButton>
);
