
from flask import Flask, render_template, jsonify

app = Flask(__name__)

@app.route('/s') # check the url, it is unchangable from server
def index():
    return render_template('index.html')

@app.route('/api') # check the url, it is unchangable from server
def indexx():
    return jsonify({'sign':'123123123'})

if __name__=='__main__':
    app.run()
