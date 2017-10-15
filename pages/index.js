// @flow

// #region imports
import { PureComponent }  from 'react';
import Layout             from '../components/layout/Layout';
import Header             from '../components/header/Header';
import Jumbotron          from 'react-bootstrap/lib/Jumbotron';
// #endregion

// #region flow types
type Props = any;
type State = any;
// #endregion

class Index extends PureComponent<Props, State> {
  // #region component lifecycle methods
  render() {
    return (
      <Layout>
        <Header />
        <div
          className="container-fluid"
        >
          <Jumbotron>
            <h1>
              Next JS + React + Redux + Bootstrap STARTER
            </h1>
          </Jumbotron>
        </div>
      </Layout>
    );
  }
  // #endregion
}

export default Index;
