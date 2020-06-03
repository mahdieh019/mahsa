import React from 'react';

function Time(){
  const date=new Date(2020,5,13,18);
  const hours=date.getHours();
  let timeOfDay
  const styles={
    fontSize:30
  }

  if(hours<12){
      timeOfDay="morning"
      styles.color='#04756F'
  }else if(hours>=12 && hours<17){
      timeOfDay="afternoon"
      styles.color='red'
  }
  else{
      timeOfDay="night"
      styles.color='green'
  }

  return(
      <h1 style={styles}>Good {timeOfDay}!</h1>
  )

}

export default Time;
