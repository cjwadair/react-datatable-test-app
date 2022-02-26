// import propTypes from 'prop-types';
import { useEffect, useState } from 'react';
import {formatDisplayValue } from './utils.js';


// TODO --- REFACTOR THIS TO TAKE THE COLUMN NAMES AND FIELD REFS AS A PROP SO ANY TYPE OF TABLE BODY CAN BE CREATED....
export function TableRow(props){

  const data = props.data;
  const columns = props.columns;

  return(
    <>
      <div className="grid grid-flow-col gap-x-2 grid-cols-11 py-4 mx-4 px-4 border-b border-stone-200 items-center">            
        {columns &&
          columns.map((column, key) => (
            
            <span key={key} className={column.classNames}>
              {formatDisplayValue(data[column.name], column.display, column.precision)}
            </span>
          ))
        }
      </div>
    </>
  )


}
