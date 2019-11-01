import React from 'react';
//import components
import OptionsPage from './components/options/OptionsPage';
import ResultsPage from './components/results/ResultsPage';
//import redux
import { connect } from 'react-redux';

const App = props => {
  return <div>{!props.isShowResults ? <OptionsPage /> : <ResultsPage />}</div>;
};

const mapStateToProps = state => ({
  isShowResults: state.results.isShowResults
});

export default connect(mapStateToProps)(App);
