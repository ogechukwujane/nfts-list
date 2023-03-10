import { useState, useEffect } from "react";
import { Grid } from "./styles";
import { Container } from "react-bootstrap";
import { AppNav, CustomButton } from "../../components";
import { NtfCard } from "../../components/ntfCard";
import { useGetAllNftAddressQuery } from "../../store/nftAddressApi";

export const HomePage = () => {
	const [displayNumber, setDisplayNumber] = useState(0);
    
	// const {
	// 	data: allNftAddress,
	// 	isLoading,
	// 	isSuccess,
	// 	error,
	// } = useGetAllNftAddressQuery();
	// console.log("allNftAddress", allNftAddress);
	// console.log("isLoading", isLoading);
	// console.log("isSuccess", isSuccess);
	// console.log("error", error);

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
				<div className="d-flex flex-column gap-5 mt-4 mb-5">
					{/* {allNftAddress?.results?.slice(3,5).map((item,index)=>{
                        <button >{item?.name}</button>
                    })} */}
					<div className="d-flex flex-wrap gap-4">
						<CustomButton btnText="tesx" isActive={true} isDisplayed={true} />
					</div>
					<Grid>
						<NtfCard title="NTF Card" />
						<NtfCard title="NTF Card" />
						<NtfCard title="NTF Card" />
						<NtfCard title="NTF Card" />
						<NtfCard title="NTF Card" />
						<NtfCard title="NTF Card" />
					</Grid>
				</div>
			</Container>
		</div>
	);
};
