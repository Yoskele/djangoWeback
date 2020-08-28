from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
# Create your Api views here.

from articleApi.models import Article
from articleApi.serializers import ArticleSerializer
# ArticleAPI viewset so we can see it at dashboard.
class ArticleViewSet(viewsets.ModelViewSet):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer

