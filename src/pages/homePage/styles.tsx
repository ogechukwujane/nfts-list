import styled from "styled-components";
import { colors } from "../../components";

export const Grid = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	column-gap: 20px;
	row-gap: 20px;
`;
export const Text = styled.p`
	font-size: 1.3em;
	font-weight: 500;
	line-height: 21px;
`;
export const ModalContent = styled.div``;
export const ImageContainer = styled.div`
	width: 100%;
	height: 250px;
	background: red;
	overflow: hidden;
	img {
		width: 100%;
	}
`;
export const Description = styled.p`
	font-size: 1.1em;
	font-weight: 500;
	color: ${colors.black};
`;
export const Paragraph = styled.p`
	font-size: 1.1em;
	font-weight: 500;
	color: ${colors.gray};
`;
export const Button = styled.button<{ status?: string }>`
	font-size: 1.2em;
	font-weight: 600;
	color: ${colors.black};
	border: none;
	padding: 10px 15px;
	border-radius: 8px;
	background: ${(prop) => (prop.status === "buy" ? colors.lightGray : colors.cancelColor)};
	color: ${(prop) => (prop.status === "buy" ? colors.primaryColor : colors.white)};
`;
