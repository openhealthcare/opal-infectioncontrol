"""
Plugin definition
"""
from opal.utils import OpalPlugin

from infectioncontrol import urls

class InfectionControlPlugin(OpalPlugin):
    urls = urls.urlpatterns
    javascript_namespace = 'opal.ic'
    javascripts = [
            'js/infectioncontrol.js',
            'js/controllers/report.js',
            ]
