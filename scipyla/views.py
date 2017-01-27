# -*- coding: utf-8 -*-

from django.http.response import HttpResponse, HttpResponseRedirect
from django.shortcuts import render

from django.views.generic.base import TemplateView, View
from django.views.generic.edit import CreateView, FormView

from scipyla.forms import ContactForm, SubscriptionForm


# Create your views here.

# --------- View Base Class for Index --------- #
class IndexView(FormView):
    form_class = ContactForm
    template_name = 'scipyla/index.html'


# --------- View Base Class for Organizers --------- #
class OrganizersView(TemplateView):
    template_name = 'scipyla/organizers.html'


# --------- View Base Class for Agenda --------- #
class AgendaView(TemplateView):
    template_name = 'scipyla/agenda.html'


# --------- View Base Class for Programs --------- #
class ProgramsView(TemplateView):
    template_name = 'scipyla/programs.html'


