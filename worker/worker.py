import mysql.connector as sqlconnector
from flask import Flask, render_template, request

app = Flask(__name__)
connection = sqlconnector.connect(user='root', password='password', host='mysql', database='maindb')


@app.route('/signup', methods=['GET', 'POST'])
def create_account():
    data = request.get_json()
    firstname = data.get("firstname")
    lastname = data.get("lastname")
    username = data.get("username")
    password = data.get("password")
    email = data.get("email")
    phone = data.get("phone")
    address = data.get("address")
    zipcode = data.get("zipcode")

    cursor = connection.cursor()
    cursor.execute('SELECT ZIP_ID FROM ZIP WHERE ZIP_CODE IN (%s)', (zipcode, ))
    result = cursor.fetchone()
    zip_id = result[0]

    cursor.execute('INSERT INTO CUSTOMER (FIRST_NAME, LAST_NAME, USERNAME, PASSWORD, EMAIL, PHONE, CUSTOMER_ADDRESS, ZIP_ID) VALUES (%s, %s, %s,%s, %s, %s,%s,%s)', (firstname, lastname, username, password, email, phone, address, zip_id))
    connection.commit()
    cursor.close()

    return "New user added"


@app.route('/login', methods=['GET', 'POST'])
def login():
    data = request.get_json()
    username = data.get("username")
    password = data.get("password")

    cursor = connection.cursor()
    cursor.execute('SELECT PASSWORD FROM CUSTOMER WHERE USERNAME IN (%s)', (username, ))
    result = cursor.fetchone()

    if result:
        if result[0] == password:
            return "Log in success"
        else:
            return "Incorrect password"
    else:
        return "User not found."

@app.route('/menu', methods=['GET', 'POST'])
def menu():
     data = request.get_json()
     menuitem = data.get("menuitem")
     description = data.get("description")
     ingredients = data.get("ingredients")
     price = data.get("price")
     categoryid = data.get("categoryid")
        
     cursor = connection.cursor()
     cursor.execute('SELECT )', (categoryid, ))
     result = cursor.fetchone()

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
    connection.close()

