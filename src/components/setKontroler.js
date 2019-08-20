import React from "react";
import { Alert, Button, Spinner } from "react-bootstrap";
import Layout from "./layout";
import { connect } from "redux-zero/react";
import actions from "../service/action.js";
import { styles } from "./styles";

const mapToProps = ({ kipas, loading_kipas }) => ({
  kipas,
  loading_kipas
});

class setKontroler extends React.Component {
  componentDidMount() {
    this.props.setKipas();
  }

  render() {
    return (
      <Layout>
        <Alert variant='secondary'>
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
          <p>Ingin menghidupkan atau mematikan Kipas?</p>
          <hr />
          <Button variant='success' onClick={this.props.hidupkanKipas}>
            Hidupkan
          </Button>
          <Button
            style={styles.secondaryButton}
            variant='danger'
            onClick={this.props.matikanKipas}
          >
            Matikan
          </Button>
        </Alert>
      </Layout>
    );
  }
}

export default connect(
  mapToProps,
  actions
)(setKontroler);
