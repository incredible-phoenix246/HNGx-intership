from flask import Flask, jsonify

task1 = Flask(__name__)

data = {
    "slack_name": "example_name",
    "current_day": "Monday",
    "utc_time": "2023-08-21T15:04:05Z",
    "track": "backend",
    "github_file_url": "https://github.com/username/repo/blob/main/file_name.ext",
    "github_repo_url": "https://github.com/username/repo",
    "status_code": 200
}

@task1.route('/task1', methods=['GET'])
def your_endpoint():
    return jsonify(data)

if __name__ == '__main__':
    task1.run()
