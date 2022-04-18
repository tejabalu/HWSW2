import { Heading, Box } from "@chakra-ui/react";
import { Component } from "react";
import { AzureMP } from "react-azure-mp";

class PlayerApp extends Component {
	render() {
		return (
			<Box width={"60vw"}>
				{/* head title */}
				<Heading as="h1" size="lg" mb={4}>
					Live feed from Raspberry Pi:
				</Heading>
				<AzureMP
					src={[
						{
							src: "https://515group2-usea.streaming.media.azure.net/735f7a25-0caf-46d5-893f-69f04cc48eea/08a1361e-f5a6-43bf-8a33-6bd35d859664.ism/manifest(format=m3u8-cmaf)",
							type: "application/vnd.ms-sstr+xml",
						},
					]}
				/>
			</Box>
		);
	}
}

export default PlayerApp;
