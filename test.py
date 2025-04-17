import discord
from redmail import gmail
import pandas as pd

gmail_user_name = "astracode7@gmail.com"
gmail_password = "crvbbmmtvwctlogp"

def send_alert(img_path):
    message = "Animal intruder found!!"
     
    gmail.username = gmail_user_name
    gmail.password = gmail_password

    gmail.send(
        subject="Intruder Alert",
        sender=gmail_user_name,
        receivers=["akhileshwar333@gmail.com", "rockingnaveen12@gmail.com"],
        html="""
            <h1>Unauthorized entity found!</h1>
            {{ myimg }}
        """,
        body_images={"myimg": img_path}
    )

