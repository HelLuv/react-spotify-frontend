import React from 'react';

interface TrackProgressProps{
left:number;
right:number;
onChange:(e: any)=>void
}

export const TrackProgress:React.FC<TrackProgressProps> = ({left,right,onChange}) => {
  return (
    <div>
      <input type="range" />
        <div>{left} / {right}</div>
    </div>
  );
};


