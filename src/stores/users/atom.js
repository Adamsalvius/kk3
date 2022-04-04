import axios from "axios";
import { atom } from "recoil";

const usersState = atom({
	key: "UsersState",
	default: [],
	effects: [
		({ setSelf }) => {
			axios
				.get("https://k4backend.osuka.dev/users")
				.then((res) => setSelf(res.data))
				.catch((err) => console.log(err));
		},
	],
});

export default usersState;
