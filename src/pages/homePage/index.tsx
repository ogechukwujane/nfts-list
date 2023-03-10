import { useState, useEffect } from "react";
import {
	Button,
	Description,
	Grid,
	ImageContainer,
	ModalContent,
	Paragraph,
	Text,
} from "./styles";
import { Container } from "react-bootstrap";
import { AppNav, CustomButton, ModalComp } from "../../components";
import { NtfCard } from "../../components/ntfCard";
import { useGetAllNftsQuery } from "../../store/ntfApi";

export const HomePage = () => {
	const [showModal, setShowModal] = useState(false);
	const [displayNumber, setDisplayNumber] = useState(0);
	const [blockChainAddress, setBlockChainAddress] = useState("eth-main");
	// const {
	// 	data: allNFTs,
	// 	isLoading,
	// 	error,
	// } = useGetAllNftsQuery(blockChainAddress);
	// console.log("allNFTs", allNFTs);
	// console.log("isLoading", isLoading);
	// console.log("error", error);

	//all block-chain address
	const blockChains = [
		"eth-main",
		"arbitrum-main",
		"optimism-main",
		"poly-main",
		"eth-goerli",
	];

	useEffect(() => {
		if (displayNumber < 5) {
			let interval = setTimeout(() => {
				setDisplayNumber((prev) => prev + 1);
			}, 0.05 * 1000);
			return () => clearTimeout(interval);
		}
	}, [displayNumber]);

	return (
		<div>
			<AppNav />
			<Container>
				<div className="d-flex flex-column gap-5 mt-5 mb-5">
					<div className="d-flex align-items-center gap-3">
						<div className="d-flex align-items-center  flex-wrap gap-4">
							{/* <Text>Address List:</Text> */}
							{blockChains.map((item: string, index: number) => (
								<CustomButton
									key={index}
									onClick={() => setBlockChainAddress(item)}
									btnText={item}
									isActive={item === blockChainAddress}
									isDisplayed={displayNumber >= index}
								/>
							))}
						</div>
					</div>

					<Grid>
						{/* {allNFTs?.results?.map((item: any, index: number) => (
							<NtfCard
                            key={index}
								image={item?.image_url}
								title={item?.name}
                                onClick={() => setShowModal(true)}
							/>
						))} */}
						<NtfCard title="NTF Card" onClick={() => setShowModal(true)} />
						<NtfCard title="NTF Card" />
						<NtfCard title="NTF Card" />
						<NtfCard title="NTF Card" />
						<NtfCard title="NTF Card" />
					</Grid>
				</div>
			</Container>

			<ModalComp
				show={showModal}
				handleClose={() => setShowModal(false)}
				close={true}
				centered
                className="mx-lg-4"
				modalTitle="Name here"
				modalBody={
					<ModalContent>
						<ImageContainer>img</ImageContainer>
						<Description className="my-3">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
							sit incidunt cumque quidem est hic voluptatem soluta, blanditiis
							eligendi fuga laudantium? Dolore nemo dolorem dignissimos nam
							dolorum aperiam architecto totam?
						</Description>
						<div className="d-flex justify-content-between align-items-center my-2">
							<Paragraph>Total minted:</Paragraph>
							<Paragraph>Total Sales:</Paragraph>
						</div>
						<div className="d-flex justify-content-between align-items-center pb-3">
							<Paragraph>Total supply:</Paragraph>
							<Paragraph>Total volume: </Paragraph>
						</div>
						<div className="d-flex justify-content-between align-items-center my-3">
							<Button>Cancel</Button>
							<Button status="buy">Buy</Button>
						</div>
					</ModalContent>
				}
			/>
		</div>
	);
};
