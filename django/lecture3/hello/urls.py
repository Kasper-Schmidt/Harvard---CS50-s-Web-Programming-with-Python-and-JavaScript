from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("brian", views.brian, name="brian"),
    path("david", views.brian, name="david"),
    path("<str:name>", views.mojn, name="mojn"),
    path("<str:name>", views.greet, name="greet")

]