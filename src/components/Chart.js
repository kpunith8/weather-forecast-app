import React from 'react';
import _ from 'lodash';
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine
} from 'react-sparklines';

const average = data => {
  return _.round(_.sum(data) / data.length);
}

const Chart = ({ data, color, units }) => {
  return (
    <div>
      <Sparklines height={100} width={180} data={data}>
        <SparklinesLine color={color} />
        <SparklinesReferenceLine type='avg' />
      </Sparklines>
      <p>Average: {average(data)}{units} </p>
    </div>
  );
}

export default Chart;
