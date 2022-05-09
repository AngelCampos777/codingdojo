from flask import Flask, render_template, request, redirect, session
app = Flask(__name__) 
app.secret_key = "i ain't afraid of no snake"

@app.route('/')
def index():
    # if there isnt a key in session called counter make one
    if 'counter' not in session:
        print('counter exists')
        session['counter'] = 0
    else:
        print("key 'counter' does NOT exist")
    return render_template('index.html')

@app.route('/add')
def add():
    if 'counter' not in session:
        print("key 'counter' does NOT exist")
        session['counter'] = 0
    else:
        session ['counter'] += 1
        print('counter exists')
    return redirect('/')


@app.route('/add_num', methods = ['POST'])
def add_num():
    if 'counter' not in session:
        session['counter'] = 0
    else:
        session ['counter'] += int(request.form['number'])
    return redirect('/')

@app.route('/add2')
def add2():
    if 'counter' not in session:
        session['counter'] = 0
    else:
        session ['counter'] += 2
    return redirect('/')

@app.route('/destroy_session')
def destroy():
    session.clear()
    return redirect('/')

if __name__ == "__main__":
    app.run(debug = True)