function fnGetExtension() {
    //Get the file input element by its id 
    var fileInput = document.getElementById('myFile');
    //Get the file name
    var fileName = fileInput.files[0].name;
   
   // Regular expression for file extension.
    var patternFileExtension = /\.([0-9a-z]+)(?:[\?#]|$)/i;
   
   //Get the file Extension 
    var fileExtension = (fileName).match(patternFileExtension);
    alert(fileExtension);
   }