import propTypes from 'prop-types';

export function Input(props){

  const classNames = "rounded py-1 pl-8 pr-2 border border-slate-300 bg-search-icon bg-left bg-no-repeat bg-[length:40px_40px]" + " " + props.className

  function setSearch(event) {
    props.onChange(event.target.value);
  }

  return(
    <input className={classNames} placeholder={props.placeholder} onChange={setSearch}></input>
  )
}