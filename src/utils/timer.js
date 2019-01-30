
function modifyHour(original) {
  let num;
  if(original === 12){num = 12}
  else if(original > 12 && original < 22) {
   num = '0' + (original % 12);
  }
  return num
}

function modifyMinute(original) {
  let num = original;
  if(original < 10) {
    num = '0' + num
  }
  return num;
}

export default function getTime() {
  let time = new Date();
  let hours = modifyHour(time.getHours());
  let minutes = modifyMinute(time.getMinutes());
  let denotation = time.getHours() >= 12  && time.getHours() < 24 ? 'PM' : 'AM';
  return {
    value: `${hours}:${minutes} ${denotation}`,
    originalTime: time.getTime()
  }
}