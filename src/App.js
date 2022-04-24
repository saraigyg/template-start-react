import './styles/App.css';
import NavBar from './components/NavBar';
import FeaturedPost from './components/FeaturedPost';
import PostList from './components/PostList';
import Posts from './resources/Posts';
import CreatePost from './components/CreatePost';
import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ContactUsPage from './pages/ContactUsPage';
import JoinOurTeamPage from './pages/JoinOurTeamPage';
import CreatePostPage from './pages/CreatePostPage';
import NotFoundPage from './pages/NotFoundPage';
import DetailPostPage from './pages/DetailPostPage';

function App() {

  const [isVisible, setIsVisible] = useState(false);
  const [allPosts, setAllPosts] = useState(Posts());
  const [postId, setPostId] = useState();

  const onPress = () => {
    setIsVisible(!isVisible);
  };

  const navigate = useNavigate(); 

  const handleOnSave = (post) => {
    if (postId) {
      const copyOfPosts = Array.from(allPosts);
      const newAllPosts = copyOfPosts.filter((post, index) => index !== postId)//[...copyOfPosts, post];
      setAllPosts([...newAllPosts, post]);
      setPostId();
    }
    else {
      setAllPosts([...allPosts, post]);
    }

    navigate("/", {replace:true}); //replace exactamente a la pag anterior o posterior
  };

  const getPostById = (postId) => allPosts[postId];

  const handleOnEdit = (postId) => {
    setIsVisible(true); //onPress(true)
    setPostId(postId);
  }

  return (
    <div className="App">
      <NavBar onPress={() => onPress()} />
      <Routes>
        <Route index element={<HomePage allPosts = {allPosts} handleOnEdit = {handleOnEdit}/>} />
        <Route path= "join-our-team" element = {<JoinOurTeamPage />} />
        <Route path= "contact-us" element = {<ContactUsPage />} />
        <Route path= "create-post" element = {<CreatePostPage postToUpdate={allPosts[postId]} 
        onSave={handleOnSave} />} />
        <Route path= "post/:postId" element = {<DetailPostPage onEdit = {handleOnEdit} getPostById={getPostById} /> } />
        <Route path= "*" element = {<NotFoundPage/>} />
        
      </Routes>
      {/*
        isVisible ?
          <CreatePost
            postToUpdate={allPosts[postId]}
            onPress={() => onPress()}
            onSave={handleOnSave}
          />
          :
          <><FeaturedPost updatedAt={"April 20, 2022"}
            height={300}
            width={300}
            title={"The Internet of Medical Things: The Healthcare Revolution"}
            content={"Since the pandemic started, there has been a rapid effort in different research communities to exploit a wide variety of technologies to combat this worldwide threat, and IoT technology is one of the pioneers in this area."}
            image={"http://speechsynergy.com/wp-content/uploads/2015/08/adult_therapy_final_800w.jpg"}
            blogLink={"https://google.com/"}
          />
            <PostList posts={allPosts} onEdit={handleOnEdit} />
          </>
  */}
    </div>
  );
}

export default App;
