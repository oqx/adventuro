// @ts-check
/**
 * @summary A form model. This simplifies adding animations to fields
 * on enter and exit.
 *
 * @typedef {{
 *  history: any
 *  paths: {
 *   [key: string]: string
 *  }
 * }} Props
 *
 * @param {Props} param0
 */
export const selectModels = ({ history, paths }) => {
  const { route, direction } = paths;
  return [
    {
      onChange: ({ target }) => history.push(`/${target.value}`),
      name: "route",
      path: "/",
      displayOn: "",
      placeholder: "Select a route",
      label: "Route",
    },
    {
      onChange: ({ target }) => history.push(`/${route}/${target.value}`),
      name: "direction",
      path: "/:route",
      displayOn: "route",
      placeholder: "Select a direction",
      label: "Direction",
    },
    {
      displayOn: "direction",
      onChange: ({ target }) =>
        history.push(`/${route}/${direction}/${target.value}`),
      name: "stop",
      path: "/:route/:direction",
      placeholder: "Select a stop",
      label: "Stop",
    },
  ];
};
