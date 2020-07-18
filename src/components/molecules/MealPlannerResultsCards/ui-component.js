import React from "react";
import PropTypes from "prop-types";
import String from "../../atoms/String";
import cardData from "./card_data";

const MealPlannerResultsCards = ({ loading, results }) => {
  return cardData(loading, results).map((d) => {
    return (
      <div className="col-lg-6" key={d.titleTextKey}>
        <div className="card mb-3 h-100">
          <div className="row no-gutters">
            <div className="col-md-4 text-center">
              {d.img.length ? (
                <img src={d.img} className="card-img" alt={d.alt} />
              ) : (
                d.img()
              )}
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">
                  <String textKey={d.titleTextKey} />: {d.data}
                  {d.titleSmallTextKey && (
                    <small className="text-muted">
                      <String textKey={d.titleSmallTextKey} />
                    </small>
                  )}
                </h5>
                <p className="card-text">
                  <String textKey={d.bodyTextKey} />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });
};

MealPlannerResultsCards.defaultProps = {};
MealPlannerResultsCards.propTypes = {
  loading: PropTypes.bool.isRequired,
  results: PropTypes.object.isRequired,
};

export default MealPlannerResultsCards;
