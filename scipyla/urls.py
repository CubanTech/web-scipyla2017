# -*- coding: utf-8 -*-

from django.conf.urls import url

from scipyla.views import *
from . import views

urlpatterns = [
    url(r'^$', IndexView.as_view(), name='index'),
    url(r'^organizers/$', OrganizersView.as_view(), name='organizers'),
    url(r'^agenda/$', AgendaView.as_view(), name='agenda'),
    url(r'^programs/$', ProgramsView.as_view(), name='programs'),
]