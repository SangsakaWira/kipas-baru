import axios from "axios";
import React from "react";
import { Nav, Container, Alert } from "react-bootstrap";

import "./styles.css";

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
      <div className="App">
        <Nav fill variant="tabs" defaultActiveKey="/otomatis">
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
          <Alert variant="primary">
            <Alert.Heading>Mode Otomatis diaktifkan</Alert.Heading>
            <p>
              Mode otomatis adalah mode dimana pada saat suhu diatas 50 akan
              menghidupkan kipas secara otomatis
            </p>
          </Alert>
        </Container>
      </div>
    );
  }
}

export default setOtomatis;
