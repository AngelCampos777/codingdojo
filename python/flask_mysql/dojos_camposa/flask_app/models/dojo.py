from flask_app.config.mysqlconnection import connectToMySQL
#from flask import flash
#from models import models as needed importing class from models
from flask_app.models import ninja
#class and quieries

class Dojo:
    def __init__( self , data ):
        self.id = data['id']
        self.name = data['name']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.ninjas = []

    @classmethod
    def create_dojo(cls, data):
        query = "INSERT INTO dojos (name, created_at, updated_at) VALUES (%(name)s, NOW(), NOW());"
        results = connectToMySQL('dojoninja').query_db(query, data)
        return results

    @classmethod
    def get_dojos(cls):
        query = "SELECT * FROM dojos;"
        results = connectToMySQL('dojoninja').query_db(query)
        dojos = []
        for dojo in results:
            dojos.append(cls(dojo))
        return dojos

    @classmethod
    def get_dojo(cls, data):
        query = "SELECT * FROM dojos LEFT JOIN ninjas ON dojos.id = ninjas.dojo_id WHERE dojos.id = %(id)s;"
        results = connectToMySQL('dojoninja').query_db(query, data)
        dojo = cls(results[0])
        for row in results:
            a_ninja = {
            "id" : row['ninjas.id'],
            "first_name" : row['first_name'],
            "last_name" : row['last_name'],
            "age" : row['age'],
            "created_at" : row['ninjas.created_at'],
            "updated_at" : row['ninjas.updated_at'],
            "dojo_id" : row['dojo_id']
            }
            this_ninja = ninja.Ninja(a_ninja)
            dojo.ninjas.append(this_ninja)
        return dojo
