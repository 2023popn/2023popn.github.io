fetch(https://portals.veracross.com/webb/student/student/upcoming-assignments)
      .then(function (response) {
        switch (response.status) {
            // status "OK"
            case 200:
                return response.text();
            // status "Not Found"
            case 404:
                throw response;
        }
    })
    .then(function (template) {
        console.log(template);
    })
    .catch(function (response) {
        // "Not Found"
        console.log(response.statusText);
    });
  
document.write("testing123");
