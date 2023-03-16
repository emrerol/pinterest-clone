import { ComponentStory, ComponentMeta } from "@storybook/react";
import HeaderButton, {
  BUTTON_TEXT,
  BUTTON_TYPES,
} from "../../components/Button/Button";

export default {
  title: "HeaderButtons",
  component: HeaderButton,
} as ComponentMeta<typeof HeaderButton>;

export const LoginButtonStory: ComponentStory<typeof HeaderButton> = () => (
  <HeaderButton text={BUTTON_TEXT.login} buttonType={BUTTON_TYPES.login} />
);

export const RegisterButtonStory: ComponentStory<typeof HeaderButton> = () => (
  <HeaderButton
    text={BUTTON_TEXT.register}
    buttonType={BUTTON_TYPES.register}
  />
);
