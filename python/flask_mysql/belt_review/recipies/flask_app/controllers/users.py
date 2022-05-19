from flask_app import app
from flask import render_template, request, redirect, session, flash
from flask_app.models.user import User
from flask_app.models.recipe import Recipe
from flask_bcrypt import Bcrypt
bcrypt = Bcrypt(app)
# routes
@app.route("/")
def index():
    return render_template("index.html")

@app.route("/users/register", methods = ['POST'])
def register_user():
        #validate
    if User.validate_user(request.form):
        data = {
            'first_name': request.form["first_name"],
            'last_name': request.form["last_name"],
            'email': request.form["email"],
            'password': bcrypt.generate_password_hash(request.form['password'])
        }
        print(data)
        #create
        User.create_user(data)
    else:
        print("isn't valid")
    #add to db
    return redirect("/")

@app.route("/users/login", methods = ['POST'])
def login_user():
    #check if email exists
    users = User.get_user_by_email(request.form)
    if len(users) != 1:
        flash("Incorrect email address or password.")
        return redirect("/")
    #check password against hashed pass in db
    user = users[0]
    if not bcrypt.check_password_hash(user.password, request.form['password']):
        flash("Incorrect email address or password.")
        return redirect("/")
    #pull data into session
    session['user_id'] = user.id
    session['first_name'] = user.first_name
    return redirect("/dashboard")

@app.route("/dashboard")
def success():
    if 'user_id' not in session:
        flash("You must be logged in to view this.")
        return redirect("/")
    all_recipies = Recipe.get_user_recipies()
    user = session['user_id']
    print(user)
    return render_template("dashboard.html",all_recipies = all_recipies, user = user)

@app.route("/logout")
def logout():
    session.clear()
    return redirect("/")