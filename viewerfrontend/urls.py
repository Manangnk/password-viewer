from django.urls import path
from . import views

urlpatterns = [
	path('', views.index, name = "index"),

	# AJAX URL to poll for the guess data
	path('data/', views.get_data, name = "get_data"),
]