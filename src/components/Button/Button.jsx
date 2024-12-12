import PropTypes from "prop-types";

const Button = ({ type, onClick, label, className }) => {
  return (
    <button onClick={onClick} type={type} className={className}>
      {label}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Button.defaultProps = {
  type: "button",
  className: "",
};

export default Button;
