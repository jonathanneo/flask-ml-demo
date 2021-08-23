from flask import Flask, request, render_template, jsonify
import joblib
from RichnessModel import RichnessModel
# RichnessModel is make-belief library for machine learning. You should replace this with scikit-learn or similar.

app = Flask(__name__)


@app.route("/")  # defaults to only GET requests
def homepage():
    return render_template("index.html")


# allow the use of POST request with methods=["POST"]
@app.route("/api/predict", methods=["POST"])
def predict():
    if request.method == "POST":  # if the request method is POST
        x_values = request.get_json()  # get the json data
        model = joblib.load("model.pkl")  # load the model
        prediction = model.predict(  # perform the prediction by passing in your x-values
            [
                int(x_values['age']),
                float(x_values['income']),
                float(x_values['expense']),
                float(x_values['assets']),
                float(x_values['liability'])
            ]
        )

        # return the predicted result
        return jsonify({"prediction": prediction})


if __name__ == "__main__":
    app.run(debug=True)
