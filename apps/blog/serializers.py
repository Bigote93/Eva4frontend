from rest_framework import serializers
from .models import *
from apps.categorias.serializers import CategoriaSerializer


class PostSerializer(serializers.ModelSerializer):
    categoria = CategoriaSerializer()
    class Meta:
        model= Post
        fields = [
            'id',
            'title',
            'slug',
            'thumbnail',
            'excerpt',
            'description',
            'time_read',
            'published',
            'views',
            'categoria'

        ]

class PostListSerializer(serializers.ModelSerializer):

    categoria = CategoriaSerializer()
    class Meta:
        model= Post
        fields = [
            'id',
            'title',
            'slug',
            'thumbnail',
            'description',
            'time_read',
            'published',
            'views',
            'categoria'

        ]