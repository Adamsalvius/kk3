import axios from "axios";
import { atom } from "recoil";

const productsState = atom({
  key: "ProductsState",
  default: [],
  effects: [
    ({ setSelf }) => {
      axios
        .get("https://k4backend.osuka.dev/products")
        .then((res) => setSelf(res.data))
       ;
    },
  ],
});

export default productsState;
