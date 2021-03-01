import React from "react";
import "./Input.css";

const Input = ({ variant = "small", children, ...rest }) => {
	return (
		<>
			<input type="text" className={`input ${variant}`} {...rest} />
			{children}
		</>
	);
};

export default Input;
