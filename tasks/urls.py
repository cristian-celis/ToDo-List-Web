from django.urls import path, include
from rest_framework.documentation import include_docs_urls
from rest_framework import routers
from tasks import views

# Routes to be consulted from frontend

router = routers.DefaultRouter()
router.register(r'tasks', views.TaskView, 'tasks')

# api versioning
urlpatterns = [
    path("api/v1/", include(router.urls)),
    path('docs/', include_docs_urls(title="Tasks api"))
]