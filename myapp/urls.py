#urls.py
from django.urls import path, include
from .views import Home , Send , Show , Detail
from django.conf import settings  
from django.conf.urls.static import static  


urlpatterns = [
    path('', Home , name = 'home-page'),
    path('send/', Send , name = 'send-page'),
    path('show/', Show , name = 'show-page'),
    path('details/<int:pid>', Detail, name='detail-page'),
] 

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)