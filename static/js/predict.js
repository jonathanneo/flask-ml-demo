d3.select("#btn-predict").on("click", ()=>{
    // get values from html input fields 
    var age = d3.select("#age").node().value; 
    var income = d3.select("#income").node().value; 
    var expense = d3.select("#expense").node().value; 
    var assets = d3.select("#assets").node().value; 
    var liability = d3.select("#liability").node().value; 
    
    // perform a POST request using D3 
    d3.json("/api/predict", {
        method: "POST",
        body: JSON.stringify({
            "age": age,
            "income": income,
            "expense": expense,
            "assets": assets,
            "liability": liability
          }),
        headers: {
            "Content-type": "application/json"
        }
    }).then(response => {
        var prediction_output = d3.select("#prediction-output");
        if(response.prediction){
            prediction_output.text("You'll be rich!");
        } else { 
            prediction_output.text("You'll not be rich :(");
        }
    });
})