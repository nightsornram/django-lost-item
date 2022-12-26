from django.shortcuts import render, redirect
from django.http  import HttpResponse
from .forms import *
from .models import Allcheck
from django.contrib import messages
from django.core.paginator import Paginator


def Home(request):
	return render(request, 'myapp/home.html')

def Show(request):
	all = Allcheck.objects.all()
	paginator = Paginator(all,3) 
	page = request.GET.get('page')
	contacts = paginator.get_page(page)

	return render(request, 'myapp/show.html', {'contacts': contacts})


def Send(request):
	form = CheckForm(request.POST, request.FILES)
 
	if form.is_valid():
		form.save()
		return render(request, 'myapp/home.html')
	else:
		form = CheckForm()
	return render(request, 'myapp/send.html', {'form': form})

def Detail(request,pid):
	check = Allcheck.objects.get(id=pid)
	context = {'check':check}
	print(pid)

	return render(request,'myapp/details.html', context)
 




