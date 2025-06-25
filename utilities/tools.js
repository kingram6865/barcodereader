export function timeStamp(option=1) {
  let date = new Date()
  let year = date.getFullYear()
  let month = (date.getMonth()+1 < 10) ? `0${date.getMonth()+1}` : date.getMonth()+1
  let day = (date.getDate() < 10) ? `0${date.getDate()}` : date.getDate()
  let hour = (date.getHours() < 10) ? `0${date.getHours()}` : date.getHours()
  let minutes = (date.getMinutes()) ? `0${date.getMinutes()}` : date.getMinutes()
  let seconds = (date.getSeconds() < 10) ? `0${date.getSeconds()}` : date.getSeconds()

  switch(option){
    case 0:
      return `${year}-${month}-${day}`;
    case 1:
      return `${year}-${month}-${day} ${hour}:${minutes}:${seconds}`
  }
}