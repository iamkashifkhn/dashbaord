from rest_framework import serializers
from .models import UploadZip

class UploadZipSerializer(serializers.ModelSerializer):
    class Meta:
        model = UploadZip
        fields = ['zip_file_path', 'zip_file_name']


        #if you want to add user_id in serializer then you can add it in fields
        # fields = ['zip_file', 'user_id']
# class BomResultSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = BomResult
#         fields = '__all__'