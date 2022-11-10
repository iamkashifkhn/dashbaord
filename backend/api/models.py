from django.db import models

# Create your models here.
class UploadZip(models.Model):
    zip_file_path = models.FileField(upload_to='zip_files/', blank=False, null=True)
    zip_file_name = models.CharField(max_length=100, blank=False, null=True)
    # user_id = models.IntegerField(blank=False, null=True)

    def __str__(self):
        return self.zip_file_path

# class BomResult(models.Model):
#     link = models.CharField(max_length=500, blank=False, null=True)

#     def __str__(self):
#         return self.link