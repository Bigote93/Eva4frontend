from rest_framework import serializers
from .models import *

class CategoriaSerializer(serializers.ModelSerializer):
    class Meta:
        model= Categorias
        fields = [
            'id',
            'name',
            'slug',
            'views'
        ]
