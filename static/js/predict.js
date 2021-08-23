d3.select("#btn-predict").on("click", ()=>{
    // get values from html input fields 
    var age = d3.select("#age").node().value; 
    var income = d3.select("#income").node().value; 
    var expense = d3.select("#expense").node().value; 
    var assets = d3.select("#assets").node().value; 
    var liability = d3.select("#liability").node().value; 
    
    // perform a POST request using D3 
    d3.json("/api/predict", {
        // perform a POST request 
        method: "POST",
        // pass the following values in the 'body' of the POST request 
        body: JSON.stringify({
            "age": age,
            "income": income,
            "expense": expense,
            "assets": assets,
            "liability": liability
          }),
        // the headers contains metadata about the POST request. We want to say that the data sent is "json" data, so we set "Content-type": "application/json"
        headers: {
            "Content-type": "application/json"
        }
    }).then(response => { // when we receive the the response back, then we perform the steps below
        var prediction_output = d3.select("#prediction-output"); // select the area to put our predictions to
        console.log(response.prediction); // log out the result
        // if rich 
        if(response.prediction == "rich"){
            prediction_output.text("You'll be rich!"); 
        
        // if not rich
        } else { 
            prediction_output.text("You'll not be rich :(");
        }
    });
})