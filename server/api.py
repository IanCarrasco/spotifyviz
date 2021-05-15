from flask import Flask, jsonify
import flask.scaffold
flask.helpers._endpoint_from_view_func = flask.scaffold._endpoint_from_view_func
from flask_restful import Resource, Api
import requests
from urllib.parse import quote
from flask_restful.utils import cors
import json
from oauth import SpotifyOAuth

app = Flask(__name__)
api = Api(app)

'''
 Client ID 8ababa3ef6374d7fbd7d8b08ace25c3a
Client Secret 156bb79b7f3b482fb4fcb954ed2b80f2

'''
'''
curl -X "GET" "https://api.spotify.com/v1/search?q=Post%20Malone&type=artist&market=US" -H "Accept: application/json" -H "Content-Type: application/json" -H "Authorization: "
'''

class StreamingStats(Resource):
    @cors.crossdomain(origin="*")
    def get(self, artist):
        print(f'Getting Stats for {artist}')
        artist = quote(artist)

#https://accounts.spotify.com/authorize?response_type=code&client_id=$CLIENT_ID&scope=$SCOPE&redirect_uri=$REDIRECT_URI


        res = requests.get(f"https://api.spotify.com/v1/search?q={artist}&type=artist&market=US", headers=)

        json_string = res.content.decode('utf-8')

        artist_dict = json.loads(json_string)

        print(artist_dict)

        jres = jsonify(artist_dict)

        return jres

api.add_resource(StreamingStats, '/stats/<string:artist>')

if __name__ == '__main__':
    app.run(debug=True)