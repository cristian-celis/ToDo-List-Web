from django.db import models

# Create your models for the database.

class Task(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    done = models.BooleanField(default=False)

# Get an instance and edit it
    def __str__(self):
        return self.title