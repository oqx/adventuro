// @ts-check
import React from "react";
import { useLocation } from "react-router-dom";
import { Select } from "../Select";
import { API_MAP, convertPathnameToObject, REFETCH_MAP } from "../../Utils";

/**
 * @summary Conditionally fetches options for each select, depending
 * upon if previous field values have changed.
 *
 * @typedef {{
 *  label: string
 * } & React.SelectHTMLAttributes} Props
 *
 * @type {React.FunctionComponent<Props>}
 */
const _SelectLoader = (props) => {
  const [options, setOptions] = React.useState();

  const { pathname } = useLocation();

  /**
   * @summary React useParams isn't great, so I tend to take a
   * vanilla approach.
   */
  const paths = convertPathnameToObject(pathname);

  const [prevParams, setPrevParams] = React.useState(paths);

  /**
   * @summary Fetch a select's options on initial render.
   */
  React.useEffect(() => {
    // @ts-ignore
    API_MAP[props.name](paths).then((payload) => {
      setOptions(payload);
    });
  }, []);

  /**
   * @summmary Watches pathname for updates and determines
   * which control's data needs to be refetched based on
   * changes in previous controls.
   */
  React.useEffect(() => {
    const difference = Object.keys(paths).filter(
      (k) => paths[k] !== prevParams[k]
    )[0];
    setPrevParams(paths);
    if (REFETCH_MAP[props.name](difference)) {
      // @ts-ignore
      API_MAP[props.name](paths).then((payload) => {
        setOptions(payload);
      });
    }
  }, [pathname]);

  /**
   * Load placeholder if options have not been fetched.
   */
  if (!options) {
    return (
      // @ts-ignore
      <Select
        value=""
        placeholder="Loading..."
        label="Loading..."
        disabled
      ></Select>
    );
  }
  return <Select options={options} defaultValue={""} {...props}></Select>;
};

_SelectLoader.displayName = "SelectLoader";

export const SelectLoader = React.memo(_SelectLoader);
