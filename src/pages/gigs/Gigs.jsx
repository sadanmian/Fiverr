import React, { useEffect, useRef, useState } from "react";
import "./gigs.scss";
import GigCard from "../../components/gigCard/GigCard";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import { useLocation } from "react-router-dom";

const Gigs = () => {
  const [open, setOpen] = useState(false);
  const [sort, setSort] = useState("sales");
  const minRef = useRef();
  const maxRef = useRef();

  const { search } = useLocation();

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["gigs"],
    queryFn: () =>
      newRequest
        .get(
          `/gigs${search}&min=${minRef.current.value}&max=${maxRef.current.value}&sort=${sort}`
        )
        .then((res) => res.data),
  });

  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  };

  useEffect(() => {
    refetch();
  }, [sort]);

  const apply = () => {
    refetch();
  };
  return (
    <div className="gigs">
      <div className="container">
        <span className="breadcrumbs">
          FIVERR {">"} GRAPHICS & DESIGN {">"}
        </span>
        <h1>AI Artists</h1>
        <p>
          Explore the boundaries of art and technology with Fiverr's AI artists
        </p>
        <div className="menu">
          <div className="left">
            <span>Budget</span>
            <input ref={minRef} type="text" placeholder="min" />
            <input ref={maxRef} type="text" placeholder="max" />
            <button onClick={apply}>Apply</button>
          </div>
          <div className="right">
            <span className="sortBy">Sort by</span>
            <span className="sortType">
              {sort === "sales" ? "Best Selling" : "Newest"}
            </span>
            <img onClick={() => setOpen(!open)} src="./img/down.png" alt="" />
            {open && (
              <div className="rightMenu">
                {sort === "sales" ? (
                  <span onClick={() => reSort("createdAt")}>Newest</span>
                ) : (
                  <span onClick={() => reSort("sales")}>Best Selling</span>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="cards">
          {isLoading
            ? "Loading..."
            : error
            ? "Something went wrong!"
            : data.map((item) => <GigCard key={item._id} item={item} />)}
        </div>
      </div>
    </div>
  );
};

export default Gigs;
