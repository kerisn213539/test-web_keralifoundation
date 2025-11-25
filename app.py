from flask import Flask, request

app = Flask(__name__)

# Homepage route
@app.route("/")
def home():
    return "<h1>Kerali Foundation Limited</h1><p>Empowering Communities, Inspiring Change</p>"

# Donation form route
@app.route("/donate", methods=["GET", "POST"])
def donate():
    if request.method == "POST":
        donor_name = request.form.get("name")
        amount = request.form.get("amount")
        # Here you would normally save to a database or process payment
        return f"Thank you {donor_name} for donating {amount}!"
    return '''
        <form method="POST">
            Name: <input type="text" name="name"><br>
            Amount: <input type="number" name="amount"><br>
            <button type="submit">Donate</button>
        </form>
    '''

# Volunteer form route
@app.route("/volunteer", methods=["GET", "POST"])
def volunteer():
    if request.method == "POST":
        volunteer_name = request.form.get("name")
        email = request.form.get("email")
        # Save to database or send confirmation email
        return f"Thank you {volunteer_name}, we’ll contact you at {email}!"
    return '''
        <form method="POST">
            Name: <input type="text" name="name"><br>
            Email: <input type="email" name="email"><br>
            <button type="submit">Volunteer</button>
        </form>
    '''

if __name__ == "__main__":
    app.run(debug=True)