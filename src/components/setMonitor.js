import React from "react";
import { Alert, Spinner } from "react-bootstrap";
import Layout from "./layout";
import { connect } from "redux-zero/react";
import actions from "../service/action.js";

const mapToProps = ({
  kipas,
  loading_kipas,
  suhu,
  loading_suhu,
  status,
  message
}) => ({
  kipas,
  loading_kipas,
  suhu,
  loading_suhu,
  status,
  message
});

class setMonitor extends React.Component {
  componentDidMount() {
    this.props.setKipas();
    this.props.setSuhu();
    this.cekKondisiSuhu(this.props.suhu);

    this.dataListener = setInterval(() => {
      this.props.setSuhu();
      this.cekKondisiSuhu(this.props.suhu);
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.dataListener);
  }

  cekKondisiSuhu(suhu) {
    if (suhu <= 30) {
      this.props.gantiStatus({
        status: "success",
        message: "Aman"
      });
    } else if (suhu >= 30 && suhu <= 50) {
      this.props.gantiStatus({
        status: "warning",
        message: "Warning"
      });
    } else {
      this.props.gantiStatus({
        status: "danger",
        message: "Bahaya"
      });
    }
  }

  render() {
    return (
      <Layout>
        <Alert variant={this.props.status}>
          <Alert.Heading>
            Suhu:{" "}
            {this.props.loading_suhu ? (
              <Spinner animation='border' role='status' size='sm'>
                <span className='sr-only'>Loading...</span>
              </Spinner>
            ) : (
              this.props.suhu
            )}
          </Alert.Heading>
          <Alert.Heading>
            Kondisi Kipas:{" "}
            {this.props.loading_kipas ? (
              <Spinner animation='border' role='status' size='sm'>
                <span className='sr-only'>Loading...</span>
              </Spinner>
            ) : (
              this.props.kipas
            )}
          </Alert.Heading>
          <p>
            Kipas dan suhu yang ada di ruangan ini berada pada kondisi
            <b> {this.props.message}</b>
          </p>
        </Alert>
      </Layout>
    );
  }
}

export default connect(
  mapToProps,
  actions
)(setMonitor);
