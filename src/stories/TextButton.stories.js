// Libraries
import { action } from "@storybook/addon-actions";

// Stylesheet
import '../index.scss';

// Components
import TextButton from "../components/TextButton";

export default {
  title: "TextButton",
  component: TextButton,
};

export const Clickable = () => (
  <TextButton secondary
    onClick={action("Button clicked")}
  >
    Clickable
  </TextButton>
);