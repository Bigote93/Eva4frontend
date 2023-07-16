from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions
from .models import Categorias

class ListaCategoriasView(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self,request, format= None):
        if Categorias.objects.all().exists():
            categorias_n = Categorias.objects.all()

            result = []

            for categoria_x in categorias_n:
                if not categoria_x.parent:
                    item = {}
                    item['id'] = categoria_x.id
                    item['name'] = categoria_x.name
                    item['slug'] = categoria_x.slug
                    item['views'] = categoria_x.views

                    item['sub_categorias'] = []
                    for sub_categoria in categorias_n:
                        sub_item = {}
                        if sub_categoria.parent and sub_categoria.parent.id == categoria_x.id:
                            sub_item['id'] = sub_categoria.id
                            sub_item['name'] = sub_categoria.name
                            sub_item['slug'] = sub_categoria.slug
                            sub_item['views'] = sub_categoria.views

                            item['sub_categorias'].append(sub_item)

                    result.append(item)



            return Response(
                {'categorias':result},
                status.HTTP_200_OK
            )
        else:
            return Response(
                {'error': 'No existen categorias'},
                status=status.HTTP_404_NOT_FOUND
            )