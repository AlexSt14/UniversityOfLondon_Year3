from django.shortcuts import render
from django.http import HttpResponse
from .models import *

# Create your views here.

def index(request):
    gpus = bestGPUs.objects.all()
    return render(request, 'index.html', {'gpus': gpus})