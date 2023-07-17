from django.urls import path
from .views import *

urlpatterns = [
    path('list', BlogListView.as_view()),
    path('blcatslug', ListarPostPorCategoriaView.as_view()),
    path('detalle/<slug>', PostDetallesView.as_view()),
    path('search', SearchBlogView.as_view())
]