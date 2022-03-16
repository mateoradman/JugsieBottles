from django.db import models

# Create your models here.


class FAQSection(models.Model):
    name = models.CharField(blank=False, null=False, max_length=64, unique=True)
    icon = models.CharField(blank=False, null=False, max_length=64)

    def __str__(self) -> str:
        return self.name

    class Meta:
        ordering = ['name']


class QuestionAndAnswer(models.Model):
    question = models.CharField(blank=False, null=False, max_length=255, unique=True)
    answer = models.TextField()
    section = models.ForeignKey(FAQSection, on_delete=models.CASCADE)

    def __str__(self) -> str:
        return self.question

    class Meta:
        ordering = ['question']
