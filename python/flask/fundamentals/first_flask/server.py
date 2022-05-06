from logging import debug
from flask import Flask

app = Flask(__name__) #magic that makes it work? creates flask obj thats our server and we can change it

@app.route('/')
def index():
    return "hello?"

@app.route('/another_route')
def another_route():
    return "what is happening?"

@app.route('/test/<route_data>')
def test_data(route_data):
    return f" the route data that was passed in was {route_data}"

@app.route('/multiply/<int:x>/<int:y>')
def multiply_nums(x,y):
    return f"The product of {x} and {y} is {x * y}"
if __name__ == "__main__":
    app.run(debug = True)