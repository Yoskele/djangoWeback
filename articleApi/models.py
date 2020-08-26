from django.db import models

# Create your models here.
class Article(models.Model):
    slug = models.CharField(max_length=100, unique=True)
    content = models.TextField()
    image = models.ImageField(blank=True, upload_to="articleImage")
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return(
            self.slug
        )
