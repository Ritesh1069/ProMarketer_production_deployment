# Generated by Django 4.2.6 on 2023-10-11 19:12

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('djapp', '0003_bot_phno1'),
    ]

    operations = [
        migrations.RenameField(
            model_name='bot',
            old_name='phno1',
            new_name='phno',
        ),
    ]