from django.shortcuts import render
from django.http import HttpResponse
from .models import *

def index(request):
    response = Hello.objects.all()[0]
    return render(request, 'helloworld/index.html', {'data': response})

def simple_view(request):
    addresses = Address.Object.all()
    first_address = addresses[0]
    resident_name = str(first_address.resident)
    # html = "<html><body>Resident Name: " + resident_name + "</body></html>"
    return render(request, 'helloworld/simple.html', {'address': first_address, 'name': resident_name})
