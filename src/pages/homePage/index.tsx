import { useState, useEffect } from "react";
import {
	Button,
	Description,
	Grid,
	ImageContainer,
	ModalContent,
	Paragraph,
} from "./styles";
import { Container } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import { NtfCard } from "../../components/ntfCard";
import { AppNav,AppFooter, CustomButton, ModalComp, Paginate } from "../../components";
import { useGetAllNftsQuery, useGetSingleNftQuery } from "../../store/ntfApi";

export const HomePage = () => {
	const [key, setKey] = useState("");
	const [pageNumber, setPageNumber] = useState(1);
	const [showModal, setShowModal] = useState(false);
	const [displayNumber, setDisplayNumber] = useState(0);
	const [blockChainAddress, setBlockChainAddress] = useState("eth-main");
	// const { data: allNFTs, isLoading } = useGetAllNftsQuery(blockChainAddress);
	// const { data: singleNtfData } = useGetSingleNftQuery(key);

	// all block-chain address
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

	const TotalPages = Math.ceil(allNFTs?.total ?? 0) / 25;

	return (
		<div>
			<AppNav />
			<Container>
				<div className="d-flex flex-column gap-5 mt-5 mb-5">
					<div className="d-flex align-items-center gap-3">
						<div className="d-flex align-items-center  flex-wrap gap-4">
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
						{isLoading ? (
							<Spinner animation="border" />
						) : (
							<>
								{allNFTs?.results?.map((item: any, index: number) => (
									<NtfCard
										key={index}
										image={item?.image_url}
										title={item?.name}
										onClick={() => {
											setKey(item.key);
											setShowModal(true);
										}}
									/>
								))}
							</>
						)}
					</Grid>
					<Paginate
						noOfPages={TotalPages}
						pageNo={pageNumber}
						setPageNumber={setPageNumber}
					/>
				</div>
			</Container>
			<AppFooter />

			<ModalComp
				show={showModal}
				handleClose={() => setShowModal(false)}
				close={true}
				centered
				className="mx-lg-4"
				modalTitle={singleNtfData?.name}
				modalBody={
					<ModalContent>
						<ImageContainer>
							<img src={singleNtfData?.image_url} alt="NFT" />
						</ImageContainer>
						<Description className="my-3">
							{singleNtfData?.description}
						</Description>
						<div className="d-flex justify-content-between align-items-center my-3">
							<Paragraph>{`Total minted: ${singleNtfData?.stats?.total_minted}`}</Paragraph>
							<Paragraph>{`Total Sales: ${singleNtfData?.stats?.total_sales}`}</Paragraph>
						</div>
						<div className="d-flex justify-content-between align-items-center pb-3">
							<Paragraph>{`Total supply: ${singleNtfData?.stats?.total_supply}`}</Paragraph>
							<Paragraph>{`Total volume: ${singleNtfData?.stats?.total_volume}`}</Paragraph>
						</div>
						<div className="d-flex justify-content-between align-items-center my-3">
							<Button onClick={() => setShowModal(false)}>Cancel</Button>
							<Button status="buy">
								<a href={singleNtfData?.exchange_url} target="blank">
									Buy
								</a>
							</Button>
						</div>
					</ModalContent>
				}
			/>
		</div>
	);
};
