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

async function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    
    if (URLChecker(formText)) {
          
            const response = await fetch('http://localhost:8081/sentiment?url='+formText)
            const body = await response.json()
            document.getElementById('score_tag').innerText = "Score tag: " + body.score_tag
            document.getElementById('agreement').innerText = "Agreement:  " + body.agreement 
            document.getElementById('subjectivity').innerText = "Subjectivity:  " + body.subjectivity
            document.getElementById('confidence').innerText = "Confidence:  " + body.confidence
            document.getElementById('irony').innerText = "Irony:  " + body.irony    
    }
    
}

export { handleSubmit }
