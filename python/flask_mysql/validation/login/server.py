from flask_app import app
from flask_app.controllers import users
#may have many controllers name(s)_controller, name2(s)_controller


if __name__ == "__main__":
    app.run(debug=True)