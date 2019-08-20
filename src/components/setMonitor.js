import axios from "axios";
import React from "react";
import { Alert } from "react-bootstrap";
import Layout from "./layout";
import Websocket from "react-websocket";

export default class setMonitor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      kipas: 0,
      suhu: 0,
      status: "success",
      message: "Aman"
    };
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  getData(response) {
    if (this.state.suhu !== response.data.suhu) {
      this.setState({ suhu: response.data.suhu });
      this.cekKondisiSuhu(response.data.suhu);
    } else if (this.state.kipas !== response.data.kipas) {
      this.setState({ kipas: response.data.kipas });
    }
  }

  cekKondisiSuhu(suhu) {
    if (parseInt(suhu) <= 30) {
      // console.log("Aman");
      this.setState({
        status: "success",
        message: "Aman"
      });
    } else if (parseInt(suhu) >= 30 && parseInt(suhu) <= 50) {
      this.setState({
        status: "warning",
        message: "Warning"
      });
    } else {
      this.setState({
        status: "danger",
        message: "Bahaya"
      });
    }
  }

  render() {
    return (
      <Layout>
        <Websocket
          url='https://y78v1-3000.sse.codesandbox.io'
          onMessage={this.getData.bind(this)}
        />
        <Alert variant={this.state.status}>
          <Alert.Heading>Suhu: {this.state.suhu}</Alert.Heading>
          <Alert.Heading>Kondisi Kipas: {this.state.kipas}</Alert.Heading>
          <p>
            Kipas dan suhu yang ada di ruangan ini berada pada kondisi
            <b> {this.state.message}</b>
          </p>
        </Alert>
      </Layout>
    );
  }
}
