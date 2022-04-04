import { atom } from "recoil";

const authState = atom({
	key: "authState",
	default:
		 {
		token: null,
		user: 
		{ role: null },
	},
});

export default authState;
