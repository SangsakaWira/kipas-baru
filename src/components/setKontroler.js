import axios from "axios";
import React from "react";
import { Alert, Button } from "react-bootstrap";
import Layout from "./layout";
import Websocket from "react-websocket";

class setKontroler extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      kipas: 0,
      suhu: 0,
      color: ""
    };

    this.onClickHidupkan = this.onClickHidupkan.bind(this);
    this.onClickMatikan = this.onClickMatikan.bind(this);
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  getData(response) {
    if (this.state.suhu !== response.data.suhu) {
      this.setState({ suhu: response.data.suhu });
    } else if (this.state.kipas !== response.data.kipas) {
      this.setState({ kipas: response.data.kipas });
    }
  }

  async onClickHidupkan() {
    const response = await axios.get(
      "https://y78v1-3000.sse.codesandbox.io" + "/1" + "/" + this.state.suhu
    );

    this.setState({ kipas: response.data.kipas });
  }

  async onClickMatikan() {
    const response = await axios.get(
      "https://y78v1-3000.sse.codesandbox.io" + "/0" + "/" + this.state.suhu
    );

    this.setState({ kipas: response.data.kipas });
  }

  render() {
    return (
      <Layout>
        <Websocket
          url='https://y78v1-3000.sse.codesandbox.io'
          onMessage={this.getData.bind(this)}
        />
        <Alert variant='secondary'>
          <Alert.Heading>Kondisi Kipas: {this.state.kipas}</Alert.Heading>
          <p>Ingin menghidupkan atau mematikan Kipas?</p>
          <hr />
          <Button variant='success' onClick={this.onClickHidupkan}>
            Hidupkan
          </Button>
          <Button
            style={{ marginLeft: "20px" }}
            variant='danger'
            onClick={this.onClickMatikan}
          >
            Matikan
          </Button>
        </Alert>
      </Layout>
    );
  }
}

export default setKontroler;
