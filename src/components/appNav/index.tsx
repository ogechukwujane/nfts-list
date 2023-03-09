import { Container } from "react-bootstrap";
import styled from "styled-components";
import { colors } from "../colors";

export const AppNav = () => {
	return (
		<Wrapper>
			<Container>
				<div className="d-flex align-item-center">
					<NavTitle>NFTsList</NavTitle>
				</div>
			</Container>
		</Wrapper>
	);
};
const Wrapper = styled.div`
	background: ${colors.primaryColor};
	box-shadow: 0px 2px 0px 2px rgba(60, 155, 117, 0.75);
    padding: 10px 0px;
	position: sticky;
	top: 0px;
	z-index: 100;
`;
const NavTitle = styled.p`
	font-size: 1.8em;
	font-weight: 700;
	color: ${colors.white2};
`;
