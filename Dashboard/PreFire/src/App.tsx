import * as React from "react";
import {
	ChakraProvider,
	Box,
	VStack,
	Grid,
	theme,
	Heading,
	HStack,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import Flamesensor from "./Flamesensor";
import FLIRImage from "./components/FLIRImage";
import OpticalImage from "./components/OpticalImage";
import ColoredFLIRImage from "./components/ColoredFLIRImage";

export const App = () => (
	<ChakraProvider theme={theme}>
		<Box textAlign="center" fontSize="xl">
			<Grid minH="100vh" p={3}>
				{/* <ColorModeSwitcher justifySelf="flex-end" /> */}
				<VStack paddingTop={8} spacing={8}>
					<Flamesensor />
					<Heading as="h1" size="lg" mb={4}>
						Live feed from the Optical and Thermal sensor:
					</Heading>
					<HStack>
						<OpticalImage />
						<FLIRImage />
						<ColoredFLIRImage />
					</HStack>
				</VStack>
			</Grid>
		</Box>
	</ChakraProvider>
);

export default App;
