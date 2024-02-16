from django.apps import AppConfig
from .emailbot import sendMail
import pywhatkit as w
import pyautogui
import time
import keyboard as k

def execute(phno,content):
    words = phno.split(",")  # Splitting at the comma delimiter
    for no in  words:
         w.sendwhatmsg_instantly(('+91'+no),content,15,True)
         pyautogui.click(1050, 950)
         time.sleep(2)
         k.press_and_release('enter')

def emailexecute(email,content):
        fromEmail = "aiengineer108@gmail.com"
        subject = "PRO MARKETER "
        message = content
        sendMail(fromEmail, email, subject, message)
        print(f"Mail sent to - {email}")
    
class DjappConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'djapp'
#hruturaj