import axios from "axios";
import React from "react";
import { Nav, Container, Alert, Button } from "react-bootstrap";

import "./styles.css";

class setKontroler extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      kipas: 0,
      suhu: 0,
      color:""
    };

    this.onClickHidupkan = this.onClickHidupkan.bind(this);
    this.onClickMatikan = this.onClickMatikan.bind(this);
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    // Use manual listener since BE does not support automatic data injection (websocket)
    // TODO: use websocket connection instead
    setInterval(() => {
      this.getData()
    }, 500) // check every 0.5 ms
  }

  async getData() {
    const response = await axios.get("https://y78v1-3000.sse.codesandbox.io")
    if (this.state.suhu !== response.data.suhu) {
      this.setState({ suhu: response.data.suhu })
    }
  }

  async onClickHidupkan() {
    const response = await axios.get(
      "https://y78v1-3000.sse.codesandbox.io" + "/1" + "/" + this.state.suhu
    )

    this.setState({ kipas: response.data.kipas })
  }

  async onClickMatikan() {
    const response = await axios.get(
      "https://y78v1-3000.sse.codesandbox.io" + "/0" + "/" + this.state.suhu
    )

    this.setState({ kipas: response.data.kipas })
  }

  render() {
    return (
      <div className="App">
        <Nav fill variant="tabs" defaultActiveKey="/kontrol">
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
          <Alert variant="secondary">
            <Alert.Heading>Kondisi Kipas: {this.state.kipas}</Alert.Heading>
            <p>Ingin menghidupkan atau mematikan Kipas?</p>
            <hr />
            <Button variant="success" onClick={this.onClickHidupkan}>
              Hidupkan
            </Button>
            <Button
              style={{ marginLeft: "20px" }}
              variant="danger"
              onClick={this.onClickMatikan}
            >
              Matikan
            </Button>
          </Alert>
        </Container>
      </div>
    );
  }
}

export default setKontroler;
