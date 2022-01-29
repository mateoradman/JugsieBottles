from django.contrib import admin
from django.urls import include, path
from drf_spectacular.views import SpectacularAPIView, SpectacularSwaggerView
from rest_framework_simplejwt.views import TokenObtainPairView

schema_urlpatterns = [
    path('schema/', SpectacularAPIView.as_view(), name='schema'),
    path('', SpectacularSwaggerView.as_view(), name='swagger-ui'),
]

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v1/product/', include('product.urls')),
    path('api/v1/shop/', include('shop.urls')),
    path('api/v1/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
] + schema_urlpatterns
