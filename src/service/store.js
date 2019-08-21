import createStore from "redux-zero";

const initialState = {
  kipas: "",
  loading_kipas: true,
  suhu: 0,
  loading_suhu: true,
  status: "",
  message: ""
};

const store = createStore(initialState);

export default store;
