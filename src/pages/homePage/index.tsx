import {
	Button,
	ContentContainer,
	Description,
	Grid,
	ImageContainer,
	ModalContent,
	PageNumber,
	PaginationButton,
	PaginationContainer,
	Paragraph,
} from "./styles";
import { AppNav, AppFooter, CustomButton, ModalComp } from "../../components";
import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import { NtfCard } from "../../components/ntfCard";
import { useGetAllNftsQuery, useGetSingleNftQuery } from "../../store/ntfApi";

export const HomePage = () => {
	let paginationArray: string[] = [];
	const [ntfkey, setNtfKey] = useState("");
	const [pageNumber, setPageNumber] = useState(1);
	const [showModal, setShowModal] = useState(false);
	const [displayButton, setDisplayButton] = useState(0);
	const [getNextDataParam, setGetNextDataParam] = useState("");
	const [blockChainAddress, setBlockChainAddress] = useState("eth-main");
	const nftQueryParam = {
		blockChainAddress: blockChainAddress,
		getNextDataParam: getNextDataParam,
	};
	const {
		data: allNFTs,
		isLoading,
		isFetching,
	} = useGetAllNftsQuery(nftQueryParam);
	const { data: singleNtfData } = useGetSingleNftQuery(ntfkey);

	// all block-chain address/categories
	const blockChains = [
		"eth-main",
		"arbitrum-main",
		"optimism-main",
		"poly-main",
		"eth-goerli",
	];

	useEffect(() => {
		if (displayButton < 5) {
			let interval = setTimeout(() => {
				setDisplayButton((prev) => prev + 1);
			}, 0.05 * 1000);
			return () => clearTimeout(interval);
		}
	}, [displayButton]);

	//pagination functions
	const TotalPages = Math.ceil(allNFTs?.total ?? 0) / 25;
	const handleShowPrevPage = () => {
		if (pageNumber !== 1) {
			setGetNextDataParam(paginationArray[pageNumber - 1]);
			setPageNumber(pageNumber - 1);
		}
	};
	const handleShowNextPage = () => {
		if (pageNumber < TotalPages) {
			setPageNumber(pageNumber + 1);
			setGetNextDataParam(allNFTs?.cursor);
			paginationArray.push(allNFTs?.cursor);
		}
	};

	return (
		<div>
			<AppNav />
			<Container>
				<ContentContainer className="d-flex flex-column gap-5 mt-5 mb-5">
					<div className="d-flex align-items-center gap-3">
						<div className="d-flex align-items-center  flex-wrap gap-4">
							{blockChains.map((item: string, index: number) => (
								<CustomButton
									key={index}
									onClick={() => setBlockChainAddress(item)}
									btnText={item}
									isActive={item === blockChainAddress}
									isDisplayed={displayButton >= index}
								/>
							))}
						</div>
					</div>

					<Grid>
						{isLoading || isFetching ? (
							<div className="d-flex align-items-center justify-content-center w-100">
								<Spinner animation="border" />
							</div>
						) : (
							<>
								{allNFTs?.results?.map((item: any, index: number) => (
									<NtfCard
										key={index}
										image={item?.image_url}
										title={item?.name}
										onClick={() => {
											setNtfKey(item.key);
											setShowModal(true);
										}}
									/>
								))}
							</>
						)}
					</Grid>

					{/* pagination: The pagination was made simple because of the way the endpoint allows fetching of paginated data */}
					{allNFTs?.results?.length && (
						<PaginationContainer className="mt-5 gap-2">
							<PaginationButton onClick={handleShowPrevPage}>
								Prev
							</PaginationButton>
							<PageNumber>{pageNumber}</PageNumber>
							<PaginationButton onClick={handleShowNextPage}>
								Next
							</PaginationButton>
						</PaginationContainer>
					)}
				</ContentContainer>
			</Container>
			<AppFooter />

			{/* pop up modal */}
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
