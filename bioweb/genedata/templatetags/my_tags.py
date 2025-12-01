import datetime
from django import template

register = template.Library()

@register.simple_tag
def todays_date():
    return datetime.date.today().strftime("%d %b, %Y")

@register.simple_tag
def author_name():
    return "A. Sthali"

@register.simple_tag
def data_rows(gene_list):
    return len(gene_list)