import { Grid } from "./styles";
import { Container } from "react-bootstrap";
import { AppNav } from "../../components";
import { NtfCard } from "../../components/ntfCard";

export const HomePage = () => {
	return (
		<div>
			<AppNav />
			<Container>
                <div className="my-5">
                <Grid>
					<NtfCard title="NTF Card"/>
					<NtfCard title="NTF Card"/>
					<NtfCard title="NTF Card"/>
					<NtfCard title="NTF Card"/>
					<NtfCard title="NTF Card"/>
					<NtfCard title="NTF Card"/>
				</Grid>
                </div>
				
			</Container>
		</div>
	);
};
