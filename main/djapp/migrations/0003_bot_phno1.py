# Generated by Django 4.2.6 on 2023-10-11 19:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('djapp', '0002_remove_bot_eadd_remove_bot_schd'),
    ]

    operations = [
        migrations.AddField(
            model_name='bot',
            name='phno1',
            field=models.IntegerField(default='9221326883'),
        ),
    ]
