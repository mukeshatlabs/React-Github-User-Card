import React from 'react';
import ReactDOM from "react-dom";
import axios from "../node_modules/axios";
import UserCard from "./Components/UserCard";
import FollowerCard from "./Components/FollowerCard";
import './App.css';
import './styles.css';

class App extends React.Component{
  constructor(){
    super();
    this.state ={
      error: null,
      isUserLoaded: false,
      isFollowerLoaded: false,
      userData: null,
      followerData: null,
    }
  }

componentDidMount(){
  axios
  .get("https://api.github.com/users/mukeshatlabs")
  .then(
    res => {
      this.setState({
        isUserLoaded: true,
        userData: res.data
      }); 
    }
  )
  .catch(error => {
    this.setState({
      isUserLoaded: true,
      error
    }); 
  });

  axios
  .get("https://api.github.com/users/mukeshatlabs/followers")
  .then(
    res => {
      this.setState({
        isFollowerLoaded: true,
        followerData: res.data
      }); 
    }
  )
  .catch(error => {
    this.setState({
      isFollowerLoaded: true,
      error
    }); 
  });
}

render(){
  const { error, isUserLoaded, isFollowerLoaded, userData, followerData } = this.state;
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isUserLoaded) {
    return <div>Loading...</div>;
  } else if (!isFollowerLoaded) {
    return <div>Loading...</div>;
  } else {
  return (
    <div class="container">
      <div class="cards">
        <UserCard user={userData}/>
        <h2>Followers: </h2>
        {followerData.map(follower => (
          <FollowerCard follower={follower}/>
        ))}
      </div>
    </div>
  );
  }
}

}

export default App;
