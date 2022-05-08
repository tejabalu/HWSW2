import { Box, ChakraProvider, theme } from "@chakra-ui/react";
import { Component } from "react";
import { AzureMP } from "react-azure-mp";

class PlayerApp extends Component {
	render() {
		return (
			<ChakraProvider theme={theme}>
				<Box width={"60vw"} transform={`rotate(180deg)`}>
					<AzureMP
						src={[
							{
								src: "https://515group2-usea.streaming.media.azure.net/3bd3b1a5-4a47-403f-9e05-82cf34383255/ae2eb6bb-4d86-4520-9042-3730ee237f4a.ism/manifest(format=m3u8-cmaf)",
								type: "application/vnd.ms-sstr+xml",
							},
						]}
					/>
				</Box>
			</ChakraProvider>
		);
	}
}

export default PlayerApp;
