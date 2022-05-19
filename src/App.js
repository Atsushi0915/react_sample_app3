import React, { useState } from 'react'
import './App.css';

const LikeButton = () => {
  const [liked, setliked] = React.useState(false)

  const taggleLiked = () => setliked(!liked)

  return (
    <button className="likeButton" onClick={taggleLiked}>
      {liked? "いいね済" : "いいね前"}
    </button>
  );
}

const App = () => {
  return (
    <>
      <LikeButton />
    </>
  );
}

export default App;
