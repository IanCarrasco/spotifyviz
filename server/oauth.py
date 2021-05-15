import requests
from urllib.parse import quote

class SpotifyOAuth():
    def __init__(self, client_id="", client_secret="", redirect=""):
        self.client_id = client_id
        self.client_secret = client_secret
        self.redirect = quote(redirect)
    
    def get_auth():
        auth_url = f'https://accounts.spotify.com/authorize?client_id={self.client_id}&response_type=code&redirect_uri={self.redirect}&state=34fFs29kd09'
        requests.get(auth_url)