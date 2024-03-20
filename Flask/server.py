from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
import requests,os
from backmodules import emailbot, find_data, check_number, gemini
import pandas as pd
import pywhatkit as w
import pyautogui
import time
import keyboard as k

app = Flask(__name__)
CORS(app)

@app.route('/email_data', methods=["GET", "POST"])
def Email_Run():
    file,input_content,input_data= False,False,False
    if ('file' not in request.files) and ('inputData' not in request.form):
        return {'message': 'No Emails provided, NO Database? no worries use ours!'}
    
    if 'file' in request.files:
        file = request.files['file']
        
    if 'inputData' in request.form:
        input_data = request.form['inputData']
        
    if 'inputContent' in request.form:
        input_content = request.form['inputContent']
    else:
        return {'message': 'No Content provided, Dont have any content? try our AI!'}
    
    if file:
        email_file=find_data.find_email_col(file)
        for email_col in email_file:
            for email_id in  email_file[email_col]:
                print(emailbot.emailexecute(email_id,input_content))
         
    
    if input_data:
        email_list = input_data.split(',')
        for email_id in email_list:
            
            print(emailbot.emailexecute(email_id,input_content))
    
    return {'message': 'All mails sent successfully'}

@app.route('/wapp_data', methods=["GET", "POST"])
def WApp_Run():
    file,input_content,input_data= False,False,False
    if ('file' not in request.files) and ('inputData' not in request.form):
        return {'message': 'No Phone Numbers provided, NO Database? no worries use ours!'}
    
    if 'file' in request.files:
        file = request.files['file']
    
    if 'inputData' in request.form:
        input_data = request.form['inputData']
        
    if 'inputContent' in request.form:
        input_content = request.form['inputContent']
    else:
        return {'message': 'No Content provided, Dont have any content? try our AI!'}
    
    if file:
        number_file=find_data.find_phone_columns(file)
        for number_col in number_file:
            for number in number_file[number_col]:
                number= str(number)
                number = str(find_data.remove_space_before_number(number))
                phn=check_number.add_country_code(number)
                if (phn):
                    w.sendwhatmsg_instantly(phn,input_content)
                    time.sleep(0.5)
                    pyautogui.click(1050, 990)
                    time.sleep(0.5)
                    k.write(input_content)
                    time.sleep(0.5)
                    k.press_and_release('enter')
                    time.sleep(0.5)
                    k.press_and_release('ctrl+w')
                    print("message sent to "+phn)
                    time.sleep(0.5)
    
    if input_data:
        phn_list = input_data.split(',')
        for number in  phn_list:
            number= str(number)
            number = str(find_data.remove_space_before_number(number))
            phn=check_number.add_country_code(number)
            if (phn):
                w.sendwhatmsg_instantly(phn,input_content)
                pyautogui.click(1050, 990)
                time.sleep(0.5)
                k.write(input_content)
                time.sleep(0.5)
                k.press_and_release('enter')
                time.sleep(0.5)
                k.press_and_release('ctrl+w')
                print("message sent to "+phn)
                time.sleep(0.5)
    return {'message': 'All messages sent successfully'}   

@app.route('/ai_data', methods=["GET", "POST"])
def AI_Run():
    if 'inputData' in request.form:
        input_data = request.form['inputData']
        reply=gemini.prompt_msg(input_data)
        return {'message': reply}
    
# Running app
if __name__ == '__main__':
    app.run(debug=True, port=8080)