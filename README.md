# STEM Tutoring Hub Scheduler Website
This is a miniapp designed to parse a .xlsx file containing the working hours of tutors at the STEM Tutoring Hub, UC Merced.

## Requirements
Python
 
Some web renderer

Any other requirements needed to run a Flask backend and an HTMl/CSS/JS frontend.

## Setup
**Python Venv:**

Set up a Python venv in the home directory (the one containing the `.gitignore`, `website/`, etc.

Look this up online, but you'll need to `pip install` some stuff, and a venv lets you do that without installing things in a directory you'll forget about after trying out this project.

`python -m venv venv` or similar commands will create a venv.

Once complete, you can activate it via `source venv/bin/activate` on Linus or `venv/Scripts/activate` on Windows (I think? Might have to double check this one.)

**Pip Installations:**
The two things you need to `pip install`:
> `pip install flask` (For the server hosting aspect)
> 
> `pip install openpyxl` (For parsing the `.xlsx` file)

## Execution
Navigate to `/website`, then run `python server.py`!

Then, open the link that appears in a console, or navigate to `http://127.0.0.1:5000`.

Have fun!
