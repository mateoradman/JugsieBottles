from django.urls import path

from faq import views

urlpatterns = [
    path('faqs/', views.FAQSectionListView.as_view()),
    path('faqs/<int:pk>', views.FAQSectionDetail.as_view()),
    path('QandAs/', views.QandAListCreateView.as_view()),
    path('QandAs/<int:pk>', views.QandADetail.as_view()),
]
