// @flow

// #region imports
import { PureComponent }      from 'react';
import { bindActionCreators } from 'redux';
import withRedux              from 'next-redux-wrapper';
import configureStore         from '../redux/store/configureStore.dev';
import Layout                 from '../components/layout/Layout';
import Header                 from '../components/header/Header';
import Jumbotron              from 'react-bootstrap/lib/Jumbotron';
import fakeFetchActions       from '../redux/modules/fakeModuleWithFetch';
// #endregion

// #region flow types
type Props = {
  // fakeModuleWithFetch:
  isFetching: boolean;
  fakeData: any,
  fakeFetchIfNeeded: () => Promise<any>,
  ...any
};
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

// #region redux state and dispatch map to props
const mapStateToProps = (
  state: any
) => ({
  // fakeModuleWithFetch:
  isFetching: state.fakeModuleWithFetch.isFetching,
  fakeData:   state.fakeModuleWithFetch.data
});

const mapDispatchToProps = (
  dispatch: (...any) => any
) => {
  return {
    ...bindActionCreators(
      {
        // fakeModuleWithFetch:
        ...fakeFetchActions
      },
      dispatch)
  };
};
// #endregion

export default withRedux(
  configureStore,
  mapStateToProps,
  mapDispatchToProps
)(Index);
