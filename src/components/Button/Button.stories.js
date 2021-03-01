import React from "react";
import Button from "./Button";
import Center from "../Center/Center";

export default {
	title: "Form/Button", //kdyz bych dal Title:Button , tka by to byl separate file
	component: Button,
	decorators: [story => <Center>{story()}</Center>],
	args: {
		children: "button",
	},
};
//misto toho, abych vsechno obaloval Center komponentem, udelam decorator
// export const Primary = () => {
// 	return (
// 		<Center>
// 			<Button variant="primary">Primary</Button>;
// 		</Center>
// 	);
// };

// export const Primary = () => {
// 	return <Button variant="primary">Primary</Button>;
// };
// export const Secondary = () => {
// 	return <Button variant="secondary">Secondary</Button>;
// };
// export const Success = () => {
// 	return <Button variant="success">Success</Button>;
// };
// export const Danger = () => {
// 	return <Button variant="danger">Danger</Button>;
// };

const Template = args => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	variant: "primary",
	// children: "Primary Args",
};
export const Secondary = Template.bind({});
Secondary.args = {
	variant: "secondary",
	// children: "Secondary Args",
};

export const Success = Template.bind({});
Success.args = {
	variant: "success",
};
export const Danger = Template.bind({});
Danger.args = {
	variant: "danger",
};

export const LongPrimaryA = Template.bind({});
LongPrimaryA.args = {
	...Primary.args,
	// children: "Long Primary Args",
};
