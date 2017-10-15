// @flow

// #region imports
import { PureComponent }  from 'react';
import Layout             from '../components/layout/Layout'
import Header             from '../components/header/Header';
import Button             from 'react-bootstrap/lib/Button';
import Router             from 'next/router';
// #endregion

// #region flow types
type Props = any;
type State = any;
// #endregion

class Page2 extends PureComponent<Props, State> {
  // #region component lifecycle methods
  render() {
    return (
      <Layout>
        <Header />
        <h2>
          Page2 here
        </h2>
        <Button
          bsStyle="primary"
          onClick={this.goBackHome}
        >
          go back home
        </Button>
      </Layout>
    );
  }
  // #endregion

  // #region html elements events
  goBackHome = (
    event: SyntheticEvent<>
  ): void => {
    if (event) {
      event.preventDefault();
    }

    Router.push('/');
  }
  // #endregion
}

export default Page2;
