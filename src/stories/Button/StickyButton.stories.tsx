import { ComponentStory, ComponentMeta } from "@storybook/react";
import HeroStickyButton from "../../components/HeroStickyButton/HeroStickyButton";

export default {
  title: "Hero Sticky",
  component: HeroStickyButton,
} as ComponentMeta<typeof HeroStickyButton>;

export const HeroStickyButtonStory: ComponentStory<typeof HeroStickyButton> =
  () => <HeroStickyButton />;
