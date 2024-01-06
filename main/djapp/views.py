from django.shortcuts import render
from .models import Bot,Email
from django.http import HttpResponse
from .apps import execute,emailexecute

# Create your views here.
def index(request):
    return render(request, 'index.html')

def whatsapp(request):
    return render(request, 'WhatsappBot.html')

def emailsite(request):
    return render(request, 'EmailBot.html')

def contact(request):
    return render(request, 'ContactUs.html')

def run(request):
    if request.method == 'POST':
        phone_num = request.POST['phno']
        content = request.POST['content']
        new_phno = Bot(phno=phone_num,content=content)
        new_phno.save()
        execute(phone_num,content)
        return HttpResponse('success!')

def  email(request):
    if request.method == "POST":
        email = request.POST['email']
        content = request.POST['content']
        new_email = Email(email=email,content=content)
        new_email.save()
        emailexecute(email,content)
        return HttpResponse('success!')

def analytics(request):
    return render(request, 'analytics_home.html')
