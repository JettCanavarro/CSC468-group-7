FROM python:alpine

RUN pip install mysql-connector-python
RUN pip install flask
RUN pip install flask_cors

COPY worker.py /
CMD ["python", "worker.py"]
