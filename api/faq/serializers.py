from rest_framework import serializers

from .models import FAQSection, QuestionAndAnswer


class QandASerializer(serializers.ModelSerializer):
    class Meta:
        model = QuestionAndAnswer
        fields = '__all__'


class SimpleQandASerializer(serializers.ModelSerializer):
    class Meta:
        model = QuestionAndAnswer
        fields = ('question', 'answer')


class FAQSectionSerializer(serializers.ModelSerializer):
    questionandanswer_set = QandASerializer(many=True, read_only=True)

    class Meta:
        model = FAQSection
        fields = ('name', 'icon', 'questionandanswer_set')
