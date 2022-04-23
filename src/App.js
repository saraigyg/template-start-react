import './styles/App.css';
import NavBar from './components/NavBar';
import FeaturedPost from './components/FeaturedPost';
import PostList from './components/PostList';
import Posts from './resources/Posts';
import CreatePost from './components/CreatePost';
import React, {useState} from 'react';

function App() {

  const [isVisible, setIsVisible] = useState(false);
  const [allPosts, setAllPosts] = useState(Posts());

  const onPress = () => {
    setIsVisible(!isVisible);
  };

  const handleOnSave = (post) => {
    const copyOfPosts = Array.from(allPosts);
    const newAllPosts = [...copyOfPosts, post];
    setAllPosts(newAllPosts); 
    onPress();
  };

  return (
    <div className="App">
      <NavBar onPress={() =>onPress()}/>

      {
        isVisible ?
        <CreatePost 
        onPress={() => onPress()}
        onSave = {handleOnSave}
        />
        :
        <><FeaturedPost updatedAt={"April 20, 2022"}
            height={500}
            width={500}
            title={"The Internet of Medical Things: The Healthcare Revolution"}
            content={"Since the pandemic started, there has been a rapid effort in different research communities to exploit a wide variety of technologies to combat this worldwide threat, and IoT technology is one of the pioneers in this area."}
            image={"http://speechsynergy.com/wp-content/uploads/2015/08/adult_therapy_final_800w.jpg"}
            blogLink={"https://google.com/"} 
          />  
          <PostList posts={Posts()} />
        </>
      }

     
      
    </div>
  );
}

export default App;
