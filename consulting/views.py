from django.template.response import TemplateResponse

def web_root(request):
    response = TemplateResponse(request, 'index.html', {})
    return response
