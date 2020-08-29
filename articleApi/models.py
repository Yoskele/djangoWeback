from django.db import models
from ckeditor.fields import RichTextField
from ckeditor_uploader.fields import RichTextUploadingField
# Create your models here.
class Article(models.Model):
    slug = models.CharField(max_length=100, unique=True)
    name = models.CharField(max_length=100)
    content = RichTextUploadingField(blank=True, null=True)
    articleLogo = models.ImageField(upload_to='articleImage', blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return(
            self.slug
        )
