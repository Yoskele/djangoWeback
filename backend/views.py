# Backend controler...
from django.shortcuts import render
from django.views.generic import TemplateView


class IndexView(TemplateView):
    template_name = "index.html"




    


# This works as well its a config. works well to get images and refresh page.
# urls.py
# path('', views.index),
# path('<reactPath>', views.urlCatcher),
# def index(request):
#     return render(request, 'index.html')
# def urlCatcher(request, reactPath):
#     return render(request, 'index.html')
# We catch all the urls we are making on the broswer and send
# it to urlCatcher and we return index. This is how we can re-render a page and still
# get all the images.