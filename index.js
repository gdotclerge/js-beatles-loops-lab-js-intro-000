function theBeatlesPlay(musicians, instruments){
  var plays = [];

  for(i=0; i < musicians.length; i++){
    plays.push((musicians[i]) + " play " + (instruments[i]));
  }

  return plays
}




function iLoveTheBeatles(n){
  var fanatic = [];

  do{
    fanatic.push('I love the Beatles!');
    n++;
  } while (n < 15);

  return fanatic
}
