import PreviousMap from 'postcss/lib/previous-map';
import propTypes from 'prop-types';
import { useState } from 'React'

export function Button(props) { 

  const classNames = `bg-indigo-700 hover:bg-indigo-800 text-white py-1 px-3 rounded ${props.className}`

  return (
    <>
      <button className={classNames}>
        {props.label}
      </button>
    </>
  );

}

Button.propTypes = {
  label: propTypes.string.isRequired
}