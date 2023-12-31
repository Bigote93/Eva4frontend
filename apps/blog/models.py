from django.db import models
from django.utils import timezone
from ckeditor.fields import RichTextField
from ckeditor_uploader.fields import RichTextUploadingField

from apps.categorias.models import Categorias


# Create your models here.

def blog_thumbnail_directory(instance, filename):
    return 'blog/{0}/{1}'.format(instance.title, filename)

class Post(models.Model):

    class PostObjects(models.Manager):
        def get_queryset(self):
            return super().get_queryset().filter(status='published')

    options = [
        ('draft','Draft'),
        ('published','Published'),
    ]

    title = models.CharField(max_length=255)

    slug = models.SlugField(max_length=255, unique=True)
    thumbnail = models.ImageField(upload_to=blog_thumbnail_directory)

    excerpt = models.CharField(max_length=255)

    description = RichTextUploadingField()

    views = models.IntegerField(default=0, blank=True)

    time_read = models.IntegerField()

    published = models.DateTimeField(default=timezone.now)

    categoria = models.ForeignKey(Categorias, on_delete=models.PROTECT)

    status = models.CharField(max_length=10, choices=options, default='draft')

    objects = models.Manager()
    postobject = PostObjects()

    class Meta:
        ordering = ('-published',)

    def __str__(self):
        return self.title

    def get_view_count(self):
        views = ViewCount.objects.filter(post=self).count()
        return views

class ViewCount(models.Model):
    post = models.ForeignKey(
        Post,
        related_name='blogpost_view_count',
        on_delete=models.CASCADE
    )
    ip_address = models.CharField(max_length=255)

    def __str__(self):
        return f"{self.ip_address}"