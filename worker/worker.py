import mysql.connector as sqlconnector
from flask import Flask, render_template, request
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app)

connection = sqlconnector.connect(user='user', password='123', host='mysql-container', database='maindb')

@app.route('/api/signup', methods=['POST'])
def signup():
    data = request.get_json()

    firstname = data['firstName']
    lastname = data['lastName']
    username = data['username']
    password = data['password']
    email = data['email']
    phone = data['phoneNumber']
    address = data['address']
    zipcode = data['zipcode']

    cursor = connection.cursor()
    cursor.execute('SELECT ZIP_ID FROM ZIP WHERE ZIP_CODE IN (%s)', (zipcode, ))
    result = cursor.fetchone()
    zip_id = result[0]

    cursor.execute('INSERT INTO CUSTOMER (FIRST_NAME, LAST_NAME, USERNAME, PASS, EMAIL, PHONE, CUSTOMER_ADDRESS, ZIP_ID) VALUES (%s, %s, %s,%s, %s, %s,%s,%s)', (firstname, lastname, username, password, email, phone, address, zip_id))
    connection.commit()
    cursor.close()

    return {'status': 'success'}


@app.route('/api/login', methods=['POST'])
def login():
    data = request.get_json()

    username = data['username']
    password = data['password']

    cursor = connection.cursor()
    cursor.execute('SELECT PASS FROM CUSTOMER WHERE USERNAME IN (%s)', (username, ))
    result = cursor.fetchone()

    if result:
        if result[0] == password:
            return {'status': 'success'}
        else:
            return {'status': 'failure'}
    else:
        return {'status': 'failure'}


if __name__ == '__main__':
    app.run(host='127.0.0.1', port=5000)
