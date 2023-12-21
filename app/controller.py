from flask import Flask, jsonify
from flask_restful import Api
from services.WriteFileService import WriteFileService

app = Flask(__name__)
api = Api(app)

@app.route('/', methods=['GET'])
def index():
  ws = WriteFileService(app.root_path)
  ws.writeFile()

  data = { "Result" : "OK" } 
  return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0")
