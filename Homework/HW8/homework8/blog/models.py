from django.db import models

# Create your models here.
class Post(models.Model):
    title = models.CharField(max_length=100)
    content = models.CharField(max_length=1500)
    author_name = models.CharField(max_length=50)
    pub_date = models.DateTimeField(auto_now_add=True)
