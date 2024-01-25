import React from "react";
import styles from "./style.module.scss";

export default function Input({
  placeholder,
  type,
  name,
  value,
  onChange,
  options,
  label,
  ...rest
}) {
  if (type === "select") {
    return (
      <div className={styles.formControl}>
        <label className={styles.formLabel} htmlFor={name}>
          {label}
        </label>
        <select className={styles.formInput} name={name} id={name}>
          {options.map((option, i) => (
            <option key={i} value={option.value}>
              {option.name}
            </option>
          ))}
        </select>
      </div>
    );
  }

  return (
    <div className={styles.formControl}>
      <label className={styles.formLabel} htmlFor={name}>
        {label}
      </label>
      <input
        className={styles.formInput}
        name={name}
        id={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...rest}
      />
    </div>
  );
}
