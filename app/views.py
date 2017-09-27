from app import app

from flask import render_template
from flask import Response

@app.route('/')
@app.route('/')
def index():
    '''
    Returns a static webpage for now.
    '''
    return render_template('index.html')
