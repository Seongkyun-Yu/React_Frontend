/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import MovieDetail from "../Templates/MovieDetail";
import { useDispatch } from "react-redux";
import { getMovie, getAgeBooking } from "../../Reducer/movieReducer";

const MovieDetailPage = ({ match }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getMovie(`${match.params.idx}`));
    dispatch(getAgeBooking(`${match.params.idx}`));
  }, [dispatch]);
  return <MovieDetail />;
};

export default React.memo(MovieDetailPage);
