import React from "react";
import PropTypes from "prop-types";
import styles from "./InputField.module.css";

const InputField = (props) => (
  <div className={styles.container}>
    <label htmlFor={props.name} className={styles.label}>
      {props.label}
    </label>
    <input {...props} className={styles.input} id={props.name} />
  </div>
);

InputField.defaultProps = {
  onChange: () => {},
  required: false,
};
InputField.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  onKeyPress: PropTypes.func,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  name: PropTypes.string.isRequired,
};

export default InputField;
