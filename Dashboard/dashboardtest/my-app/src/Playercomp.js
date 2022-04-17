import { Heading, Box } from "@chakra-ui/react";
import { Component } from "react";
import Player from "./Player";

class PlayerApp extends Component {
	render() {
		const sourceVideo = {
			src: "//amssamples.streaming.mediaservices.windows.net/91492735-c523-432b-ba01-faba6c2206a2/AzureMediaServicesPromo.ism/manifest",
			type: "application/vnd.ms-sstr+xml",
		};

		return (
			<Box width={"60vw"}>
				{/* head title */}
				<Heading as="h1" size="lg" mb={4}>
					Live feed from Raspberry Pi:
				</Heading>
				<Player sourceVideo={sourceVideo} />
			</Box>
		);
	}
}

export default PlayerApp;
