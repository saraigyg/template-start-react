import React from 'react'
import FeaturedPost from '../components/FeaturedPost'
import PostList from '../components/PostList'

const HomePage = ({allPosts, handleOnEdit}) => {
  return (
    <>
          <FeaturedPost 
            updatedAt={"April 20, 2022"}
            height={300}
            width={300}
            title={"The Internet of Medical Things: The Healthcare Revolution"}
            content={"Since the pandemic started, there has been a rapid effort in different research communities to exploit a wide variety of technologies to combat this worldwide threat, and IoT technology is one of the pioneers in this area."}
            image={"http://speechsynergy.com/wp-content/uploads/2015/08/adult_therapy_final_800w.jpg"}
            blogLink={"https://google.com/"}
          />
            <PostList posts={allPosts} onEdit={handleOnEdit} />
          </>
  )
}

export default HomePage