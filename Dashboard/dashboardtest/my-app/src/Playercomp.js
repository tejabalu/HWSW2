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
							src: "https://515group2-usea.streaming.media.azure.net/3c231927-a882-4110-b15d-8629be3482b8/1adf32ae-9dc8-45ff-bbc0-5cba72bfb1f6.ism/manifest(format=m3u8-cmaf)",
							type: "application/vnd.ms-sstr+xml",
						},
					]}
				/>
			</Box>
		);
	}
}

export default PlayerApp;
