from flask_app import app
from flask import render_template, request, redirect, session
from flask_app.models.dojo import Dojo
from flask_app.models.ninja import Ninja
# routes
@app.route("/dojos")
def index():
    dojos = Dojo.get_dojos()
    return render_template("dojos.html", dojos = dojos)

    # ninjas = Ninja.get_ninjas_with_dojos()
    # return render_template("dojos.html", ninjas = ninjas)
    #when have form w action *most likely be post need 2 routes 1 form(need to render) 1 reroute(action that occurs(post))

@app.route("/new_dojo", methods = ["POST"])
def new_dojo():
    data = {
        "name" :request.form["name"]
    }
    Dojo.create_dojo(data)
    return redirect("/dojos")

@app.route("/dojo/<int:id>")
def get_dojo(id):
    data = {
        "id" : id
    }
    dojo = Dojo.get_dojo(data)
    return render_template("dojo.html", dojo = dojo)