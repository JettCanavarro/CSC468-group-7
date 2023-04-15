FROM python:alpine

RUN pip install mysql-connector-python
RUN pip install flask

COPY worker.py /
CMD ["python", "worker.py"]
