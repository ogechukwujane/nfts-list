import styled from "styled-components";
import { colors } from "../../components";

export const ContentContainer = styled.div`
	min-height: calc(100vh - 200px);
`
export const Grid = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	column-gap: 20px;
	row-gap: 20px;
`;
export const ModalContent = styled.div``;
export const ImageContainer = styled.div`
	width: 100%;
	height: 250px;
	background: ${colors.lightGray};
	overflow: hidden;
	object-fit: contain;
	img {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}
`;
export const Description = styled.p`
	font-size: 1em;
	line-height: 18px;
	font-weight: 500;
	color: ${colors.gray};
`;
export const Paragraph = styled.p`
	font-size: 1.1em;
	font-weight: 500;
	color: ${colors.gray};
	width: 50%;
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
	a{
		text-decoration: none;
		color: ${colors.primaryColor};
	}
	&:hover{
		transform: scale(1.05);
	}
`;
export const PaginationContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;
export const PaginationButton = styled.button`
	border: none;
	background: ${colors.gray};
	color: ${colors.white};
	padding: 8px 10px;
	border-radius: 5px;
	cursor: pointer;
	:hover {
		background: ${colors.primaryColor};
		cursor: pointer;
	}
`;
export const PageNumber = styled.span`
	font-size: 1em;
	font-weight: 600;
	line-height: 16px;
	padding: 10px 12px;
	color: ${colors.primaryColor};
`;