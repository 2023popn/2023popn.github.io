function getAssignments(){
    const respNew = await fetch('https://portals.veracross.com/webb/student/student/upcoming-assignments');
    const txt = await respNew.text();
    document.write(txt);
}
  
document.write("testing123");
getAssignments();
