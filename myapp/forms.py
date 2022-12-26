from django import forms
from .models import *
  
  
class CheckForm(forms.ModelForm):
    error_css_class = 'error-feild'
    name = forms.CharField(widget=forms.TextInput(attrs={'class': 'form-control',
    "placeholder": 'กระเป๋าสตางค์สีดำ'}))
    date = forms.CharField(widget=forms.TextInput(attrs={'class': 'form-control',
    "placeholder": '10.00 : 12/04/2565'}))
    details = forms.CharField(widget=forms.TextInput(attrs={'class': 'form-control',
    "placeholder": 'มีเงินสด 200 บาท'}))
    place = forms.CharField(widget=forms.TextInput(attrs={'class': 'form-control',
    "placeholder": 'สนามฟุตบอล'}))


    class Meta:
        model = Allcheck
        fields = ['name', 'date',  'place' , 'details',  'image']
