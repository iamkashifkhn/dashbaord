# Generated by Django 4.1 on 2022-09-30 08:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_rename_upload_zip_uploadzip'),
    ]

    operations = [
        migrations.AlterField(
            model_name='uploadzip',
            name='zip_file',
            field=models.FileField(null=True, upload_to='zip_files/'),
        ),
    ]
