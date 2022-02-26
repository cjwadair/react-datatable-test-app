import { useEffect, useState } from 'react';
import {TableBody} from './tableBody.js';
import {TableHeader} from './tableHeader.js';
import ReactPaginate from 'react-paginate';

export function DataTable(props){

  const data = props.data;
  const columns = props.columns;
  
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [paginateKey, setPaginateKey] = useState(0);

  const [sortState, setSortState] = useState({
    column: columns[0].name,
    direction: 'asc',
    sortType: columns[0].sortType || 'alpha'
  });

  function sortTable(col){
    const direction = setSortDirection(col);
    setSortState({
      column: col,
      direction: direction
    });
  }

  function setSortDirection(col){
    if(col == sortState.column){
      return sortState.direction == 'asc' ? 'dsc' : 'asc';
    } else{
      return sortState.direction
    }
  }
  
  const itemsPerPage = props.itemsPerPage

  const filterValue = props.filter;
  
  useEffect(() => {
    setItemOffset(0);
    setCurrentPage(0);
    setPaginateKey(Math.random());
  }, [filterValue, sortState])
  
  useEffect(() => {
    
    let colValue = sortState.column;
    let dirValue = sortState.direction;
    
    const endOffset = itemOffset + itemsPerPage;

    const items = data
    .filter((item) => {
      return(Object.values(item).join(" ").toLowerCase().includes(filterValue.toLowerCase()));
    })
    .sort((a, b) => {
      
      let valA = a[colValue];
      let valB = b[colValue];

      if(sortState.sortType == 'numeric'){
        valA = parseInt(valA);
        valB = parseInt(valB);
      }

      if(a[colValue] < b[colValue]){
        return(dirValue == 'asc' ? -1 : 1);
      } 
      if(a[colValue] > b[colValue]){
        return(dirValue == 'asc' ? 1 : -1);
      } 
      if(a[colValue] == b[colValue]){
        return 0
      } 
    });

    const itemCount = items.length;

    setCurrentItems(
      items.slice(itemOffset, endOffset)
    );

    setPageCount(Math.ceil(itemCount / itemsPerPage));

  }, [itemOffset, itemsPerPage, filterValue, sortState]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };

  return (
    <>
        
      <div className="sticky top-0">
        <TableHeader columns={columns} sortState={sortState} handleSortColumnChange={sortTable}/>
      </div>
      
      <TableBody columns={columns} data={currentItems} />

      <div key={paginateKey}>  
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          containerClassName="grid grid-flow-col justify-center p-4"
          pageClassName="text-center justify-self-center"
          pageLinkClassName="inline-block mx-2"
          previousClassName="page-item mr-2"
          previousLinkClassName=""
          nextClassName="page-item ml-2"
          nextLinkClassName="page-link"
          activeClassName="text-white bg-blue-500 rounded-full inline-block"
        />
      </div>
        
    </>
  );
}
