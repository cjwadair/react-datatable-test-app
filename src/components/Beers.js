import {Button} from './Button.js';
import {Input} from './Input.js';
import { DataTable } from './DataTable.js';
import {FilterBar} from './FilterBar.js';
import { useState, useEffect } from 'react';
import {beerData} from '../data/beer_data.js';
import {formatData} from '../data/formatter.js';

export function Beers(){

  const data = formatData(beerData);

  const [searchTerm, setSearchTerm] = useState('');
  
  function setSearch(newValue) {
    setSearchTerm(newValue);
  }

  const columns = [
    {
      label:'Description',
      name: "name",
      classNames: "col-span-2",
    },
    {
      label:'Brewer',
      name: "brewer",
      classNames: "col-span-2",
    },
    {
      label:'ID',
      name: "product_id",
    },
    {
      label:'Category',
      name: "category",
    },
    {
      label:'Type',
      name: "type",
    },
    {
      label:'Size',
      name: "size",
    },
    {
      label:'Country',
      name: "country",
    },
    {
      label:'Alc by Vol',
      name: "abv",
      display: "percentage",
      classNames: "text-right"
    },
    {
      label:'Price',
      name: "price",
      display: "currency",
      classNames: "text-right"
    }
  ]

  return(
    <>
        
      <div className="sticky top-0 bg-white pt-4"> 
        <FilterBar className="flex mx-6 py-4 px-4 bg-indigo-50 border border-indigo-100 rounded">
          <div className="flex-grow">
            <Input placeholder="Search" onChange={setSearch} />
          </div>
          <div className="mr-2 last:mr-0">
            <Button label="Print" className="mr-1"/>
            <Button label="Download"/>
          </div>
        </FilterBar>
        
        <DataTable data={data} columns={columns} filter={searchTerm} itemsPerPage={25}/>

      </div>

    </>
  )
}