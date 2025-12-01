from django.db import models

# Create your models here.

class bestGPUs(models.Model):
    name = models.CharField(max_length=200)
    price = models.FloatField()

    def __str__(self):
        return self.name