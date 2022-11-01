from django.shortcuts import render
from django.http import HttpResponseRedirect
from django.views.generic import ListView, DetailView
from .models import Post

# Create your views here.
class IndexView(ListView):
    template_name = 'blog/index.html'
    context_object_name = 'latest_blog_posts'

    def get_queryset(self):
        return Post.objects.order_by('-pub_date')

class PostDetailView(DetailView):
    model = Post
    template_name = 'blog/detail.html'