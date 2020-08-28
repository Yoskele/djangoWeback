from django.contrib import admin
from django.urls import path, include, re_path
from django.conf.urls.static import static
from django.conf import settings
from . import views
from rest_framework import routers
from articleApi.views import ArticleViewSet



router = routers.DefaultRouter()
# register the links how you want it to start. and the function that comes from views.py file
router.register('articles', ArticleViewSet, basename="articles"),

from django.contrib.staticfiles.urls import staticfiles_urlpatterns


urlpatterns = [
    path('api/', include(router.urls)),
    path('admin/', admin.site.urls),
    path('', views.index),
    path('<reactPath>', views.urlCatcher),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)


# We need this two paths so we will always render the index.html
# from .views. If we dont have it it will give us  a 404 page when we 
# refresh in a page. we are making two request one from server and one from front.
# Now we catch all urls in a slug and send it to views. and return index.html.
# path('', views.index),
# path('<reactPath>', views.articleDetail),









## If i Dont include this the re_path will not include the static urls afterwards.
# This is to recive the images from
# Could be broken.
# urlpatterns += staticfiles_urlpatterns()
