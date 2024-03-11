from django.contrib import admin
from .models import SubscriptionPlan, UserSubscription

admin.site.register(UserSubscription)
admin.site.register(SubscriptionPlan)

# Register your models here.
