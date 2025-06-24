from django.http import JsonResponse

def hello(request):
    return JsonResponse({"message": "Это сообщение приходит из Django!"})