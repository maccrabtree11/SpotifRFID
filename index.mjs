import { SpotifyApi } from '@spotify/web-api-ts-sdk';
import * as dotenv from "dotenv";
import fetch  from 'node-fetch';

dotenv.config();
const client_secret = process?.env.CLIENT_SECRET || "";
const client_id = process?.env.CLIENT_ID || "";

const sdk = SpotifyApi.withClientCredentials(client_id, client_secret);

async function callSpotify() {
    console.log("Searching Spotify, we have " + client_secret + " and " + client_id);

    const items = await sdk.search("Blink 182", ["artist"]);

    const tableItems = items.artists.items.map((item) => 
        ({
            name: item.name,
            popularity: item.popularity
        })
    );

    console.table(tableItems);



}


callSpotify();