import { Container } from "react-bootstrap";
import styled from "styled-components";
import { colors } from "../colors";

export const AppFooter = () => {
	const date = new Date().getFullYear();
	return (
		<Wrapper>
			<Container>
				<div className="d-flex align-item-center justify-content-center">
					<FooterText>
						<i>&copy; Onyejekwe Ogechukwu {date}</i>
					</FooterText>
				</div>
			</Container>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	background: ${colors.primaryColor};
	padding: 10px 0px;
	border-bottom: 0px;
	z-index: 100;
`;
const FooterText = styled.p`
	font-size: 0.7em;
	font-weight: 500;
	color: ${colors.white2};
`;
