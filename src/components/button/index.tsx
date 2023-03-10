import styled from "styled-components";
import { colors } from "../colors";

export const CustomButton = ({
	btnText,
	isActive,
	isDisplayed,
	onClick,
}: {
	btnText: string;
	isActive: boolean;
	isDisplayed: boolean;
	onClick?: () => void;
}) => {
	return (
		<Button onClick={onClick} isActive={isActive} display={isDisplayed}>
			{btnText}
		</Button>
	);
};

const Button = styled.button<{ isActive: boolean; display: boolean }>`
	font-size: 1.2em;
	font-weight: 500;
	color: ${(props) => (props.isActive ? colors.primaryColor : colors.gray)};
	background: ${colors.white};
	padding: 5px 10px;
	border-radius: 5px;
	box-shadow: 1px 1px 5px 1px rgba(78, 70, 70, 0.4);
	border: none;
	position: relative;
	display: ${(props) => (props.display ? "block" : "none")};
	animation: slideInFromBottom 0.3s ease-in-out;
	@keyframes slideInFromBottom {
		0% {
			transform: translateY(50px);
			opacity: 0;
		}
		100% {
			transform: translateY(0px);
			opacity: 1;
		}
	}
	&:hover {
		font-weight: 600;
		color: ${colors.primaryColor};
	}
`;
