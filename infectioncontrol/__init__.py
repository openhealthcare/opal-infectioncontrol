"""
Plugin definition
"""
from opal.utils import OpalPlugin

from infectioncontrol import urls

class InfectionControlPlugin(OpalPlugin):
    urls = urls.urlpatterns
    javascripts = {
        'opal.ic': [
            'js/infectioncontrol.js',
            'js/controllers/report.js',
            ]
    }
