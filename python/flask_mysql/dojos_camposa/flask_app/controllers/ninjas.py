from flask_app import app
from flask import render_template, request, redirect, session
from flask_app.models.dojo import Dojo
from flask_app.models.ninja import Ninja

@app.route("/ninjas")
def ninja():
    dojos = Dojo.get_dojos()
    return render_template("ninjas.html", dojos = dojos)

@app.route("/new_ninja", methods =["POST"])
def new_ninja():
    data = {
        "first_name" :request.form["first_name"],
        "last_name" :request.form["last_name"],
        "age" :request.form["age"],
        "dojo_id" :request.form["dojo_id"],
    }
    Ninja.create_ninja(data)
    return redirect("/dojos")
