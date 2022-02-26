// import propTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { TableRow } from './TableRow.js';


// TODO --- REFACTOR THIS TO TAKE THE COLUMN NAMES AND FIELD REFS AS A PROP SO ANY TYPE OF TABLE BODY CAN BE CREATED....
export function TableBody(props){

  const data = props.data;
  const columns = props.columns;

  return(
    <>
      {data &&
        data.map((data, key) => (

          <TableRow key={key} columns={columns} data={data}/>

        ))
      }
    </>
  )
}