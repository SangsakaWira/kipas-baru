import axios from "axios";
import { Nav, Container, Alert, Button } from "react-bootstrap";
import React from "react";

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lampu: 0,
      suhu: 0
    };
    this.setKontrol = this.setKontrol.bind(this);
    this.setMonitor = this.setMonitor.bind(this);
    this.setOtomatis = this.setOtomatis.bind(this);
  }

  componentDidMount() {
    axios
      .get(
        "https://www.trafficnet.id/sensor/getById/5d3158dfe57bce652711d4cc",
        {}
      )
      .then(response => {
        // console.log(response.data);
        this.setState({
          lampu: response.data.status,
          status_halaman: 0
        });
      });
  }

  componentDidUpdate() {
    axios
      .get("https://www.trafficnet.id/sensor/getById/5d3158dfe57bce652711d4cc")
      .then(response => {
        // console.log(response.data);
        this.setState({
          suhu: response.data.status
        });
      });
  }

  setKontrol() {}

  setMonitor() {}

  setOtomatis() {}

  render() {
    return (
      <div className="App">
        <Nav fill variant="tabs" defaultActiveKey="/home">
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
          <Alert variant="success">
            <Alert.Heading>Suhu: {this.state.suhu}</Alert.Heading>
            <Alert.Heading>Kondisi Kipas: {this.state.lampu}</Alert.Heading>
            <p>Masih ingin menghidupkan Kipas?</p>
            <hr />
            <Button variant="success">Yes</Button>
            <Button style={{ marginLeft: "20px" }} variant="danger">
              No
            </Button>
          </Alert>
        </Container>
      </div>
    );
  }
}

export default App;
