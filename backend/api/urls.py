from django.urls import path
from django.views.generic import TemplateView
from django.contrib import admin
from rest_framework import routers
# from api.views import UploadZipViewSet
# from django.conf.urls.static import static
from django.conf import settings
from api import views
from .views import UploadZipView
from .views import getBomResponse
 
# router = routers.DefaultRouter()
# router.register('upload_zip_test', UploadZipViewSet)

urlpatterns = [
    path('upload_zip_test/' , UploadZipView.as_view()),
    path('getBomResponse/' , getBomResponse.as_view()),
    path('getRepositories/', views.getRepositories.as_view()),
    path('getDate/', views.getDate.as_view()),
    # path('getrepos', views.getRepos.as_view()),
]