from django.conf.urls import patterns, url

from infectioncontrol import views

urlpatterns = patterns(
    'ic',
    url(r'/templates/(?P<name>[a-z_]+.html)$', views.ICTemplateView.as_view()),
    url(r'/$', views.ICReportView.as_view()),
    )
