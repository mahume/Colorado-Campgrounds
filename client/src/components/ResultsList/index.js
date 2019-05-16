import React from 'react';
import ResultsItem from '../ResultsItem';

function ResultsList() {
  return (
    <ul className="list-group">
      <ResultsItem />
      <ResultsItem />
      <ResultsItem />
      <ResultsItem />
    </ul>
  )
}

export default ResultsList;