import axios from "axios";
import React from "react";
import { Nav, Container, Alert } from "react-bootstrap";

import "./styles.css";

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

  async getData() {
    let response = await axios.get("https://y78v1-3000.sse.codesandbox.io");
    console.log(response.data);
    this.setState({
      kipas: response.data.kipas,
      suhu: response.data.suhu
    });
    if (parseInt(response.data.suhu) <= 30) {
      // console.log("Aman");
      this.setState({
        status: "success",
        message: "Aman"
      });
    } else if (
      parseInt(response.data.suhu) >= 30 &&
      parseInt(response.data.suhu) <= 50
    ) {
      this.setState({
        status: "warning",
        message: "Warning"
      });
    } else {
      // console.log("Bahaya");
      this.setState({
        status: "danger",
        message: "Bahaya"
      });
    }
  }

  async componentDidUpdate() {
    this.getData();
  }

  render() {
    return (
      <div className="App">
        <Nav fill variant="tabs" defaultActiveKey="/monitor">
          <Nav.Item>
            <Nav.Link href="/kontrol">Kontrol Kipas</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/monitor">Monitoring Kipas</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/otomatis">Mode Otomatis</Nav.Link>
          </Nav.Item>
        </Nav>
        <Container style={{ marginTop: "20px" }}>
          <Alert variant={this.state.status}>
            <Alert.Heading>Suhu: {this.state.suhu}</Alert.Heading>
            <Alert.Heading>Kondisi Kipas: {this.state.kipas}</Alert.Heading>
            <p>
              Kipas dan suhu yang ada di ruangan ini berada pada kondisi
              <b> {this.state.message}</b>
            </p>
          </Alert>
        </Container>
      </div>
    );
  }
}
