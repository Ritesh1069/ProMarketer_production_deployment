from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('index.html', views.index, name='index'),
    path('WhatsappBot.html', views.whatsapp, name='Whatsapp'),
    path('run', views.run, name='run'),
    path('EmailBot.html', views.emailsite, name='Emailsite' ),
    path('email', views.email, name="emails sent"),
    path('ContactUs.html', views.contact, name='ContactUs Page')
] 