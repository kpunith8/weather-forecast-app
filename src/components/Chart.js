import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

const Chart = ({ data, color }) => {
  return (
    <div>
      <Sparklines height={100} width={180} data={data}>
        <SparklinesLine color={color} />
      </Sparklines>
    </div>
  );
}

export default Chart;
