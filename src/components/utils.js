// import {data} from '../data/beer_data.js';

export function formatDisplayValue(val, format='string', precision=2){
  
  const numeric = () => { 
    return val.toLocaleString('en-US', {
      minimumFractionDigits: precision,      
      maximumFractionDigits: precision,
    });
  };
 
  const currency = () => { 
    
    const currency_formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: precision,      
      maximumFractionDigits: precision,
    });
    
    return currency_formatter.format(val);

  }

  const percentage = () => { 
    return (val/100).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2});
  }
  
  const string = () => { 
    return val
  }

  const date = () => { 
    return 'date';
  }

  const handleFormatting =
  {
      'numeric': numeric,
      'percentage': percentage,
      'date': date,
      'currency': currency,
      'string': string
  }

  if (typeof handleFormatting[format] !== 'function') {
    console.log('unspecified format', format);
    return 'string';
  }

  return handleFormatting[format]();  

}