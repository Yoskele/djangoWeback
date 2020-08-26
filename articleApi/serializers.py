from rest_framework import serializers
from articleApi.models import Article

class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = 'id', 'slug', 'content', 'image' 