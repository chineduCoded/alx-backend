#!/usr/bin/env python3
"""
Flask App
"""
from flask import Flask, render_template
from flask_babel import Babel
import request


class Config(object):
    """Configuration for babel"""
    LANGUAGES = ["en", "fr"]
    BABEL_DEFAULT_LOCALE = "en"
    BABEL_DEFAULT_TIMEZONE = "UTC"


app = Flask(__name__)
app.config.from_object(Config)
babel = Babel(app)

@babel.localeselector
def get_locale():
    """Get the best match language"""
    return request.accept_languages.best_match(app.config["LANGUAGES"])


@app.route("/")
def index() -> str:
    """Index route"""
    return render_template("3-index.html")


if __name__ == "__main__":
    app.run(port=5000, host="0.0.0.0", debug=True)
