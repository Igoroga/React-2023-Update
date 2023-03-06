import React from 'react';
import {getPagesArray} from "../../../utils/pages";
import MyButton from '../button/MyButton';

const Pagination = ({totalPages, page, changePage}) => {
    let pagesArray = getPagesArray(totalPages);
    return (
        <div style={{marginTop: '10px',
        marginBottom: '10px', display: 'flex',
        justifyContent: 'center'}}>
        {pagesArray.map(p =>
          <MyButton 
          key={p}
          style={{backgroundColor: page==p ? 'rgb(216, 250, 250)' : 'white'}}
          onClick={() => changePage(p)}
          >
            {p}
            </MyButton>
          )}
          </div>
    );
};

export default Pagination;
