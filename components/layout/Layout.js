// @flow

// #region imports
import { PureComponent }  from 'react';
import Head               from 'next/head';
// #endregion

// #region flow types
type Props = {
  children: ReactElement
}

type State = any;
// #endregion

class Layout extends PureComponent<Props, State> {
  render() {
    const { children } = this.props;

    return (
      <div>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1"
          />
          <meta
            charSet="utf-8"
          />
          <link
            rel="stylesheet"
            href="static/css/bootstrap.min.css"
          />
        </Head>
        <style
          jsx
          global
        >
          {`
            body {
            }

            .navbar {
              border-radius: 0;
            }
          `}
        </style>
        {children}
      </div>
    );
  }
}

export default Layout;
