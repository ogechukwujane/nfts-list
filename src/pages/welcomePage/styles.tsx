import styled from "styled-components";
import { colors } from "../../components";

export const Wrapper = styled.div`
	width: 100%;
	height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
	background: ${colors.primaryColor};

`;
export const Title = styled.p`
	font-size: 60px;
	font-weight: 600;
    color: ${colors.white2};
    animation: slideInFromBottom 2s ease-in-out;
	@keyframes slideInFromBottom {
		0% {
            margin-bottom: -50vh;
			/* transform: translateY(50vh); */
			opacity:0;
		}
		100% {
            margin: 0px;
			/* transform: translateY(0px); */
			opacity:1;
		}
	}
`;
