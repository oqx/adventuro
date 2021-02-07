import React from "react";
import merge from "deepmerge";
import { useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import * as fromUtils from "../../Utils";
import "./styles.scss";

/**
 * @summary A component that makes a request to the trips endpoints
 * and renders trip details.
 *
 * @type {React.FunctionComponent}
 */
const Trip = () => {
  const [trip, setTrip] = React.useState();
  const { pathname } = useLocation();
  const paths = fromUtils.convertPathnameToObject(pathname);

  /**
   * @summary Fetches trip from API and polls the trip API for updates,
   * as is done on the metro website.
   */
  React.useEffect(() => {
    let polling;
    if (paths["stop"]) {
      console.log("called");
      const getTrip = () =>
        fromUtils.fetchTrip(paths).then((resp) => setTrip(merge(trip, resp)));

      /*
          Initialize poling.
      */
      polling = setInterval(getTrip, 30000);

      /*
          Execute initial fetch.
      */
      getTrip();
    } else {
      clearInterval(polling);
    }

    /*
        Clear interval on unmount.
    */
    return () => clearInterval(polling);
  }, [pathname]);

  /**
   * @summary A rendering func for items returned from trip request.
   * @param {import("../../Utils").TripResponse} departure
   */
  const renderItems = (departure) => {
    const date = new Date(departure.departure_time * 1000);
    return (
      <CSSTransition
        key={departure.description}
        timeout={200}
        classNames="control"
      >
        <div className="trip__card">
          <span className="card__route">{departure.description}</span>
          <span className="card__time">
            {date.toLocaleTimeString("en-US", {
              timeStyle: "short",
            })}
          </span>
          <span className="card__route">
            {fromUtils.getMinutesBetween(date)}
          </span>
        </div>
      </CSSTransition>
    );
  };

  /*
    This is where the full component is rendered.
   */
  return (
    <CSSTransition
      in={paths["stop"]}
      timeout={200}
      unmountOnExit
      classNames="trip"
    >
      <div className="trip">
        {!trip ? (
          <div>Loading trip...</div>
        ) : (
          <>
            <h3 className="trip__desc gradient">{trip.stops[0].description}</h3>
            {!trip.departures.length && (
              <div className="trip__no-departs">No routes available</div>
            )}
            <TransitionGroup>
              {trip.departures.map(renderItems)}
            </TransitionGroup>
          </>
        )}
      </div>
    </CSSTransition>
  );
};

Trip.displayName = "Trip";

export { Trip };
