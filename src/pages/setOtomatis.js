import React from "react";
import { Alert } from "react-bootstrap";
import { connect } from "redux-zero/react";
import Layout from "../components/layout";
import actions from "../service/action.js";

const mapToProps = ({ kipas, suhu }) => ({
  kipas,
  suhu
});

class setOtomatis extends React.Component {
  componentDidMount() {
    this.props.setKipas();
    this.props.setSuhu();
    this.props.hidupkanKipas();
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
    if (suhu >= 50) {
      this.props.matikanKipas();
    }
  }

  render() {
    return (
      <Layout>
        <Alert variant='primary'>
          <Alert.Heading>Mode Otomatis diaktifkan</Alert.Heading>
          <p>
            Mode otomatis adalah mode dimana pada saat suhu diatas 50 akan
            mematikan kipas secara otomatis
          </p>
        </Alert>
      </Layout>
    );
  }
}

export default connect(
  mapToProps,
  actions
)(setOtomatis);
