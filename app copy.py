from flask import Flask, render_template, request
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__, template_folder='templates')

# Configure SQLite database
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///kerali.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

# Database models
class Donation(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    donor_name = db.Column(db.String(100), nullable=False)
    amount = db.Column(db.Float, nullable=False)

class Volunteer(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    volunteer_name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(120), nullable=False)

# Routes
@app.route("/")
def home():
    return render_template("home.html")

@app.route("/donate", methods=["GET", "POST"])
def donate():
    if request.method == "POST":
        donor_name = request.form.get("name")
        amount = request.form.get("amount")
        new_donation = Donation(donor_name=donor_name, amount=float(amount))
        db.session.add(new_donation)
        db.session.commit()
        return render_template("donate.html", donor_name=donor_name, amount=amount)
    return render_template("donate.html")

@app.route("/volunteer", methods=["GET", "POST"])
def volunteer():
    if request.method == "POST":
        volunteer_name = request.form.get("name")
        email = request.form.get("email")
        new_volunteer = Volunteer(volunteer_name=volunteer_name, email=email)
        db.session.add(new_volunteer)
        db.session.commit()
        return render_template("volunteer.html", volunteer_name=volunteer_name, email=email)
    return render_template("volunteer.html")

# Admin dashboard route
@app.route("/admin")
def admin():
    donations = Donation.query.all()
    volunteers = Volunteer.query.all()
    return render_template("admin.html", donations=donations, volunteers=volunteers)

if __name__ == "__main__":
    # Create database tables if they don't exist
    with app.app_context():
        db.create_all()
    app.run(debug=True)
