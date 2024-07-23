function DateFomet(strdate:string) {
    const date = new Date(strdate);
  
    const year = date.getUTCFullYear();
    const month = String(date.getUTCMonth() + 1).padStart(2, '0');
    const day = String(date.getUTCDate()).padStart(2, '0');
    const hours = String(date.getUTCHours()).padStart(2, '0');
    const minutes = String(date.getUTCMinutes()).padStart(2, '0');
    const seconds = String(date.getUTCSeconds()).padStart(2, '0');
    const formattedDate = `${year}. ${month}. ${day}`;
    const formattedTime = `${hours}:${minutes}:${seconds}`;
  
    return `${formattedDate}`;
  }

  export default DateFomet;