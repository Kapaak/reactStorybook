import React from "react";
import { addDecorator } from "@storybook/react";
import Center from "../src/components/Center/Center";

addDecorator(story => <Center>{story()}</Center>); //pridam komponent Center vsem stories

export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	options: {
		storySort: (a, b) =>
			a[1].kind === b[1].kind
				? 0
				: a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
	},
};