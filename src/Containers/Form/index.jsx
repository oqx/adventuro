// @ts-check
import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import * as fromUtils from "../../Utils";
import * as fromComponents from "../../Components";
import { Route, useHistory, useLocation } from "react-router-dom";
import { selectModels } from "./Model";
import "./styles.scss";
/**
 * @summary A form for picking routes via wizard.
 *
 * @typedef {{
 * route: string
 * direction: string
 * stop: string
 * } | {[key: string]: any}} Form
 *
 * @typedef {{
 *  onComplete(form: Form): void
 * }} Props
 *
 * @type {React.FunctionComponent<Props>}
 */
const Form = () => {
  const { pathname } = useLocation();

  const paths = fromUtils.convertPathnameToObject(pathname);

  const history = useHistory();

  return (
    <TransitionGroup className="form">
      <h3 className="form__title gradient">Choose your adventure</h3>
      {selectModels({ paths, history }).reduce(
        (acc, { path, name, displayOn, ...props }, i) => {
          if (Object.keys(paths).includes(displayOn) || name === "route") {
            return [
              ...acc,
              <CSSTransition key={name} timeout={200} classNames="control">
                <div>
                  <Route path={path}>
                    <fromComponents.SelectLoader {...props} name={name} />
                  </Route>
                </div>
              </CSSTransition>,
            ];
          }
          return acc;
        },
        []
      )}
      
    </TransitionGroup>
  );
};

Form.displayName = "Form";

export { Form };
