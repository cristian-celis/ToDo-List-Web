from rest_framework import viewsets
from .serializer import TaskSerializer
from .models import Task

# Data to be consulted in the crud.

class TaskView(viewsets.ModelViewSet):
    serializer_class = TaskSerializer
    queryset = Task.objects.all()
