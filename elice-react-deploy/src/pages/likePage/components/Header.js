import React from 'react';
import Wrapper from './HeaderStyle';
import sort from '../../../common/img/sort.png'

const Header = () => {
  return (
    <Wrapper>
        <div id='page-title'>Best day:)</div>
        <div id='filter-button'><img src={sort} alt="filter" /></div>
    </Wrapper>
  )
}

export default Header