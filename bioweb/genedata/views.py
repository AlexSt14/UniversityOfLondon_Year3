from django.shortcuts import render
from .models import *
from django.http import HttpResponseRedirect
from .forms import *


def index(request):
    master_genes = Gene.objects.all()
    return render(request, 'genedata/index.html', {'master_genes': master_genes})

def gene(request, pk):
    gene = Gene.objects.get(pk=pk)
    gene.access += 1
    print("Gene record: ", pk, " accessed ", str(gene.access), " times.")
    gene.save()
    master_genes = Gene.objects.all()
    return render(request, 'genedata/gene.html', {'gene': gene, 'master_genes': master_genes})

def list(request, type):
    gene = Gene.objects.filter(entity__exact=type)
    master_genes = Gene.objects.all()
    return render(request, 'genedata/list.html', {'genes': gene, 'type': type, 'master_genes': master_genes})

def poslist(request):
    gene = Gene.objects.filter(entity__exact="Chromosome").filter(sense__startswith="+")
    master_genes = Gene.objects.all()
    return render(request, 'genedata/list.html', {'genes': gene, 'type': "PosList", 'master_genes': master_genes})

def delete(request, pk):
    GeneAttribute.objects.filter(gene_id=pk).delete()
    Gene.objects.filter(pk=pk).delete()
    return HttpResponseRedirect('/')
    
def create_ec(request):
    master_genes = Gene.objects.all()
    if request.method == 'POST':
        form = ECForm(request.POST)
        if form.is_valid():
            ec = EC()
            ec.ec_name = form.cleaned_data['ec_name']
            ec.save()
            return HttpResponseRedirect('/create_ec/')
        else:
            return render(request, 'genedata/ec.html', {'error': 'failed', 'master_genes': master_genes, 'form': form})
    else:
        ecs = EC.objects.all()
        form = ECForm()
        return render(request, 'genedata/ec.html', {'form': form, 'ecs': ecs, 'master_genes': master_genes})

def create_gene(request):
    master_genes = Gene.objects.all()
    if request.method == 'POST':
        form = GeneForm(request.POST)
        if form.is_valid():
            gene = form.save()
            return HttpResponseRedirect('/create_gene/')
        else:
            return render(request, 'genedata/create_gene.html', {'error': 'failed', 'master_genes': master_genes, 'form': form})
    else:
        master_genes = Gene.objects.all()
        form = GeneForm()
        return render(request, 'genedata/create_gene.html', {'form': form, 'master_genes': master_genes})
    
