import * as React from "react";
import {
	ChakraProvider,
	Box,
	Text,
	VStack,
	Grid,
	theme,
	Heading,
	Divider,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { get, getDatabase, ref } from "firebase/database";
import firebaseApp from "./firebase.config";
import { useState } from "react";
import PlayerApp from "./Playercomp";

const db = getDatabase(firebaseApp);
const test = ref(db, "firedetection");

// react hooks should only be called in functional components
const useData = () => {
	const [data, setData] = useState("");
	get(test).then((snapshot) => {
		setData(snapshot.val());
	});
	return data;
};

export const App = () => (
	<ChakraProvider theme={theme}>
		<Box textAlign="center" fontSize="xl">
			<Grid minH="100vh" p={3}>
				<ColorModeSwitcher justifySelf="flex-end" />
				<VStack spacing={8}>
					<Heading>
						<Text fontSize="4xl">Fire Detection Dashboard</Text>
					</Heading>
					<Divider />
					<Text fontSize="3xl" fontWeight="bold">
						Fire Sensor: {useData()}
					</Text>
					<PlayerApp />
				</VStack>
			</Grid>
		</Box>
	</ChakraProvider>
);
