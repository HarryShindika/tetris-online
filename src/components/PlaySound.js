import React, { useState } from 'react';
import styled from 'styled-components';
import Sound from 'react-sound';
import ZonedOutSong from '../sounds/zoned-out.mp3';


export const StyledSoundButton = styled.button`
    border: 5px solid red;

    background-color: white;
    color: grey;
    margin: 0 0 20px 0;
    padding: 10px 10px 10px 10px;

    cursor: pointer;
`;

const PlaySound = (
    handleSongLoading,
    handleSongPlaying,
    handleSongFinishedPlaying
) => {
    const {isPlaying, setIsPlaying} = useState(false);

    return (
        <div style={{ alignItems: 'center' }}>
            <StyledSoundButton onClick={() => setIsPlaying(!isPlaying)}>
                {!isPlaying ? 'Play Music': 'Stop Music'}
            </StyledSoundButton>
            <Sound
                url={ZonedOutSong}
                playStatus={
                    isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED
                }
                playFromPosition={300}
                onLoading={handleSongLoading}
                onPlaying={handleSongPlaying}
                onFinishedPlaying={handleSongFinishedPlaying}
            />
        </div>
    );
};

export default PlaySound;
