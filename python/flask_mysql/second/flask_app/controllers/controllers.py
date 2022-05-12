from flask import render_template, request, redirect
from flask_app import app
from flask_app.models.#model_name import Class_name
# routes
@app.route("/")
def index():
    print('test')
    return render_template("index.html")