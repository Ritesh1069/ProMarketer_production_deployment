from flask import Flask
from flask_cors import CORS, cross_origin
import requests
from backmodules import emailbot

app = Flask(__name__)

@app.route('/WApp')
@cross_origin(origin='*')
def WApp():
    email="hruturajatole@gmail.com"
    content="hello"
    emailbot.emailexecute(email,content)
    return "Messages sent successfully"


# Running app
if __name__ == '__main__':
    app.run(debug=True, port=8080)