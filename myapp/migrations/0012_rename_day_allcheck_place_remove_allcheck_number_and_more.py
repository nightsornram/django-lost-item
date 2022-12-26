# Generated by Django 4.1.4 on 2022-12-26 04:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0011_alter_allcheck_id'),
    ]

    operations = [
        migrations.RenameField(
            model_name='allcheck',
            old_name='day',
            new_name='place',
        ),
        migrations.RemoveField(
            model_name='allcheck',
            name='number',
        ),
        migrations.AddField(
            model_name='allcheck',
            name='details',
            field=models.TextField(default=1, max_length=200),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='allcheck',
            name='id',
            field=models.IntegerField(primary_key=True, serialize=False),
        ),
    ]