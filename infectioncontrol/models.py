"""
Infection control Models
"""
from django.db import models

from opal.models import EpisodeSubrecord,option_models
from opal.utils.fields import ForeignKeyOrFreeText

class ReportedInfection(EpisodeSubrecord):
    """
    Some human notes explaining what this is!
    """
    suspected = models.NullBooleanField(blank=True, null=True)
    infection = ForeignKeyOrFreeText(option_models['condition'])
    date_reported = models.DateField(blank=True, null=True)


class InfectionControlAdvice(EpisodeSubrecord):
    _sort = 'date'

    date = models.DateField(null=True, blank=True)
    initials = models.CharField(max_length=255, blank=True)
    clinical_discussion = models.TextField(blank=True)
    agreed_plan = models.TextField(blank=True)
    discussed_with = models.CharField(max_length=255, blank=True)
