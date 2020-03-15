import React from 'react';
import styles from './index.css';

import Titlebg from '../components/titleBg'
import ArticleItem from '../components/articleItem'
import ArchiveCard from '../components/archiveCard';

export default function() {
  return (
    <div className={styles.normal}>
      {/* <Titlebg url="http://blog-images.fiveseven.top/blogTitlebg.jpg" /> */}
      
      
      {/* <img
        style={{
          width: '100vw',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
          right: 0,
          zIndex: -99,
        }}
        src="http://blog-images.fiveseven.top/josh-hild-doGGZWPdmQA-unsplash.jpg"
        alt=""
      /> */}
      {/* <div
        style={{
          height: '80vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative'
        }}
      >
        
        <div style={{
          width: '120%',
          position: 'absolute',
          left:'0%',
          bottom:'-200px',
          height: '200px',
          backgroundColor: 'white',
          transformOrigin: 0,
          transform: 'rotate(-4deg)',
          zIndex: -1,
        }}></div>
      </div> */}
      <span
          style={{
            fontSize: '75px',
            fontWeight: 800,
            color: '#fff',
            textAlign: 'center',
            fontFamily: 'sans-serif',
            textShadow: "1px 1px 0 #ccc, 2px 2px 0 #ccc,3px 3px 0 #ccc, 4px 4px 0 #ccc,5px 5px 0 #ccc, 6px 6px 0 #ccc"
          }}
        >
          HI SeveNyU !
        </span>
      <ArticleItem />
      <div
        style={{
          width: '100%',
          minHeight: '100vh',
          background: 'white',
          paddingTop: '40px',
          paddingBottom: '40px',
        }}
      >
        <ArchiveCard />
        <ArchiveCard />
        <ArchiveCard /> 
        <ArchiveCard />
      </div>
    </div>
  );
}
