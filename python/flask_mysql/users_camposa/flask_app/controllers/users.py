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
        'email' : request.form["email"]
    }
    User.create_user(data)
    return redirect("/view_users")

@app.route("/view_users")
def display_users():
    users = User.get_all_users()
    return render_template("all_users.html", users = users)

@app.route("/view_user/<int:id>")
def display_user(id):
    data = {
        "id" : id
    }
    users = User.get_user(data)
    return render_template("view_user.html", users = users, id = id)

@app.route("/edit_user/<int:id>")
def edit_user(id):
    data = {
        "id" : id
    }
    users = User.get_user(data)
    return render_template("/edit_user.html", users = users, id = id)

@app.route("/update_user/<int:id>", methods = ["POST"])
def update_user(id):
    data = {
        'id' : id,
        'first_name' : request.form["first_name"],
        'last_name' : request.form["last_name"],
        'email' : request.form["email"],
    }
    User.edit_user(data)
    return redirect(f"/view_user/{id}")

@app.route("/delete_user/<int:id>")
def delete(id):
    data = {
        'id' : id
    }
    User.delete_user(data)
    return redirect("/view_users")
