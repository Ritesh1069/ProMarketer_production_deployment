from django.shortcuts import render
from .models import Bot,EmailContent
from django.http import HttpResponse, JsonResponse
from .apps import execute,emailexecute
from .emailbot import sendMail  # Importing the sendMail function from emailbot.py


# Create your views here.
def index(request):
    return render(request, 'index.html')

def whatsapp(request):
    return render(request, 'WhatsappBot.html')

def emailsite(request):
    return render(request, 'EmailBot.html')

def contact(request):
    return render(request, 'ContactUs.html')

def insta_analytics(request):
    return render(request, 'DashIndex.html')

def run(request):
    if request.method == 'POST':
        phone_num = request.POST['phno']
        content = request.POST['content']
        new_phno = Bot(phno=phone_num,content=content)
        new_phno.save()
        execute(phone_num,content)
        return HttpResponse('success!')

# def  email(request):
#     if request.method == "POST":
#         email = request.POST['email']
#         content = request.POST['content']
#         new_email = Email(email=email,content=content)
#         new_email.save()
#         emailexecute(email,content)
#         return HttpResponse('success!')
    
    # def send_emails(request):
    #   if request.method == 'POST':
    #     # Process form data and send emails
    #     # Sample code to handle CSV file and content
    #     email_csv = request.FILES['email_csv']
    #     content = request.POST.get('content')
    #     # Your email sending logic here
    #     return JsonResponse({'message': 'Emails sent successfully!'})
    #   return JsonResponse({'message': 'Invalid request'}, status=400)

    def send_emails(request):
      if(request.method == 'POST'):
        # Retrieve necessary data from the request
        to_email = request.POST.get('to_email')  # Assuming 'to_email' is provided by the user
        subject = request.POST.get('subject')  # Assuming 'subject' is provided by the user
        message_content = request.POST.get('message_content')  # Assuming 'message_content' is provided by the user
        
        # Call the sendMail function with the retrieved data
        try:
            sendMail(to_email, subject, message_content)
            return JsonResponse({'message': 'Emails sent successfully!'})
        except Exception as e:
            return JsonResponse({'message': f'Failed to send emails: {str(e)}'}, status=500)

    return JsonResponse({'message': 'Invalid request'}, status=400)

def analytics(request):
    return render(request, 'analytics_home.html')
