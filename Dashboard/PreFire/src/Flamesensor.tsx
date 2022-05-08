import { getDatabase, ref, get, onValue } from "firebase/database";
import firebaseApp from "./firebase.config";
import { useEffect, useState } from "react";
import {
	ChakraProvider,
	Divider,
	Heading,
	Text,
	theme,
} from "@chakra-ui/react";

const db = getDatabase(firebaseApp);
var test = ref(db, "firedetection");

// react hooks should only be called in functional components
const useData = () => {
	const [data, setData] = useState([]);
	get(test).then((snapshot) => {
		setData(snapshot.val());
	});
	useEffect(() => {
		onValue(test, (snapshot) => {
			console.log(snapshot.val());
			setData(snapshot.val());
		});
	}, []);
	return data;
};

export const Flamesensor = () => {
	const data = useData();
	return (
		<ChakraProvider theme={theme}>
			<Heading>
				<Text fontSize="4xl">Fire Detection Dashboard</Text>
			</Heading>
			<Divider />
			<Text fontSize="3xl" fontWeight="bold">
				Fire Sensor: {data}
			</Text>
		</ChakraProvider>
	);
};

export default Flamesensor;
