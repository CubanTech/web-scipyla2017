# -*- coding: utf-8 -*-

from django import forms
from django.contrib.admin import widgets
from django.forms.widgets import *

class SubscriptionForm(forms.Form):
    email = forms.EmailField(required=True, label='Email*', widget=forms.TextInput(attrs={'placeholder': 'inserte aqui su email*', 'class': 'form-control'}))


class ContactForm(forms.Form):
    name = forms.CharField(required=True, label='Nombre*', max_length=100, widget=forms.TextInput(attrs={'placeholder': 'Nombre*', 'class': 'form-control'}))
    email = forms.EmailField(required=True, label='Email*', widget=forms.TextInput(attrs={'placeholder': 'Email*', 'class': 'form-control'}))
    phone = forms.IntegerField(label='Teléfono', widget=forms.TextInput(attrs={'placeholder': 'Teléfono', 'class': 'form-control'}))
    company = forms.CharField(label='Empresa', widget=forms.TextInput(attrs={'placeholder': 'Compañía', 'class': 'form-control'}))
    subject = forms.CharField(label='Asunto', widget=forms.TextInput(attrs={'placeholder': 'Asunto', 'class': 'form-control'}))
    message = forms.CharField(widget=forms.Textarea(attrs={'placeholder': 'Mensaje', 'class': 'form-control', 'row': 4}))
