import React from 'react';
import OptionsPage from './components/OptionsPage';
import ResultsPage from './components/ResultsPage';
import { connect } from 'react-redux';

const App = (props) => {
  return (
    <div>
    { !props.isShowResults && <OptionsPage /> }
    { props.isShowResults && <ResultsPage /> }
    </div>
  );
}

const mapStateToProps = state => ({
  isShowResults: state.results.isShowResults,
});

export default connect(mapStateToProps)(App);