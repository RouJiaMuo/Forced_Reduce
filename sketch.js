var counter = 21750000;
var poi;
var timer;
var end;

function setup() {
  noCanvas();


  timer = select('#timer');
  timer.html('21750000');
  countNum();
  // function countNum (){
  //   counter = counter - random(0,100);
  //
  //   timer.html(floor(counter));
  //
  //   newInterval(random(1, 8));
  // }

  //setInterval(countNum, 1000);

  // function countNumber (){
  //
  //   counter = counter + random(0,10);
  //   timer.html(floor(counter));
  // }

  //setInterval(countNumber, random(1,86400)*1000);
}

function countNum (){
  counter = counter - random(0,1000);
  counter = counter + random(0,10);


  timer.html(floor(counter));

  newInterval(random(0,86400));

}

function newInterval(poi){
  setTimeout(countNum,poi*1000);
  if (counter = 0) {
    counter = end;
  }
}



function draw() {




}
