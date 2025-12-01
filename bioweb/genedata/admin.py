from django.contrib import admin
from .models import *

class GeneAttributeAdmin(admin.TabularInline):
    model = GeneAttribute
    extra = 3

class GeneAdmin(admin.ModelAdmin):
    list_display = ('gene_id', 'entity', 'start', 'stop', 'sense', 'start_codon', 'sequencing', 'ec')
    inlines = [GeneAttributeAdmin]

class ECAdmin(admin.ModelAdmin):
    list_display = ('ec_name',)

class SequencingAdmin(admin.ModelAdmin):
    list_display = ('sequencing_factory', 'factory_location')

class ProductAdmin(admin.ModelAdmin):
    list_display = ('type', 'product', 'gene')

class AttributeAdmin(admin.ModelAdmin):
    list_display = ('key', 'value')



admin.site.register(Gene, GeneAdmin)
admin.site.register(EC, ECAdmin)
admin.site.register(Sequencing, SequencingAdmin)
admin.site.register(Product, ProductAdmin)
admin.site.register(Attribute, AttributeAdmin)
