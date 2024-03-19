from django.db import models

# Create your models here.
class Bot(models.Model):
    phno = models.CharField(max_length=13)
    content = models.CharField(max_length=20000)

class EmailContent(models.Model):
    email_csv = models.FileField(upload_to='csv/')
    content = models.TextField()
    