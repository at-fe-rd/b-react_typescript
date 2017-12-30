import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Router, Route, RouteComponentProps } from 'react-router'
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
          <Route path='/contact' component={Contact} />
          <Route path='/news' component={News} />
        <Footer />
      </div>
    );
  }
}

const Contact = () => <h1>We are located at 555 Jackson St.</h1>
const News = () => <h1>Hello from News</h1>

function mapStateToProps(state: RootState) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}
