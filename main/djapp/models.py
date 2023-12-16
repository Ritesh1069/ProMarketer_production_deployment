from django.db import models

# Create your models here.
class Bot(models.Model):
    phno = models.CharField(max_length=13)
    content = models.CharField(max_length=20000)

class Email(models.Model):    
    email = models.CharField(max_length=10000)
    content = models.CharField(max_length=50000)
    