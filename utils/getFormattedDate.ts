const formatDate = (date, lang) => {  
    if (!date) {  
      return 'TBD';  
    }

    let options;  

    if (lang === 'ja') {  
        // Format for Japanese (uses full month name in Japanese)  
        options = { year: 'numeric', month: 'long', day: 'numeric' };  
    } else {  
        // Default to English format  
        options = { year: 'numeric', month: 'long', day: 'numeric' };  
    }  

    const formattedDate = date.toLocaleDateString(lang === 'ja' ? 'ja-JP' : 'en-US', options);  
    
    // Adding ordinal to the day  
    const day = date.getDate();  
    const suffix = (day) => {  
        if (day > 3 && day < 21) return 'th'; // Catch 11th-13th  
        switch (day % 10) {  
            case 1: return 'st';  
            case 2: return 'nd';  
            case 3: return 'rd';  
            default: return 'th';  
        }  
    };  

    if (lang === 'en') {  
        return formattedDate.replace(/(\d+)/, day + suffix(day));  
    } else if (lang === 'ja') {  
        return formattedDate; // Japanese format already good enough  
    } else {  
        throw new Error('Unsupported language; please use "en" or "ja".');  
    }  
}  

export default formatDate;