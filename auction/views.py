from django.shortcuts import render
from .models import User
from django.db import IntegrityError
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt


# Create your views here.
def index(request):
    return render(request,"auctions/index.html")

@csrf_exempt
def register(request):
    if request.method=="POST":
        username = request.POST['username']
        email = request.POST['email']
        password = request.POST['password']
        first_name=request.POST['first_name']
        last_name=request.POST['last_name']
        try:
            user=User.objects.create_user(username,email,password,first_name=first_name,last_name=last_name)
            user.save()
        except IntegrityError:
            data={
                "Send": 0,
                "error": "Username already taken"
            }
            return JsonResponse(data);
        data={
                "username":username,
                "email": email,
                "password": password,
                "first_name": first_name,
                "last_name": last_name,
                "Send": 1
            }
        return JsonResponse(data);
    else:
        data={
            "error":"occur"
        }
        return JsonResponse(data)


