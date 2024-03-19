from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
import requests,os
from backmodules import emailbot,find_email
import pandas as pd

app = Flask(__name__)
CORS(app)

@app.route('/email_data', methods=["GET", "POST"])
def Email_Run():
    file,input_content,input_data= False,False,False
    if ('file' not in request.files) and ('inputData' not in request.form):
        return {'message': 'No Emails provided, you can contact us for using our data'}
    
    if 'file' in request.files:
        file = request.files['file']
    
    if 'inputData' in request.form:
        input_data = request.form['inputData']
        
    if 'inputContent' in request.form:
        input_content = request.form['inputContent']
    
    if file:
        email_file=find_email.find_email_col(file)
        for email_col in email_file:
            for email_id in  email_file[email_col]:
                print(emailbot.emailexecute(email_id,input_content))
        return {'message': 'All mails sent successfully'} 
    
    if input_data:
        email_list = input_data.split(',')
        for email_id in email_list:
            print(emailbot.emailexecute(email_id,input_content))
        return {'message': 'All mails sent successfully'}
    
# Running app
if __name__ == '__main__':
    app.run(debug=True, port=8080)