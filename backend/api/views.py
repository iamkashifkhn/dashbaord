from django.shortcuts import render
from .models import  UploadZip
from .serializers import UploadZipSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
import requests,json

class UploadZipView(APIView):
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        queryset = UploadZip.objects.all()
        serializer = UploadZipSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            path= serializer.data['zip_file_path']
            print(path)
            zip_file_name= serializer.data['zip_file_name']
            data = {'zip_file_path': path, 'zip_file_name': zip_file_name}
            print("zip file name",zip_file_name)
            # user_id = serializer.data['user_id']
            # user_id = serializer.data['user_id']
            # print("User id is", user_id)
            endpoints = 'http://localhost:8080/getapi/'

            data = requests.post(endpoints ,params={'params':'Query Parameters'}, json=data)
            # data = json.loads(getResponse.json())
            response_data = {
    	        "data": data
            }
            getResponse = response_data
            
            # if we want to send user id to backend then we can send it in params
            # getResponse = requests.get(endpoints ,params={'params':'Query Parameters'}, json={'Data' : path, 'user_id': user_id})
            print ("our get response", getResponse)

            return Response(getResponse, status=200)
        else:
            return Response(serializer.errors, status=400)
# @api_view(['GET','POST'])
# @authentication_classes([])
# @permission_classes([])
# def getBomResponse(request):
#     if request.method == 'POST':
#         serializer = BomResultSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=201)
#         else:
#             return Response(serializer.errors, status=400)
#     elif request.method == 'GET':
#         data = BomResult.objects.all()
#         print("we are here")
#         serializer = BomResultSerializer(data, many = True)
#         return Response(serializer.data,status=200)





# class getBomResponse(APIView):
#     permission_classes = [AllowAny]
#     def post(self, request, *args, **kwargs):
#             data = request.data
#             print("we are here", data)
#             return Response(data, status=200)



class getBomResponse(APIView):
    permission_classes = [AllowAny]
    print("WE ARE IN GETBOMRESPONSE")
    def post(self, request, *args, **kwargs):
            print("OKEYYYYYYYYYYYYYY")
            # endpoint = 'http://localhost:8082/getResults/'
            # getResponse = requests.get(endpoint ,params={'params':'Query Parameters'}, )
            # print (getResponse.json())
            # data = request.data
            # print("we are here", data)
            data = [
                {
                    "id": 1,
                    "Author": "Kashif Usman",
                    "Repo Name": "Index.js",
                    "File Name": "app.css",
                    "File Matched with": "home.js",
                    "Similarity": "41%",
                    "License": "Apache",
                    "URL": "github.com/shahmir"
                },
                {
                    "id": 2,
                    "Author": "Shahrukh Khan",
                    "Repo Name": "Index.js",
                    "File Name": "app.css",
                    "File Matched with": "home.js",
                    "Similarity": "45%",
                    "License": "Apache",
                    "URL": "github.com/shahmir"
                },
                {
                    "id": 3,
                    "Author": "Shahmir Khan",
                    "Repo Name": "Index.js",
                    "File Name": "app.css",
                    "File Matched with": "home.js",
                    "Similarity": "15%",
                    "License": "Apache",
                    "URL": "github.com/shahmir"
                },
                {
                    "id": 4,
                    "Author": "Raiha Narmeen",
                    "Repo Name": "Index.js",
                    "File Name": "app.css",
                    "File Matched with": "home.js",
                    "Similarity": "25%",
                    "License": "Apache",
                    "URL": "github.com/shahmir"
                },
                                {
                    "id": 5,
                    "Author": "Raiha Narmeen",
                    "Repo Name": "Index.js",
                    "File Name": "app.css",
                    "File Matched with": "home.js",
                    "Similarity": "33%",
                    "License": "Apache",
                    "URL": "github.com/shahmir"
                },
                                {
                    "id": 6,
                    "Author": "TheAlgorithms",
                    "Repo Name": "TheAlgorithms_Java-main",
                    "File Name": "KDTreeTest",
                    "File Matched with": "AbsoluteMinTest",
                    "Similarity": "35%",
                    "License": "MIT license",
                    "URL": "https://www.github.com/TheAlgorithms/Java"
                },
                                                {
                    "id": 7,
                    "Author": "Muneeb KHAN",
                    "Repo Name": "Index.js",
                    "File Name": "app.css",
                    "File Matched with": "home.js",
                    "Similarity": "35%",
                    "License": "Apache",
                    "URL": "github.com/shahmir"
                },
                
                
            ]
            
            # data = {'author': ['TheAlgorithms', 'TheAlgorithms', 'TheAlgorithms', 'TheAlgorithms', 'TheAlgorithms', 'TheAlgorithms', 'TheAlgorithms', 'TheAlgorithms', 'TheAlgorithms', 'TheAlgorithms', 'TheAlgorithms', 'TheAlgorithms', 'TheAlgorithms', 'TheAlgorithms', 'TheAlgorithms', 'TheAlgorithms', 'TheAlgorithms', 'TheAlgorithms', 'TheAlgorithms', 'TheAlgorithms', 'TheAlgorithms', 'TheAlgorithms', 'TheAlgorithms', 'TheAlgorithms', 'TheAlgorithms', 'TheAlgorithms', 'TheAlgorithms', 'TheAlgorithms', 'TheAlgorithms', 'TheAlgorithms', 'TheAlgorithms', 'TheAlgorithms', 'TheAlgorithms'], 'Repo Name': ['TheAlgorithms_Java-main', 'TheAlgorithms_Java-main', 'TheAlgorithms_Java-main', 'TheAlgorithms_Java-main', 'TheAlgorithms_Java-main', 'TheAlgorithms_Java-main', 'TheAlgorithms_Java-main', 'TheAlgorithms_Java-main', 'TheAlgorithms_Java-main', 'TheAlgorithms_Java-main', 'TheAlgorithms_Java-main', 'TheAlgorithms_Java-main', 'TheAlgorithms_Java-main', 'TheAlgorithms_Java-main', 'TheAlgorithms_Java-main', 'TheAlgorithms_Java-main', 'TheAlgorithms_Java-main', 'TheAlgorithms_Java-main', 'TheAlgorithms_Java-main', 'TheAlgorithms_Java-main', 'TheAlgorithms_Java-main', 'TheAlgorithms_Java-main', 'TheAlgorithms_Java-main', 'TheAlgorithms_Java-main', 'TheAlgorithms_Java-main', 'TheAlgorithms_Java-main', 'TheAlgorithms_Java-main', 'TheAlgorithms_Java-main', 'TheAlgorithms_Java-main', 'TheAlgorithms_Java-main', 'TheAlgorithms_Java-main', 'TheAlgorithms_Java-main', 'TheAlgorithms_Java-main'], 'File Name': ['HashMapCuckooHashingTest', 'HashMapCuckooHashingTest', 'HashMapCuckooHashingTest', 'KDTreeTest', 'KDTreeTest', 'KDTreeTest', 'KDTreeTest', 'KDTreeTest', 'KDTreeTest', 'KDTreeTest', 'KDTreeTest', 'KDTreeTest', 'KDTreeTest', 'KDTreeTest', 'KDTreeTest', 'KDTreeTest', 'KDTreeTest', 'KDTreeTest', 'KDTreeTest', 'KDTreeTest', 'KDTreeTest', 'KDTreeTest', 'LazySegmentTreeTest', 'LazySegmentTreeTest', 'LazySegmentTreeTest', 'LazySegmentTreeTest', 'LazySegmentTreeTest', 'LazySegmentTreeTest', 'LazySegmentTreeTest', 'LazySegmentTreeTest', 'LazySegmentTreeTest', 'LazySegmentTreeTest', 'LazySegmentTreeTest'], 'File Matched with': ['HashMapCuckooHashing', 'HashMapCuckooHashingTest', 'SkipListTest', 'AbsoluteMaxTest', 'AbsoluteMinTest', 'PolybiusTest', 'LFUCacheTest', 'GenericHashMapUsingArrayListTest', 'GenericHashMapUsingArrayTest', 'KDTreeTest', 'LazySegmentTreeTest', 'CeilTest', 'CombinationsTest', 'DigitalRootTest', 'FindMinTest', 'GCDTest', 'PythagoreanTripleTest', 'SumOfDigitsTest', 'CalculateMaxOfMinTest', 'KadaneAlogrithmTest', 'LinkListSortTest', 'HammingDistanceTest', 'LFUCacheTest', 'GenericHashMapUsingArrayListTest', 'GenericHashMapUsingArrayTest', 'KDTreeTest', 'LazySegmentTreeTest', 'ADTFractionTest', 'CombinationsTest', 'SumOfDigitsTest', 'ArrayLeftRotationTest', 'KadaneAlogrithmTest', 'LinkListSortTest'], 'Similarity': ['16%', '100%', '17%', '18%', '18%', '16%', '18%', '19%', '19%', '100%', '19%', '16%', '20%', '17%', '16%', '16%', '17%', '17%', '18%', '18%', '18%', '18%', '16%', '17%', '17%', '19%', '100%', '17%', '17%', '16%', '16%', '16%', '16%'], 'License': ['MIT license', 'MIT license', 'MIT license', 'MIT license', 'MIT license', 'MIT license', 'MIT license', 'MIT license', 'MIT license', 'MIT license', 'MIT license', 'MIT license', 'MIT license', 'MIT license', 'MIT license', 'MIT license', 'MIT license', 'MIT license', 'MIT license', 'MIT license', 'MIT license', 'MIT license', 'MIT license', 'MIT license', 'MIT license', 'MIT license', 'MIT license', 'MIT license', 'MIT license', 'MIT license', 'MIT license', 'MIT license', 'MIT license'], 'URL': ['https://www.github.com/TheAlgorithms/Java', 'https://www.github.com/TheAlgorithms/Java', 'https://www.github.com/TheAlgorithms/Java', 'https://www.github.com/TheAlgorithms/Java', 'https://www.github.com/TheAlgorithms/Java', 'https://www.github.com/TheAlgorithms/Java', 'https://www.github.com/TheAlgorithms/Java', 'https://www.github.com/TheAlgorithms/Java', 'https://www.github.com/TheAlgorithms/Java', 'https://www.github.com/TheAlgorithms/Java', 'https://www.github.com/TheAlgorithms/Java', 'https://www.github.com/TheAlgorithms/Java', 'https://www.github.com/TheAlgorithms/Java', 'https://www.github.com/TheAlgorithms/Java', 'https://www.github.com/TheAlgorithms/Java', 'https://www.github.com/TheAlgorithms/Java', 'https://www.github.com/TheAlgorithms/Java', 'https://www.github.com/TheAlgorithms/Java', 'https://www.github.com/TheAlgorithms/Java', 'https://www.github.com/TheAlgorithms/Java', 'https://www.github.com/TheAlgorithms/Java', 'https://www.github.com/TheAlgorithms/Java', 'https://www.github.com/TheAlgorithms/Java', 'https://www.github.com/TheAlgorithms/Java', 'https://www.github.com/TheAlgorithms/Java', 'https://www.github.com/TheAlgorithms/Java', 'https://www.github.com/TheAlgorithms/Java', 'https://www.github.com/TheAlgorithms/Java', 'https://www.github.com/TheAlgorithms/Java', 'https://www.github.com/TheAlgorithms/Java', 'https://www.github.com/TheAlgorithms/Java', 'https://www.github.com/TheAlgorithms/Java', 'https://www.github.com/TheAlgorithms/Java']}
            # data= json.dumps(data)
            print(data)
            return Response(data, status=200)

# class getRepositories(APIView):
#     permission_classes = [AllowAny]
#     print("WE ARE IN GETBOMRESPONSE")
#     def get(self, request, *args, **kwargs):
#             print("GOT API RESPONSE hello")
#             return Response('data', status=200)

class getRepositories(APIView):
    permission_classes = [AllowAny]
    print("WE ARE IN GETBOMRESPONSE pakistan")
    def get(self, request, *args, **kwargs):
            # print(request.data['ID'])
            data = [{'ID': 1, 'Project Name': 'App', 'Date': '28-09-2022'}, {'ID': 2, 'Project Name': 'App', 'Date': '30-09-2022'}, {'ID': 3, 'Project Name': 'App', 'Date': '30-09-2022'}, {'ID': 4, 'Project Name': 'App_mMaNECa', 'Date': 'Submitted Date: 17-10-2022'}, {'ID': 5, 'Project Name': 'App_eX3o20d', 'Date': 'Submitted Date: 18-10-2022'}, {'ID': 6, 'Project Name': 'App_8eToHkh', 'Date': 'Submitted Date: 21-10-2022'}, {'ID': 7, 'Project Name': 'App_ZWwEgl6', 'Date': 'Submitted Date: 24-10-2022'}, {'ID': 8, 'Project Name': 'JavaProject_8gEfVUp', 'Date': 'Submitted Date: 24-10-2022'}, {'ID': 9, 'Project Name': 'JavaProject_lpweH2j', 'Date': 'Submitted Date: 24-10-2022'}, {'ID': 10, 'Project Name': 'App_36UU5wW', 'Date': 'Submitted Date: 24-10-2022'}, {'ID': 11, 'Project Name': 'JavaProject_m3pUiAX', 'Date': 'Submitted Date: 24-10-2022'}, {'ID': 12, 'Project Name': 'JavaProject_5G7m912', 'Date': 'Submitted Date: 24-10-2022'}, {'ID': 13, 'Project Name': 'JavaProject_RdAwo6g', 'Date': 'Submitted Date: 24-10-2022'}, {'ID': 14, 'Project Name': 'JavaProject_cPOeXdh', 'Date': 'Submitted Date: 24-10-2022'}, {'ID': 15, 'Project Name': 'JavaProject_03uiWNW', 'Date': 'Submitted Date: 24-10-2022'}, {'ID': 16, 'Project Name': 'JavaProject_G6GSyrV', 'Date': 'Submitted Date: 24-10-2022'}, {'ID': 17, 'Project Name': 'App_ZjYt1ZZ', 'Date': 'Submitted Date: 26-10-2022'}, {'ID': 18, 'Project Name': 'App_JBDYb5R', 'Date': 'Submitted Date: 26-10-2022'}, {'ID': 19, 'Project Name': 'App_UJh8kWz', 'Date': 'Submitted Date: 26-10-2022'}, {'ID': 20, 'Project Name': 'App_RsYOLvE', 'Date': 'Submitted Date: 26-10-2022'}, {'ID': 21, 'Project Name': 'JavaProject_pB6VTVB', 'Date': 'Submitted Date: 26-10-2022'}, {'ID': 22, 'Project Name': 'JavaProject_kJrnkcP', 'Date': 'Submitted Date: 27-10-2022'}, {'ID': 23, 'Project Name': 'JavaProject_QhAgjFT', 'Date': 'Submitted Date: 27-10-2022'}, {'ID': 24, 'Project Name': 'JavaProject_GB8Hs2x', 'Date': 'Submitted Date: 27-10-2022'}, {'ID': 25, 'Project Name': 'JavaProject_kXoifjE', 'Date': 'Submitted Date: 27-10-2022'}, {'ID': 26, 'Project Name': 'JavaProject_rQY1LwC', 'Date': 'Submitted Date: 27-10-2022'}, {'ID': 27, 'Project Name': 'javaproject2', 'Date': 'Submitted Date: 27-10-2022'}, {'ID': 28, 'Project Name': 'javaproject2_IBNcDtk', 'Date': 'Submitted Date: 27-10-2022'}, {'ID': 29, 'Project Name': 'javaproject2_b02co5p', 'Date': 'Submitted Date: 27-10-2022'}, {'ID': 30, 'Project Name': 'javaproject2_06YCFNA', 'Date': 'Submitted Date: 27-10-2022'}]
            print("GOT API RESPONSE hello")
            return Response(data, status=200)
import datetime

class getDate(APIView):
    permission_classes = [AllowAny]
    def get(self, request, *args, **kwargs):
            # print(request.data['ID'])
            date = datetime.datetime.now().strftime("%d-%m-%Y")
            print(date)
            data=[{"Date":date}]
            # dateintojson = json.dumps(data)
            # data = [{'ID': 1, 'Project Name': 'App', 'Date': '28-09-2022'}, {'ID': 2, 'Project Name': 'App', 'Date': '30-09-2022'}, {'ID': 3, 'Project Name': 'App', 'Date': 'Submitted Date: 30-09-2022'}, {'ID': 4, 'Project Name': 'App_mMaNECa', 'Date': 'Submitted Date: 17-10-2022'}, {'ID': 5, 'Project Name': 'App_eX3o20d', 'Date': 'Submitted Date: 18-10-2022'}, {'ID': 6, 'Project Name': 'App_8eToHkh', 'Date': 'Submitted Date: 21-10-2022'}, {'ID': 7, 'Project Name': 'App_ZWwEgl6', 'Date': 'Submitted Date: 24-10-2022'}, {'ID': 8, 'Project Name': 'JavaProject_8gEfVUp', 'Date': 'Submitted Date: 24-10-2022'}, {'ID': 9, 'Project Name': 'JavaProject_lpweH2j', 'Date': 'Submitted Date: 24-10-2022'}, {'ID': 10, 'Project Name': 'App_36UU5wW', 'Date': 'Submitted Date: 24-10-2022'}, {'ID': 11, 'Project Name': 'JavaProject_m3pUiAX', 'Date': 'Submitted Date: 24-10-2022'}, {'ID': 12, 'Project Name': 'JavaProject_5G7m912', 'Date': 'Submitted Date: 24-10-2022'}, {'ID': 13, 'Project Name': 'JavaProject_RdAwo6g', 'Date': 'Submitted Date: 24-10-2022'}, {'ID': 14, 'Project Name': 'JavaProject_cPOeXdh', 'Date': 'Submitted Date: 24-10-2022'}, {'ID': 15, 'Project Name': 'JavaProject_03uiWNW', 'Date': 'Submitted Date: 24-10-2022'}, {'ID': 16, 'Project Name': 'JavaProject_G6GSyrV', 'Date': 'Submitted Date: 24-10-2022'}, {'ID': 17, 'Project Name': 'App_ZjYt1ZZ', 'Date': 'Submitted Date: 26-10-2022'}, {'ID': 18, 'Project Name': 'App_JBDYb5R', 'Date': 'Submitted Date: 26-10-2022'}, {'ID': 19, 'Project Name': 'App_UJh8kWz', 'Date': 'Submitted Date: 26-10-2022'}, {'ID': 20, 'Project Name': 'App_RsYOLvE', 'Date': 'Submitted Date: 26-10-2022'}, {'ID': 21, 'Project Name': 'JavaProject_pB6VTVB', 'Date': 'Submitted Date: 26-10-2022'}, {'ID': 22, 'Project Name': 'JavaProject_kJrnkcP', 'Date': 'Submitted Date: 27-10-2022'}, {'ID': 23, 'Project Name': 'JavaProject_QhAgjFT', 'Date': 'Submitted Date: 27-10-2022'}, {'ID': 24, 'Project Name': 'JavaProject_GB8Hs2x', 'Date': 'Submitted Date: 27-10-2022'}, {'ID': 25, 'Project Name': 'JavaProject_kXoifjE', 'Date': 'Submitted Date: 27-10-2022'}, {'ID': 26, 'Project Name': 'JavaProject_rQY1LwC', 'Date': 'Submitted Date: 27-10-2022'}, {'ID': 27, 'Project Name': 'javaproject2', 'Date': 'Submitted Date: 27-10-2022'}, {'ID': 28, 'Project Name': 'javaproject2_IBNcDtk', 'Date': 'Submitted Date: 27-10-2022'}, {'ID': 29, 'Project Name': 'javaproject2_b02co5p', 'Date': 'Submitted Date: 27-10-2022'}, {'ID': 30, 'Project Name': 'javaproject2_06YCFNA', 'Date': 'Submitted Date: 27-10-2022'}]
            print("GOT API RESPONSE hello")
            return Response(data, status=200)
# class getRepos(APIView):
#     permission_classes = [AllowAny]
#     print("WE ARE IN GETBOMRESPONSE")
#     def get(self, request, *args, **kwargs):
#             print("GOT API RESPONSE hello")
#             return Response(data, status=200)
            





        

