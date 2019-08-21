import axios from "axios";

const getKipasStatus = data_kipas => (data_kipas ? "Hidup" : "Mati");

const mapActions = store => ({
  setKipas: async state => {
    const response = await axios.get("https://y78v1-3000.sse.codesandbox.io");
    store.setState({
      kipas: getKipasStatus(parseInt(response.data.kipas)),
      loading_kipas: false
    });
  },
  setSuhu: async state => {
    const response = await axios.get("https://y78v1-3000.sse.codesandbox.io");
    if (state.loading_suhu) {
      store.setState({ loading_suhu: false });
    }
    if (state.suhu !== parseInt(response.data.suhu)) {
      store.setState({
        suhu: parseInt(response.data.suhu),
        loading_suhu: false
      });
    }
  },
  hidupkanKipas: async state => {
    store.setState({ loading_kipas: true });
    if (state.kipas === "hidup") {
      return store.setState({ loading_kipas: false });
    }
    const response = await axios.get(
      "https://y78v1-3000.sse.codesandbox.io" + "/1" + "/" + state.suhu
    );
    store.setState({
      kipas: getKipasStatus(parseInt(response.data.kipas)),
      loading_kipas: false
    });
  },
  matikanKipas: async state => {
    store.setState({ loading_kipas: true });
    if (state.kipas === "mati") {
      return store.setState({ loading_kipas: false });
    }
    const response = await axios.get(
      "https://y78v1-3000.sse.codesandbox.io" + "/0" + "/" + state.suhu
    );
    store.setState({
      kipas: getKipasStatus(parseInt(response.data.kipas)),
      loading_kipas: false
    });
  },
  gantiStatus: (state, payload) => {
    store.setState({
      status: payload.status,
      message: payload.message
    });
  }
});

export default mapActions;
