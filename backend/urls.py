from django.contrib import admin
from django.urls import path, include, re_path
from django.conf.urls.static import static
from django.conf import settings

from rest_framework import routers
from articleApi.views import ArticleViewSet


router = routers.DefaultRouter()
# register the links how you want it to start. and the function that comes from views.py file
router.register('articles', ArticleViewSet, basename="articles"),

from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from .views import IndexView

urlpatterns = [
    # IndexView is Frontend React.
    path('api/', include(router.urls)),
    path('', IndexView.as_view()),
    path('<path>', IndexView.as_view()),
    path('admin/', admin.site.urls),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)




# We need this two paths so we will always render the index.html
# from .views. If we dont have it it will give us  a 404 page when we 
# refresh in a page. we are making two request one from server and one from front.
# Now we catch all urls in a slug and send it to views. and return index.html.
# path('', views.index),
# path('<reactPath>', views.articleDetail),









## If i Dont include this the re_path will not include the static urls afterwards.
# This is to recive the images from
# Could be broken. might need in collecrstatic at pythonanywhere
# urlpatterns += staticfiles_urlpatterns()
