from rest_framework import generics

from .models import FAQSection, QuestionAndAnswer
from .serializers import FAQSectionSerializer, QandASerializer


class FAQSectionListView(generics.ListAPIView):
    queryset = FAQSection.objects.all()
    serializer_class = FAQSectionSerializer


class FAQSectionDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = FAQSection.objects.all()
    serializer_class = FAQSectionSerializer


class QandAListCreateView(generics.ListCreateAPIView):
    queryset = QuestionAndAnswer.objects.all()
    serializer_class = QandASerializer


class QandADetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = QuestionAndAnswer.objects.all()
    serializer_class = QandASerializer
