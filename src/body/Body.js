import React from 'react';
import './body.css';
import Header from './../header/Header';
import { useDataLayerValue } from './../DataLayer';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SongRow from './SongRow';

function Body({ spotify }) {
  const [{ HIP_HOP }, dispatch] = useDataLayerValue();
  return (
    <div className='body'>
      <Header spotify={spotify} />

      <div className='body__info'>
        <img src={HIP_HOP?.images[0].url} alt='' />
        <div className='body__infoText'>
          <strong>PLAYLIST</strong>
          <h2>Hip Hop</h2>
          <p>{HIP_HOP?.description}</p>
        </div>
      </div>
      <div className='body__songs'>
        <div className='body__icons'>
          <PlayCircleFilledIcon className='body__shuffle' />
          <FavoriteIcon fontsize='large' />
          <MoreHorizIcon />
        </div>
        {/* list of songs */}
        {HIP_HOP?.tracks.items.map((item) => (
          <SongRow track={item.track} />
        ))}
      </div>
    </div>
  );
}

export default Body;
