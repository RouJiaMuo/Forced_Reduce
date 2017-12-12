var counter = 21750000;
var poi;
var timer;
var endnumber = 0;

function setup() {
  noCanvas();


  timer = select('#timer');
  timer.html('21750000');
  countNumber();

}

function countNumber (){
  if (counter > 100) {counter = counter - random(0,100);
  counter = counter + random(0,10);

  } else {
    counter = endnumber;
  }


  timer.html(floor(counter));
  newInterval(random(0,60));

}

function newInterval(poi){
  setTimeout(countNumber,poi*1000);

}
