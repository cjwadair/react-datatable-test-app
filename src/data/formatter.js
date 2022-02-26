export function formatData(data){
  return data.map((row) => {
    
    row.price = parseFloat(row.price);
    row.abv = parseFloat(row.abv);

    return row;

  })
}