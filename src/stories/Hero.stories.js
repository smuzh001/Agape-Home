import React from "react";

import HeroComp from "../components/Hero";
import QuickReserveComp from "../components/QuickReserve";

export default {
  title: "Home",
};

const heroTemplate = (args) => <HeroComp {...args} />;
const quickReserveTemplate = (args) => <QuickReserveComp {...args} />;

export const Hero = heroTemplate.bind({});
Hero.args = {
  user: {},
};

export const QuickReserve = quickReserveTemplate.bind({});
