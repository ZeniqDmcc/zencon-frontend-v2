export default ()=>{
    const today = new Date();
    const year = today.getFullYear()-18;
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');
    return {
        day,month,year
    }
  
}