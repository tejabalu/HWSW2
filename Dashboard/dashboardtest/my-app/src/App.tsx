import * as React from "react";
import {
	ChakraProvider,
	Box,
	VStack,
	Grid,
	theme,
	Heading,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import PlayerApp from "./Playercomp";
import Flamesensor from "./Flamesensor";

export const App = () => (
	<ChakraProvider theme={theme}>
		<Box textAlign="center" fontSize="xl">
			<Grid minH="100vh" p={3}>
				<ColorModeSwitcher justifySelf="flex-end" />
				<VStack spacing={8}>
					<Flamesensor />
					<Heading as="h1" size="lg" mb={4}>
						Live feed from Raspberry Pi:
					</Heading>
					<PlayerApp />
				</VStack>
			</Grid>
		</Box>
	</ChakraProvider>
);

export default App;
