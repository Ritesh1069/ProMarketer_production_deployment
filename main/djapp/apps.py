from django.apps import AppConfig
import pywhatkit
from .emailbot import sendMail
import pyautogui
import time

def execute(phno,content):
     pywhatkit.sendwhatmsg_instantly(('+91'+phno),content)
     time.sleep(0.2)
     pyautogui.click(1050, 950)

def emailexecute(email,content):
        fromEmail = "aiengineer108@gmail.com"
        subject = "PRO MARKETER "
        message = content
        sendMail(fromEmail, email, subject, message)
        print(f"Mail sent to - {email}")
    
class DjappConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'djapp'
#ritesh