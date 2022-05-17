from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash
#from models import models as needed importing class from models
#from models import Friend
#class and quieries

class User:
    def __init__( self , data ):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.email = data['email']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

#     @classmethod
#    quieries