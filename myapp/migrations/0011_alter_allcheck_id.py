# Generated by Django 4.1.4 on 2022-12-19 06:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0010_rename_online_account_allcheck_status'),
    ]

    operations = [
        migrations.AlterField(
            model_name='allcheck',
            name='id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
    ]
