// @ts-check
import React from "react";
import "./styles.scss";
/**
 * @summary A common select input.
 *
 * @typedef {{
 *  options: import('../../Utils/Options').OptionObject[]
 *  label: string
 * } & React.SelectHTMLAttributes} Props
 *
 * @type {React.FunctionComponent<Props>}
 */
const _Select = ({ options, placeholder, label, ...props }) => (
  <div className="select">
    <label className="select__label">{label}</label>
    <select {...props} className="select__input" defaultValue="">
      <option value="">{placeholder}</option>
      {options && options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  </div>
);

_Select.displayName = "Select";

export const Select = React.memo(_Select);
