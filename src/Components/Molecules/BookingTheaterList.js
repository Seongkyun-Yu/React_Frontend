import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./style/BookingTheaterList.scss";
import {
  setSelectRegion,
  selectTheater,
  setNearbyTheaters,
} from "../../Reducer/bookingReducer";
import {
  theaterLoaction,
  findNearbyTheaters,
} from "../../Utils/theaterLoaction";

const BookingTheaterList = () => {
  // async function dispatchNearby() {
  //   dispatch(setNearbyTheaters(await findNearbyTheaters()));
  // }

  const dispatchNearby = useCallback(async () =>
    dispatch(setNearbyTheaters(await findNearbyTheaters()))
  );

  const selectedOption = useSelector((state) => state.Booking.selectedOption);
  const canSelectRegions = useSelector(
    (state) => state.Booking.canSelectRegions
  ); // 선택 가능한 지역별 영화관 수

  const canSelectTheaters = useSelector(
    (state) => state.Booking.canSelectTheaters
  ); // 선택 가능한 지역별 상영관들

  const dispatch = useDispatch();

  const theaterLocs = theaterLoaction.slice();
  const nearbyTheaters = selectedOption.nearbyTheaters; // 가까운 영화관들

  if (!theaterLocs.find((theater) => theater.region === "가까운 영화관")) {
    theaterLocs.unshift({
      region: "가까운 영화관",
      theaters: nearbyTheaters,
    });
  }

  const selectedRegion = theaterLocs.filter((theater) => {
    return theater.region === selectedOption.selectedRegion;
  })[0]; // 선택한 지역

  const selectedTheaters = selectedOption.selectedTheaters; // 선택한 영화관들
  const unSelectedTheaters = new Array(3 - selectedTheaters.length).fill(0); // 선택하지 않은 영화관 체크용 빈배열

  useEffect(() => {
    dispatchNearby();
  }, [dispatchNearby]);

  return (
    <div className="bookingTheaterList">
      <h3 className="theaterHeading">극장</h3>
      <div className="theaterLocationList">
        <ul className="region">
          {theaterLocs.map((theater, i) => {
            let className =
              canSelectRegions[theater.region] ||
              theater.region === "가까운 영화관"
                ? ""
                : " disabled";

            className +=
              theater.region === selectedOption.selectedRegion
                ? "selectedInfoLighter"
                : "";

            return (
              <li className={className}>
                <button
                  type="button"
                  disabled={!canSelectRegions[theater.region]}
                  onClick={() => {
                    dispatch(setSelectRegion(theater.region));
                  }}
                >
                  <span>
                    {theater.region}
                    {theater.region !== "가까운 영화관"
                      ? `(${canSelectRegions[theater.region]})`
                      : ""}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
        <ul className="localRegionTheater">
          {selectedRegion
            ? selectedRegion.theaters.map((theater) => {
                const isSelected = selectedTheaters.find(
                  (th) => th.name === theater.name
                );
                const CanSelected = canSelectTheaters.find(
                  (th) => th.name === theater.name
                );

                if (CanSelected) theater.theater_id = CanSelected.theater_id;

                let className = "theater";
                className += isSelected ? " selectedTheater" : "";
                className += CanSelected ? "" : " disabled";

                return (
                  <li className={className}>
                    <button
                      disabled={!CanSelected}
                      onClick={() => dispatch(selectTheater(theater))}
                    >
                      <span>{theater.name}</span>
                    </button>
                  </li>
                );
              })
            : ""}
        </ul>
      </div>
      <ul className="seletedTheaterLists">
        {unSelectedTheaters.length !== 3 ? (
          <>
            {selectedTheaters.map((theater) => {
              return (
                <li>
                  <span>{theater.name}</span>
                  <button onClick={() => dispatch(selectTheater(theater))}>
                    x
                  </button>
                </li>
              );
            })}
            {unSelectedTheaters.map(() => {
              return (
                <li>
                  <span className="bigPlusMark">+</span>
                </li>
              );
            })}
          </>
        ) : (
          <div className="emptySeletedList">
            <span>전체극장</span>
            <span>목록에서 극장을 선택하세요.</span>
          </div>
        )}
      </ul>
    </div>
  );
};

export default BookingTheaterList;
