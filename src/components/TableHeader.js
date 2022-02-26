// import propTypes from 'prop-types';
import { useEffect, useState } from 'react';

export function TableHeader(props){
  
  const columns = props.columns;
  const sortState = props.sortState;

  function sortTable(event) {
    const col = event.target.dataset['col'];
    props.handleSortColumnChange(col);
  }

  return(
    <>
      <div className="grid grid-flow-col grid-cols-11 gap-x-2 py-3 px-8 border-b border-stone-200 bg-white rounded text-gray-800 header-row">
        {columns &&
        columns.map((column, key) => (
          <span key={key} className={column.classNames} data-col={column.name} onClick={sortTable}>
            {column.label}<img className={`inline-block ml-2 ${sortState.column == column.name ? 'inline' : 'hidden'} ${sortState.direction == 'dsc' ? 'rotate-180' : ''}`} src={require('../assets/caret-down.png')} height="15" width="15"/>
          </span>
        ))}
      </div>
    </>
  )
}