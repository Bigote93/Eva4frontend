from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions

from .models import Post, ViewCount, Categorias

from .serializers import PostSerializer, PostListSerializer
from .pagination import SmallSetPagination, MediumSetPagination, LargeSetPagination

from django.db.models.query_utils import Q


# Create your views here.
class BlogListView(APIView):
    permission_classes = (permissions.AllowAny,)
    def get(self, request,format=None):

        if Post.postobject.all().exists():
            if Post.postobject.all().exists():
                posts = Post.postobject.all()

                paginator = SmallSetPagination()
                results = paginator.paginate_queryset(posts,request)

                serializer = PostListSerializer(results, many=True)


            return paginator.get_paginated_response({'posts': serializer.data})

        return Response(
            {'ERROR':'No se hallaron errores'},
            status=status.HTTP_404_NOT_FOUND
        )




class ListarPostPorCategoriaView(APIView):

    '''
        Este metodo generara por id de la categoria, por lo que aplicara la construccion del blog
        con la forma:

        http://127.0.0.1:8000/api/blog/blcatslug?blcatslug={blcatslug}

        Por lo que identificar un valor blcatslug no incorporado a categorias dara error 404
    '''


    permission_classes = (permissions.AllowAny,)

    def get(self, request, format=None):
        if Post.postobject.all().exists():

            blcatslug = request.query_params.get('blcatslug')


            catslug = Categorias.objects.get(slug = blcatslug)
            print('------', catslug)

            posts = Post.postobject.order_by('-published').all()

            if not Categorias.objects.filter(parent=catslug).exists():
                posts = posts.filter(categoria=catslug)
            else:
                sub_categorias_n = Categorias.objects.filter(parent=catslug)

                categorias_filtradas = [catslug]

                for cat in sub_categorias_n:
                    categorias_filtradas.append(cat)

                categorias_filtradas = tuple(categorias_filtradas)
                print('------', categorias_filtradas)

                posts = posts.filter(categoria__in=categorias_filtradas)

            paginador= SmallSetPagination()
            results = paginador.paginate_queryset(posts,request)
            serializador = PostListSerializer(results, many=True)

            return paginador.get_paginated_response({'posts': serializador.data})
        else:
            return Response({'error':'No existen post para esa categoria'}, status=status.HTTP_404_NOT_FOUND)

class PostDetallesView(APIView):

    permission_classes = (permissions.AllowAny,)
    def get(self, request, slug, format = None):
        if Post.postobject.filter(slug=slug).exists():

            post = Post.postobject.get(slug=slug)
            serializador = PostSerializer(post)

            address = request.META.get('HTTP_X_FORWARDED_FOR')
            if address:
                ip = address.split(',')[-1].strip()
            else:
                ip = request.META.get('REMOTE_ADDR')

            if not ViewCount.objects.filter(post=post, ip_address=ip):
                view = ViewCount(post=post, ip_address=ip)
                view.save()
                post.views +=1
                post.save()

            return Response({'posts':serializador.data}, status=status.HTTP_200_OK)

        else:
            return Response({'error': 'Posts doesn exists'}, status=status.HTTP_404_NOT_FOUND)

class SearchBlogView(APIView):
    permission_classes = (permissions.AllowAny,)
    def get(self, request, format=None):
        search_term = request.query_params.get('s')
        matches = Post.postobject.filter(
            Q(title__icontains=search_term) |
            Q(description__icontains=search_term) |
            Q(categoria__name__icontains=search_term)

        )
        print(matches)
        serializador = PostListSerializer(matches, many =True)
        return Response({'filtered_posts': serializador.data}, status=status.HTTP_200_OK)
