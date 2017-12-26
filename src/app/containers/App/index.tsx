import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { RootState } from '../../reducers';
import { Header, Footer } from '../../components/layout';

export namespace App {
  export interface Props extends RouteComponentProps<void> {
    /* empty */
  }

  export interface State {
    /* empty */
  }
}

@connect(mapStateToProps, mapDispatchToProps)
export class App extends React.Component<App.Props, App.State> {

  render() {
    return (
      <div className="wrapper">
        <Header />
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state: RootState) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}
