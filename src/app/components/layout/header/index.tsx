import * as React from 'react';
import * as classNames from 'classnames';

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
      <footer className="footer">
        <span>This is header</span>
      </footer>
    );
  }
}
