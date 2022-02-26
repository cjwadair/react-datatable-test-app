import propTypes from 'prop-types';

export function Header(props){
  return(
    <div className="sticky top-0">
      <header className="pt-4">
        <span className="text-2xl mb-4 mx-6 text-indigo-800">{props.title}</span>
      </header>
    </div>
  );
};

Header.propTypes = {
  title: propTypes.string.isRequired
}