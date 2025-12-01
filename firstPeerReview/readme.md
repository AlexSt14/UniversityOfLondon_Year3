Create and actiavet a virtual environment

Move to project root directory firstPeerReview and make migrations
- python manage.py makemigrations

Apply the created migrations
- python manage.py migrate

Load data from the file to database
- python manage.py loaddata "hellothere/bestgpus.json"

Run server once done and access the server by the given ip from terminal
- python manage.py runserver