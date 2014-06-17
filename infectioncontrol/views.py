"""
OPAL Infectioncontrol views
"""
from django.views.generic import TemplateView

from opal.utils.views import LoginRequiredMixin

class ICReportView(LoginRequiredMixin, TemplateView):
    template_name = 'ic/base.html'

class ICTemplateView(TemplateView):
    def dispatch(self, *args, **kwargs):
        self.name = kwargs['name']
        print 'here'
        return super(ICTemplateView, self).dispatch(*args, **kwargs)

    def get_template_names(self, *args, **kwargs):
        return ['ic/'+self.name]
