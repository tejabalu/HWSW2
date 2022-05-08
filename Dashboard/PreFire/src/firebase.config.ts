import { initializeApp } from "firebase/app";

const firebaseConfig = {
	apiKey: "AIzaSyB2X_DtE7VAPHkQ9ujLYgqKnmyDZOD2kkg",
	authDomain: "hardware-software-2.firebaseapp.com",
	databaseURL: "https://hardware-software-2-default-rtdb.firebaseio.com",
	projectId: "hardware-software-2",
	storageBucket: "hardware-software-2.appspot.com",
	messagingSenderId: "846875868847",
	appId: "1:846875868847:web:40249255fcf617d5c61e5a",
	measurementId: "G-KZ37DLBGLS",
};

const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;
