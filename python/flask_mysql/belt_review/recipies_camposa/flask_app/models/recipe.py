from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash
from flask_app.models import user
#from models import models as needed importing class from models
#from models import Friend
#class and quieries

class Recipe:
    def __init__( self , data ):
        self.id = data['id']
        self.name = data['name']
        self.description = data['description']
        self.instructions = data['instructions']
        self.time = data['time']
        self.created = data['created']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.user_id = data['user_id']
        self.user = {}

    @staticmethod
    def validate_recipe(data):
        #valid length, unique/email follow pattern must be unique
        #not left blank mins and maxs reasonable
        #password must be 8 cha p&cp must match
        is_valid = True
        if len(data['name']) < 3 or len(data['name']) > 255:
            is_valid = False
            flash("Name must be at least 3 characters, up to 255 characters.")
        if len(data['description']) < 3:
            is_valid = False
            flash("description cannot be left blank.")
        if len(data['instructions']) < 3:
            is_valid = False
            flash("instructions cannot be left blank.")
        return is_valid

    @classmethod
    def create_recipe(cls, data):
        query = "INSERT INTO recipies (name, description, instructions, time, created, created_at, updated_at, user_id) VALUES (%(name)s, %(description)s, %(instructions)s, %(time)s, %(created)s, NOW(), NOW(), %(user_id)s);"
        results = connectToMySQL('recipies').query_db(query, data)
        return results

    @classmethod
    def get_user_recipies(cls):
        query = "SELECT * FROM recipies LEFT JOIN users ON users.id = recipies.user_id;"
        results = connectToMySQL('recipies').query_db(query)
        all_recipies = []
        for row in results:
            recipe = cls(row)
            user_data = {
                "id" : row['users.id'],
                "first_name" : row['first_name'],
                "last_name" : row['last_name'],
                "email" : row['email'],
                "password" : row['password'],
                "created_at" : row['users.created_at'],
                "updated_at" : row['users.updated_at']
            }
            recipe.user = user.User(user_data)
            all_recipies.append(recipe)
        return all_recipies

    @classmethod
    def get_recipe(cls, data):
        query = "SELECT * FROM recipies LEFT JOIN users ON users.id = recipies.user_id WHERE recipies.id = %(recipe_id)s;"
        results = connectToMySQL('recipies').query_db(query, data)
        recipe = cls(results[0])
        user_data = {
                "id" : results[0]['users.id'],
                "first_name" : results[0]['first_name'],
                "last_name" : results[0]['last_name'],
                "email" : results[0]['email'],
                "password" : results[0]['password'],
                "created_at" : results[0]['users.created_at'],
                "updated_at" : results[0]['users.updated_at']
            }
        recipe.user = user.User(user_data)
        return recipe

    @classmethod
    def edit_recipe(cls, data):
        query = "UPDATE recipies SET name = %(name)s, description = %(description)s, instructions = %(instructions)s, time = %(time)s, created = %(created)s, user_id = %(user_id)s WHERE id = %(recipe_id)s;"
        connectToMySQL('recipies').query_db(query, data)

    @classmethod
    def delete_recipe(cls, data):
        query = "DELETE FROM recipies WHERE id = %(recipe_id)s;"
        connectToMySQL('recipies').query_db(query, data)