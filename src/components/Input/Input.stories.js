import React from "react";
import Input from "./Input";

export default {
	title: "Form/Input",
	component: Input,
};

// export const Small = () => {
// 	return <Input variant="small">Small</Input>;
// };
// export const Medium = () => {
// 	return <Input variant="medium">Medium</Input>;
// };
// export const Large = () => {
// 	return <Input variant="large">Large</Input>;
// };

const Template = args => <Input {...args} />;

export const Small = Template.bind({});
Small.args = {
	variant: "small",
	children: "Small",
};
export const Medium = Template.bind({});
Medium.args = {
	variant: "medium",
	children: "medium",
};
export const Large = Template.bind({});
Large.args = {
	variant: "large",
	children: "large",
};
Small.storyName = "Small Input";
