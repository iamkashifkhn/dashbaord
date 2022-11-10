from django.urls import path, include, re_path
from django.views.generic import TemplateView
from django.contrib import admin
from rest_framework import routers
from api.views import UploadZipView
from django.conf.urls.static import static
from django.conf import settings
from api import views
 
# router = routers.DefaultRouter()
# router.register('upload_zip_test', UploadZipView, basename='upload_zip_test')

urlpatterns = [
    # path('', include(router.urls)),
    # path('upload_zip_test/', include("api.urls")),
    path('admin/', admin.site.urls),
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.jwt')),
    path('api/', include('api.urls')),
]

urlpatterns += [re_path(r'.*', TemplateView.as_view(template_name='index.html'))]
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)