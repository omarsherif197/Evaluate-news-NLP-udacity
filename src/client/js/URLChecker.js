function URLChecker(string){
    let url;
    try {
        url = new URL(string);
      } catch (_) {
        alert("This is not a valid URL, try again.");  
        return false;
      }
    
      return url.protocol === "http:" || url.protocol === "https:";
}

export {URLChecker}