// @flow

// #region imports
import Link               from 'next/link';
import Navbar             from 'react-bootstrap/lib/Navbar';
import Nav                from 'react-bootstrap/lib/Nav';
import NavItem            from 'react-bootstrap/lib/NavItem';
import NavDropdown        from 'react-bootstrap/lib/NavDropdown';
import MenuItem           from 'react-bootstrap/lib/MenuItem';
import { PureComponent }  from 'react';
// #endregion

// #region flow types
type Props = any;
type State = any;
// #endregion

class Header extends PureComponent<Props, State> {
  render() {
    return (
      <Navbar
        collapseOnSelect
        fluid
      >
        <Navbar.Header>
          <Navbar.Brand>
            <a
              href="#"
            >
              react-redux-next-bootstrap starter
            </a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav
            pullRight
          >
            <Link
              prefetch
              href="/page1"
            >
              <NavItem
                eventKey={1}
                href="#"
              >
                Page1
              </NavItem>
            </Link>
            <Link
              prefetch
              href="/page2"
            >
              <NavItem
                eventKey={2}
                href="#"
              >
                Page 2
              </NavItem>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;

