# Generated by Django 4.1 on 2022-11-07 09:38

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0009_delete_bomresult_uploadzip_zip_file_name'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='uploadzip',
            name='zip_file_name',
        ),
    ]
