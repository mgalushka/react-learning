import React from "react";
import {useTimer} from './hooks'

function MountedCounter() {

  const timer = useTimer();

  return (
    <div>
      <p>Mounted counter</p>
    </div>
  );
}

export default MountedCounter;
