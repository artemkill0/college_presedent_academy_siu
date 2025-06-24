from django.urls import path
from api.views import hello

urlpatterns = [
    # ... твои другие пути
    path('api/hello/', hello),
]
