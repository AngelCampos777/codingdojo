from logging import debug
from flask import Flask
#/ = hello, /dojo = "Dojo!",
# /say/{string} = hi {string},/repeat/{num}/{string} = {string} {num} times

app = Flask(__name__) #magic that makes it work? creates flask obj thats our 
#server and we can change it

@app.route('/')
def index():
    return "hello"

@app.route('/dojo')
def dojo():
    return "Dojo!"

@app.route('/say/<string>')
def say_string(string):
    return f"sup' {string}"

@app.route('/repeat/<int:x>/<string>')
def repeat_string(x,string):
    return f"{string} " * x

@app.route('<random>')
def nope(random):
    return f"Looks like we couldn't find what you're looking for. Sorry about that."
if __name__ == "__main__":
    app.run(debug = True)