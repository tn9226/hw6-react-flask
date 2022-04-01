from flask import Flask, jsonify
from flask.helpers import send_from_directory

# comment out on deployment
#from flask_cors import CORS

# uses 'frontend' because that is where our react app is stored
app = Flask(__name__, static_folder="hw6-app/build", static_url_path="")

# comment out on deployment
#CORS(app)

@app.route("/")
def index():
    return send_from_directory(app.static_folder, "index.html")

# developed from recitation and piazza post
@app.route("/api/<fname>", methods=["GET"])
def firstname_api(fname: str):
    if fname == "Tiffany":
        output = "Nguyen"
    else:
        output = "User Not Found"
    return jsonify(lname=output)
   
if __name__ == "__main__":
    app.run()