import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import {ChartData} from './chartdata';

function Chart() {
  return (
    <>
      <div>rawr</div>
      <div></div>
      {ChartData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    <span>{item.title}</span>
                  </Link>
                </li>
                );
            })}
      
    </>
  );
}

export default Chart;
