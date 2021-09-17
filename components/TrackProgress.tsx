import React from 'react';
import {timeFormat} from "../services/timeFormat";

interface TrackProgressProps {
  current: number;
  total: number;
  onChange: (e: any) => void;
  isTime?: boolean;
}

export const TrackProgress: React.FC<TrackProgressProps> = ({current, isTime: isTime = false, total, onChange}) => {
  return (
    <div style={{display: 'flex'}}>
      <input type="range" min={0} value={current} max={total} onChange={onChange}/>
      <div style={{textAlign: 'right'}}> {isTime ? timeFormat(current) : current} /
        {isTime ? timeFormat(total) : total}</div>
    </div>
  );
};


