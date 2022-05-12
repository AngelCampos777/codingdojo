from flask import render_template, request, redirect
from flask_app import app
from flask_app.models.friend import Friend

@app.route("/")
def index():
    # call the get all classmethod to get all friends
    friends = Friend.get_all()
    print(friends)
    return render_template("index.html", all_friends = friends)
            
@app.route("/create_friend", methods = ['POST'])
def create_friend():
    data = {
        'first_name' : request.form["first_name"],
        'last_name' : request.form["last_name"],
        'occupation' : request.form["occupation"],
    }
    Friend.create_friend(data)
    return redirect("/")

@app.route("/renderUpdate/<int:id>")
def render_update(id):
    return render_template("update.html", id = id)

# data = id, use id to select all from friends where id = id, route populates single

@app.route("/update_friend", methods = ['POST'])
def update_friend():
    data = {
        'id' : request.form["id"],
        'first_name' : request.form["first_name"],
        'last_name' : request.form["last_name"],
        'occupation' : request.form["occupation"],
    }
    Friend.update_friend(data)
    return redirect("/")

@app.route("/unfriend/<int:id>")
def render_unfriend(id):
    data = {
        'id' : id
    }
    Friend.delete_friend(data)
    return redirect("/")
