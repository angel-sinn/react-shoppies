// Libraries
import { action } from "@storybook/addon-actions";

// Stylesheet
import '../index.scss';

// Components
import Button from "../components/AnimatedButton";

export default {
  title: "Button",
  component: Button,
};

export const Clickable = () => (
  <Button secondary
    onClick={action("Button clicked")}
  >
    Clickable
  </Button>
);

export const Disabled = () => (
  <Button disabled>
    Disabled
  </Button>
);