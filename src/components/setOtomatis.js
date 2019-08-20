import axios from "axios";
import React from "react";
import { Alert } from "react-bootstrap";
import Layout from "./layout";

class setOtomatis extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      kipas: 0,
      suhu: 0
    };
  }

  componentDidMount() {
    axios.get("https://y78v1-3000.sse.codesandbox.io").then(response => {
      console.log(response.data);
      this.setState({
        kipas: response.data.kipas,
        suhu: response.data.suhu
      });
    });
  }

  componentDidUpdate() {
    axios.get("https://y78v1-3000.sse.codesandbox.io").then(response => {
      console.log(response.data);
      this.setState({
        kipas: response.data.kipas,
        suhu: response.data.suhu
      });
    });
  }

  render() {
    return (
      <Layout>
        <Alert variant='primary'>
          <Alert.Heading>Mode Otomatis diaktifkan</Alert.Heading>
          <p>
            Mode otomatis adalah mode dimana pada saat suhu diatas 50 akan
            menghidupkan kipas secara otomatis
          </p>
        </Alert>
      </Layout>
    );
  }
}

export default setOtomatis;
