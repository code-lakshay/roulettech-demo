# Generated by Django 3.2.7 on 2023-03-01 03:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0007_profile'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='gallery',
            name='service',
        ),
        migrations.RemoveField(
            model_name='orders',
            name='buyer',
        ),
        migrations.RemoveField(
            model_name='orders',
            name='seller',
        ),
        migrations.RemoveField(
            model_name='orders',
            name='service',
        ),
        migrations.RemoveField(
            model_name='service',
            name='category',
        ),
        migrations.RemoveField(
            model_name='service',
            name='liked',
        ),
        migrations.RemoveField(
            model_name='service',
            name='user',
        ),
        migrations.AlterModelOptions(
            name='profile',
            options={},
        ),
        migrations.AlterModelOptions(
            name='user',
            options={'verbose_name': 'user', 'verbose_name_plural': 'users'},
        ),
        migrations.RemoveField(
            model_name='profile',
            name='address',
        ),
        migrations.RemoveField(
            model_name='profile',
            name='code',
        ),
        migrations.RemoveField(
            model_name='profile',
            name='country',
        ),
        migrations.RemoveField(
            model_name='profile',
            name='date',
        ),
        migrations.RemoveField(
            model_name='profile',
            name='facebook',
        ),
        migrations.RemoveField(
            model_name='profile',
            name='instagram',
        ),
        migrations.RemoveField(
            model_name='profile',
            name='level_1',
        ),
        migrations.RemoveField(
            model_name='profile',
            name='level_2',
        ),
        migrations.RemoveField(
            model_name='profile',
            name='level_3',
        ),
        migrations.RemoveField(
            model_name='profile',
            name='level_4',
        ),
        migrations.RemoveField(
            model_name='profile',
            name='level_5',
        ),
        migrations.RemoveField(
            model_name='profile',
            name='phone',
        ),
        migrations.RemoveField(
            model_name='profile',
            name='pid',
        ),
        migrations.RemoveField(
            model_name='profile',
            name='pin',
        ),
        migrations.RemoveField(
            model_name='profile',
            name='recommended_by',
        ),
        migrations.RemoveField(
            model_name='profile',
            name='twitter',
        ),
        migrations.RemoveField(
            model_name='profile',
            name='wallet',
        ),
        migrations.RemoveField(
            model_name='profile',
            name='website',
        ),
        migrations.RemoveField(
            model_name='profile',
            name='whatsApp',
        ),
        migrations.AlterField(
            model_name='profile',
            name='bio',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='user',
            name='is_staff',
            field=models.BooleanField(default=False, help_text='Designates whether the user can log into this admin site.', verbose_name='staff status'),
        ),
        migrations.AlterField(
            model_name='user',
            name='is_superuser',
            field=models.BooleanField(default=False, help_text='Designates that this user has all permissions without explicitly assigning them.', verbose_name='superuser status'),
        ),
        migrations.DeleteModel(
            name='Category',
        ),
        migrations.DeleteModel(
            name='Gallery',
        ),
        migrations.DeleteModel(
            name='Orders',
        ),
        migrations.DeleteModel(
            name='Service',
        ),
    ]
