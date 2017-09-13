function theBeatlesPlay(musicians, instruments){
  var plays = [];

  for(i=0; i < musicians.length; i++){
    plays.push((musicians[i]) + " play " + (instruments[i]));
  }

  return plays
}
