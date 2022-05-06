from flask import Flask, render_template
app = Flask(__name__) 


@app.route('/play')
def one():
    return render_template("index.html", x = 3, color = "blue")

@app.route('/play/<int:x>')
def two(x):
    return render_template("index.html", x = x, color = "blue")

@app.route('/play/<int:x>/<string:color>')
def num_color(x, color):
    return render_template("index.html", x = x, color = color)



if __name__ == "__main__":
    app.run(debug = True)