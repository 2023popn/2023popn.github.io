fetch(https://portals.veracross.com/webb/student/student/upcoming-assignments)
      .then((resp) => resp.txt())
      .then(function(data){
          document.write(data);
      }
  
document.write("testing123");
