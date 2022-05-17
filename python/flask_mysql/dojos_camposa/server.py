from flask_app import app
from flask_app.controllers import dojos, ninjas
#may have many controllers name(s)_controller


if __name__ == "__main__":
    app.run(debug=True)