import React from "react";
import _ from "lodash";

const Paginations = ({ itemsCount, pageSize, currentPage, onPageChange }) => {
  let pagecount = itemsCount / pageSize; //equal 2.25

  //this is one way to get the whole array [1,2,3]

  const pages = _.range(1, pagecount + 1); //[1,2,3]
  if (Math.ceil(pagecount) == 1) return null;
  return (
    <nav>
      <ul className="pagination">
        {pages.map((page) => {
          return (
            <li
              key={page}
              className={page == currentPage ? "page-item active" : "page-item"}
            >
              <a className="page-link" onClick={() => onPageChange(page)}>
                {page}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Paginations;
