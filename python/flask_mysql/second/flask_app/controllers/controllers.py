from flask_app import app
from flask import render_template, request, redirect, session
from flask_app.models.#model_name import 'Class_name'
# routes
@app.route("/")
def index():
    print('test')
    return render_template("index.html")
    #when have form w action *most likely be post need 2 routes 1 form(need to render) 1 reroute(action that occurs(post))