from flask import Flask, jsonify
import json

task1 = Flask(__name__)

@task1.route('/task1', methods=['GET'])
def your_endpoint():
    try:
        # Read the JSON data from the file
        with open('jsondata.json', 'r') as json_file:
            data = json.load(json_file)

        return jsonify(data)
    except FileNotFoundError:
        return jsonify({"error": "JSON file not found"}), 404

if __name__ == '__main__':
    task1.run()
