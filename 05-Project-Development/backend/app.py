from flask import Flask, jsonify

app = Flask(__name__)


@app.route("/")
def home():
    return jsonify({
        "project": "PocketSmart AI",
        "message": "PocketSmart AI backend is running"
    })


@app.route("/api/status")
def status():
    return jsonify({
        "status": "success",
        "message": "Backend connected successfully"
    })


if __name__ == "__main__":
    app.run(debug=True)