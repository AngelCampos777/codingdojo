from flask import Flask, render_template
app = Flask(__name__) 
# base = 8x8,/4 = 8x4,/<int:x>/<int:y> = x*y,
# /<int:x>/<int:y>/<color_1>/<color_2> = x c1*y c2


@app.route('/')
def base():
    return render_template("index.html", x = 8, y = 8, color1 = "black", color2 = "red")

@app.route('/4')
def half():
    return render_template("index.html", x = 8, y = 4, color1 = "black", color2 = "red")

@app.route('/<int:x>/<int:y>')
def double_var(x, y):
    return render_template("index.html", x = x, y = y, color1 = "black", color2 = "red")

@app.route('/<int:x>/<int:y>/<string:color1>/<string:color2>')
def dvar_dcolor(x, y, color1, color2):
    return render_template("index.html", x = x, y = y, color1 = color1, color2 = color2)



if __name__ == "__main__":
    app.run(debug = True)