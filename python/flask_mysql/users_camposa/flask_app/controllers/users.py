from flask import render_template, request, redirect, session
from flask_app import app
from flask_app.models.user import User
# routes
@app.route("/users")
def index():
    return render_template("users.html")

@app.route("/new_user", methods = ['POST'])
def new_user():
    data = {
        'first_name' : request.form["fname"],
        'last_name' : request.form["lname"],
        'email' : request.form["email"],
    }
    User.create_user(data)
    return redirect("/view_users")

@app.route("/view_users")
def display_users():
    users = User.get_all_users()
    return render_template("all_users.html", users = users)