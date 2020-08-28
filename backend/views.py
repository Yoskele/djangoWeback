# Backend controler...
from django.shortcuts import render

def index(request):
    return render(request, 'index.html')


# We catch all the urls we are making on the broswer and send
# it to urlCatcher and we return index. This is how we can re-render a page and still
# get all the images.
def urlCatcher(request, reactPath):
    return render(request, 'index.html')