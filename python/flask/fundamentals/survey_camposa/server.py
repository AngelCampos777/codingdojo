from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)
app.secret_key = "sleepyllama"

@app.route('/')
def index():
    print('hello')
    return render_template('index.html')

@app.route('/results', methods = ['POST'])
def filled():
    session['name'] = request.form['name']
    session['lang'] = request.form['lang'] #accept multiple return list
    session['location'] = request.form['location']
    session['comments'] = request.form['comments']
    return redirect('/results')

@app.route('/results')
def display_results():
    return render_template('results.html')

if __name__ == "__main__":
    app.run(debug = True)