from django.db import models

class Allcheck(models.Model):
	name = models.CharField(max_length=100)
	date = models.CharField(max_length=100)
	details = models.TextField(max_length=200)
	place = models.CharField(max_length=100)
	image = models.ImageField(upload_to='images/',null=True, blank=True)
	status = models.BooleanField(default=False)
	id = models.IntegerField(primary_key=True)


	def __str__(self):
		return self.name
