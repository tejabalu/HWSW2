import { getDatabase, ref, get, onValue } from "firebase/database";
import firebaseApp from "../firebase.config";
import { useEffect, useState } from "react";
import { Image, Box } from "@chakra-ui/react";

const db = getDatabase(firebaseApp);
var flirImage = ref(db, "FLIRImage");

const useData = () => {
	const [data, setData] = useState([]);
	get(flirImage).then((snapshot) => {
		setData(snapshot.val());
	});
	useEffect(() => {
		onValue(flirImage, (snapshot) => {
			setData(snapshot.val());
		});
	}, []);
	return data;
};

export const FLIRImage = () => {
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

export default FLIRImage;
