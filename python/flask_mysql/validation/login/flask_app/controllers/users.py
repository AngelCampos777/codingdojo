from flask_app import app
from flask import render_template, request, redirect, session
#from flask_app.models.#model_name import 'Class_name'
# routes
@app.route("/")
def index():
    return render_template("index.html")

@app.route("/users/register", methods = ['POST'])
def register_user():
    #validate
    #add to db
    return("/")