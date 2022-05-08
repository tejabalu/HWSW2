import { getDatabase, ref, get, onValue } from "firebase/database";
import firebaseApp from "../firebase.config";
import { useEffect, useState } from "react";
import { Image, Box } from "@chakra-ui/react";

const db = getDatabase(firebaseApp);
var flirImageColored = ref(db, "coloredFLIRImage");

const useData = () => {
	const [data, setData] = useState([]);
	get(flirImageColored).then((snapshot) => {
		setData(snapshot.val());
	});
	useEffect(() => {
		onValue(flirImageColored, (snapshot) => {
			setData(snapshot.val());
		});
	}, []);
	return data;
};

export const ColoredFLIRImage = () => {
	const data = useData();
	return (
		<Box>
			<Image
				src={"data:image/png;base64, " + data.toString()}
				htmlHeight="500px"
				htmlWidth="500px"
			/>
		</Box>
	);
};

export default ColoredFLIRImage;
