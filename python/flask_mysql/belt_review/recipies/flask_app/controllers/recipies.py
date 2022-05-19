from flask_app import app
from flask import render_template, request, redirect, session, flash
from flask_app.models.user import User
from flask_app.models.recipe import Recipe
@app.route("/recipies")
def recipies():
    return render_template("recipies.html")

@app.route("/new_recipe", methods =["POST"])
def new_recipe():
    if Recipe.validate_recipe(request.form):
        data = {
            "name":request.form["name"],
            "description":request.form["description"],
            "instructions":request.form["instructions"],
            "time":request.form["time"],
            "created":request.form["created"],
            "user_id":session['user_id'] 
        }
        Recipe.create_recipe(data)
    else:
        print("isn't valid")
        return redirect("/recipies")
    return redirect("/dashboard")

@app.route("/view_recipe/<int:recipe_id>")
def get_recipe(recipe_id):
    data = {
        "recipe_id" : recipe_id
    }
    recipe = Recipe.get_recipe(data)
    return render_template("recipe.html", recipe = recipe)

@app.route("/edit_recipe/<int:recipe_id>")
def edit_recipe(recipe_id):
    data = {
        "recipe_id" : recipe_id
    }
    recipe = Recipe.get_recipe(data)
    return render_template("edit_recipe.html", recipe = recipe)

@app.route("/update/<int:recipe_id>", methods =["POST"])
def update_recipe(recipe_id):
    if Recipe.validate_recipe(request.form):
        data = {
                "recipe_id": recipe_id,
                "name":request.form["name"],
                "description":request.form["description"],
                "instructions":request.form["instructions"],
                "time":request.form["time"],
                "created":request.form["created"],
                "user_id":session['user_id'] 
        }
        Recipe.edit_recipe(data)
    else:
        print("isn't valid")
        return redirect(f"/edit_recipe/{recipe_id}")
    return redirect("/dashboard")

@app.route("/delete_recipe/<int:recipe_id>")
def delete_recipe(recipe_id):
    data = {
        'recipe_id' : recipe_id
    }
    Recipe.delete_recipe(data)
    return redirect("/dashboard")