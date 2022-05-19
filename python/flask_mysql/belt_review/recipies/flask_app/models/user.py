from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash
import re
from flask_app.models import recipe
#from models import models as needed importing class from models
#from models import Friend
#class and quieries

class User:
    def __init__( self , data ):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.email = data['email']
        self.password = data['password']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

#     @classmethod
#    quieries
    @staticmethod
    def validate_user(data):
        #valid length, unique/email follow pattern must be unique
        #not left blank mins and maxs reasonable
        #password must be 8 cha p&cp must match
        is_valid = True
        email_regex = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
        if len(data['first_name']) < 3 or len(data['first_name']) > 45:
            is_valid = False
            flash("First name must be at least 3 characters, up to 45 characters.")
        if len(data['last_name']) < 3 or len(data['last_name']) > 45:
            is_valid = False
            flash("Last name must be at least 3 characters, up to 45 characters.")
        if not email_regex.match(data['email']):
            is_valid = False
            flash("Please provide a valid user email.")
        if len(User.get_user_by_email(data)) != 0:
            is_valid = False
            flash("Please provide a valid user email not currently in use.")
        if len(data['password']) < 8:
            is_valid = False
            flash("Password must be at least 8 characters.")
        if data['password'] != data['confirm_password']:
            is_valid = False
            flash("Password and Confirm Password must match.")
        return is_valid

    @classmethod
    def create_user(cls, data):
        query = "INSERT INTO users (first_name, last_name, email, password) VALUES (%(first_name)s, %(last_name)s, %(email)s, %(password)s);"
        result = connectToMySQL("recipies").query_db(query, data)
        return result #returns id of what you inserted
    @classmethod
    def get_user_by_email(cls, data):
        query = "SELECT * FROM users WHERE email = %(email)s;"
        results = connectToMySQL("recipies").query_db(query, data)
        #any time we get data from a db it needs to be an instance of a class
        users = []
        for item in results:
            users.append(User(item))
        return users

    @classmethod
    def get_user_recipies(cls, data):
        query = "SELECT * FROM users LEFT JOIN recipies ON users.id = recipies.user_id WHERE users.id = %(id)s;"
        results = connectToMySQL('recipies').query_db(query, data)
        user = cls(results[0])
        for row in results:
            a_recipe = {
            "id" : row['recipies.id'],
            "name" : row['name'],
            "description" : row['description'],
            "instructions" : row['instructions'],
            "created" : row['created'],
            "created_at" : row['recipies.created_at'],
            "updated_at" : row['recipies.updated_at'],
            "user_id" : row['user_id']
            }
            this_recipe = recipe.Recipe(a_recipe)
            user.recipes.append(this_recipe)
        return user