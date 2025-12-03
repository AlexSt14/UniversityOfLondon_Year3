from django.http import JsonResponse, HttpResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from .models import *
from .serializers import *

@csrf_exempt
def gene_detail(request, pk):
    try:
        gene = Gene.objects.get(pk=pk)
    except Gene.DoesNotExist:
        return HttpResponse({'<p>Gene not found</p>'}, status=404)
    if request.method == 'GET':
        serializer = GeneSerializer(gene)
        return JsonResponse(serializer.data)

@csrf_exempt
def gene_list(request):
    if request.method == 'GET':
        try:
            genes = Gene.objects.all()
        except Gene.DoesNotExist:
            return HttpResponse({'<p>No genes found</p>'}, status=404)
        serializer = GeneSerializer(genes, many=True)
        return JsonResponse(serializer.data, safe=False)