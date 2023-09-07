from flask import Flask, jsonify, request
import json

task1 = Flask(__name__)

# Load JSON data from the file
with open('file.json', 'r') as json_file:
    data = json.load(json_file)

@task1.route('/task1', methods=['GET'])
def your_endpoint():
    # Get the query parameters
    slack_name = request.args.get('slack_name')
    track = request.args.get('track')

    # Update the data based on the query parameters if provided
    if slack_name:
        data['slack_name'] = slack_name
    if track:
        data['track'] = track

    return jsonify(data)

if __name__ == '__main__':
    task1.run()
