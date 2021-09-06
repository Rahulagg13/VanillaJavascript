function watch() {
  let counter = 0;
  isStopped = true;
  let stoppedValue = 0;
  let isStart = false;
  let startStopWatch = function () {
    if (!isStopped) {
      setInterval(() => {
        counter++;
      }, 1000);
    }
  };
  this.start = function () {
    isStopped = false;
    counter = stoppedValue;
    if (isStart) {
      throw new Error("Clock has been stared already");
    } else {
      isStart = true;
      startStopWatch();
    }
  };
  this.stop = function () {
    isStart = false;
    if (isStopped) {
      throw new Error("Stop Watch has been stopped already");
    } else {
      isStopped = true;
      stoppedValue = counter;
    }
  };
  this.reset = function () {
    isStart = false;
    isStopped = true;
    if (isStart) {
      throw new Error("first stop the watch");
    } else {
      counter = 0;
      stoppedValue = 1;
    }
  };
  this.duration = function () {
    return stoppedValue;
  };
}
const clock = new watch();
