import * as React from 'react';
import * as classNames from 'classnames';
import { Link } from 'react-router-dom'

export namespace Header {
  export interface Props {
    //toto
  }

  export interface State {
    /* empty */
  }
}

export class Header extends React.Component<Header.Props, Header.State> {

  render() {
    return (
      <header className="header">
        <span>This is header</span>
        <nav>
          <ul>
            <li><Link to='/news'>News</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
          </ul>
        </nav>
      </header>
    );
  }
}
