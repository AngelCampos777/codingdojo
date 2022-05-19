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
        "dojo_id" :request.form["dojo_id"]
    }
    Ninja.create_ninja(data)
    return redirect("/dojos")

# show ninja?

@app.route("/edit_ninja/<int:ninja_id>")
def edit_ninja(ninja_id):
    dojos = Dojo.get_dojos()
    data = {
        "ninja_id" : ninja_id
    }
    ninja = Ninja.get_ninja(data)
    # ninja = Ninja.get_ninjas_with_dojos(data)
    # return render_template("dojos.html", ninjas = ninjas)
    return render_template("/edit_ninja.html", dojos = dojos, ninja = ninja)

@app.route("/update_ninja/<int:ninja_id>", methods =["POST"])
def update_ninja(ninja_id):

    data = {
        "ninja_id" : ninja_id,
        "first_name" :request.form["first_name"],
        "last_name" :request.form["last_name"],
        "age" :request.form["age"],
        "dojo_id" :request.form["dojo_id"]
    }
    Ninja.edit_ninja(data)
    return redirect("/dojos")
# (f"/ninjas/{ninja_id}")

@app.route("/delete_ninja/<int:ninja_id>")
def delete_ninja(ninja_id):
    data = {
        'ninja_id' : ninja_id
    }
    Ninja.delete_ninja(data)
    return redirect("/dojos")
