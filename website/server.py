from flask import Flask, render_template, url_for
from scheduler.schedule import Schedule

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/getSchedule/<scheduleName>', methods=['GET'])
def getSchedule(scheduleName):
    schedule = Schedule('scheduler/' + scheduleName)
    return schedule.getJSON()

@app.route('/debug')
def debug():
    return {'info':'hello world'}

if __name__ == '__main__':
    app.run()
