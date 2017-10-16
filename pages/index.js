// @flow

// #region imports
import { PureComponent }      from 'react';
import { bindActionCreators } from 'redux';
import withRedux              from 'next-redux-wrapper';
import configureStore         from '../redux/store/configureStore.dev';
import Layout                 from '../components/layout/Layout';
import Header                 from '../components/header/Header';
import Jumbotron              from 'react-bootstrap/lib/Jumbotron';
import * as fakeFetchActions  from '../redux/modules/fakeModuleWithFetch';
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

type InitialProps = {
  req: any,
  res: any,
  pathname: string,
  query: any,
  asPath: string,
  isServer: boolean,
  store?: any,
  ...any
}
// #endregion

class Index extends PureComponent<Props, State> {
  // #region props initialization
  static getInitialProps = async ({
    isServer,
    store
  }: InitialProps) => {
    const SIDE = isServer ? 'SERVER SIDE' : 'FRONT SIDE';

    try {
      const response = await store.dispatch(fakeFetchActions.fakeFetchIfNeeded());
      const {
        payload: {
          data
        }
      } = response;
      // NOTE: you will see this log in your server console (where you `npm run dev`):
      /* eslint-disable no-console */
      console.log(`${SIDE} - fake fetch result: `, data);
    } catch (error) {
      console.error(`${SIDE} - fake fetch failed: `, error);
      /* eslint-enable no-console */
    }
  };
  // #endregion

  // #region component lifecycle methods
  async componentDidMount() {
    const {
      fakeFetchIfNeeded
    } = this.props;

    try {
      const response = await fakeFetchIfNeeded();
      const {
        payload: {
          data
        }
      } = response;
      // NOTE: you will see this log in your browser console:
      /* eslint-disable no-console */
      console.log('FRONT SIDE - fake fetch result: ', data);
    } catch (error) {
      console.error('FRONT SIDE - fake fetch failed: ', error);
      /* eslint-enable no-console */
    }
  }

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
