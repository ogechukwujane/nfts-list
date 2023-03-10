import styled from "styled-components";
import { Modal } from "react-bootstrap";
import { FC } from "react";
import { colors } from "../colors";

export type IModalComp = {
	show?: any;
	handleClose?: any;
	modalTitle?: any;
	modalBody?: any;
	close?: any;
	size?: any;
	centered?: any;
	className?: string;
};

export const ModalComp: FC<IModalComp> = ({
	show,
	handleClose,
	modalTitle,
	modalBody,
	close,
	size,
	centered,
	className,
}) => {
	return (
		<Styled>
			<div>
				<Modal
					show={show}
					onHide={handleClose}
					centered={centered}
					size={size}
					aria-labelledby="example-modal-sizes-title-sm"
				>
					{close && (
						<Modal.Header closeButton className={`border-0 mx-lg-4 pb-0`}>
							{modalTitle && (
								<Modal.Title>
									<Header>{modalTitle}</Header>
								</Modal.Title>
							)}
						</Modal.Header>
					)}

					<Modal.Body className={className}>{modalBody}</Modal.Body>
				</Modal>
			</div>
		</Styled>
	);
};

const Styled = styled.div`
	.modal-header {
		display: none !important;
	}
`;
const Header = styled.p`
	font-weight: 600;
	font-size: 1.5em;
	line-height: 24px;
	color: ${colors.black};
`;
