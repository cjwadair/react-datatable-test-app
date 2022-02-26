import propTypes from 'prop-types';

export function FilterBar(props){

  const classNames = props.className ? props.className : "flex text-gray-600 mx-6 py-4 px-4 bg-gray-50 border border-gray-100"

  return(
    <div className={classNames}>
      {props.children}
    </div>
  );
};

// FilterBar.propTypes = {
//   title: propTypes.string.isRequired
// }