from django.shortcuts import render
from django.http import HttpResponse, JsonResponse


# Create your views here.

# Index method. Returns the index template
def index(request):
	return render(request, 'viewerfrontend/index.html')

"""
	The following method is going to have two inputs going into it:

	1. The number guessed
	2. The probability of each number being typed as it's typed and the machine is analysing it

	These two variables are passed into the front-end as JSON data, which the front-end then
	parses to build the graph and the four digits from them. 
"""
def get_data(request):
	num_arr = [3531,2479,1357,1038, 4811]
	num_str_arr = [str(num) for num in num_arr]
	prob_arr = [
		[0.54, 0.32, 0.1, 0.01, 0.7, 0.9, 0.12, 0.76, 0.52, 0.23],
		[0.54, 0.32, 0.1, 0.01, 0.7, 0.9, 0.12, 0.76, 0.52, 0.23],
		[0.54, 0.32, 0.1, 0.01, 0.7, 0.9, 0.12, 0.76, 0.52, 0.23],
		[0.54, 0.32, 0.1, 0.01, 0.7, 0.9, 0.12, 0.76, 0.52, 0.23],
	]
	data_arr = {'guess': num_str_arr, 'probability': prob_arr}
	return JsonResponse(data_arr)
