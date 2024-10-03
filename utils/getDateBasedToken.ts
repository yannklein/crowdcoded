export const getDateBasedToken = ()  => {
  const now = new Date();  

    // Extract components of the date and time  
    const year = now.getFullYear();        // yyyy  
    const month = String(now.getMonth() + 1).padStart(2, '0'); // MM  
    const day = String(now.getDate()).padStart(2, '0');        // DD  
    const hours = String(now.getHours()).padStart(2, '0');     // HH  
    const minutes = String(now.getMinutes()).padStart(2, '0');  // MM  
    const seconds = now.getSeconds();      // SS  

    const secondsRounded = Math.round(seconds/5)*5

    // Prepare the final format  
    const formattedDate = `${year}${month}${day}${hours}${minutes}${secondsRounded}`;  

    return formattedDate;  
};