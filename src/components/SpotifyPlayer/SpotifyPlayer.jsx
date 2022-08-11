import { useState, useEffect } from 'react';
import useAuth from '../useAuth/useAuth';
import PlayerControls from '../PlayerControls/PlayerControls';
import TrackSearchResult from '../TrackSearchResult/TrackSearchResult';
import { Container, Form } from 'react-bootstrap';
import SpotifyWebApi from 'spotify-web-api-node';
import axios from 'axios';
import './SpotifyPlayer.css';

const spotifyApi = new SpotifyWebApi({
    clientId: '4b42633281ef4a1ebc3b7359ebb42b4e',
});

export default function SpotifyPlayer({ code }) {
    const accessToken = useAuth(code);
    //for the search input
    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    //for seeing which track is playing
    const [playingTrack, setPlayingTrack] = useState();
    //for setting the lyrics
    const [lyrics, setLyrics] = useState('');

    function chooseTrack(track) {
        setPlayingTrack(track);
        setSearch('');
        setLyrics('');
    }

    useEffect(() => {
        if (!playingTrack) return;
        axios
            .get('http://localhost:3000/lyrics', {
                params: {
                    track: playingTrack.title,
                    artist: playingTrack.artist,
                },
            })
            .then((res) => {
                setLyrics(res.data.lyrics);
            });
    }, [playingTrack]);

    useEffect(() => {
        if (!accessToken) return;
        spotifyApi.setAccessToken(accessToken);
    }, [accessToken]);

    useEffect(() => {
        if (!search) return setSearchResults([]);
        if (!accessToken) return;

        let cancel = false;
        spotifyApi.searchTracks(search).then((res) => {
            if (cancel) return;
            setSearchResults(
                res.body.tracks.items.map((track) => {
                    const smallestAlbumImage = track.album.images.reduce(
                        (smallest, image) => {
                            if (image.height < smallest.height) return image;
                            return smallest;
                        },
                        track.album.images[0]
                    );

                    return {
                        artist: track.artists[0].name,
                        title: track.name,
                        uri: track.uri,
                        albumUrl: smallestAlbumImage.url,
                    };
                })
            );
        });

        return () => (cancel = true);
    }, [search, accessToken]);

    return (
        <Container className="spotify-player" style={{ height: '75vh' }}>
            <Form.Control
                type="search"
                placeholder="Search Songs/Artists"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <div className="flex-grow-1 my-2" style={{ overflowY: 'auto' }}>
                {searchResults.map((track) => (
                    <TrackSearchResult
                        track={track}
                        key={track.uri}
                        chooseTrack={chooseTrack}
                    />
                ))}
                {searchResults.length === 0 && (
                    <div
                        className="lyrics-container"
                        style={{ whiteSpace: 'pre' }}
                    >
                        {lyrics}
                    </div>
                )}
            </div>
            <div className="player-controls">
                <PlayerControls
                    accessToken={accessToken}
                    trackUri={playingTrack?.uri}
                />
            </div>
        </Container>
    );
}
