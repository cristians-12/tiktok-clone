import ClientOnly from "./components/ClientOnly";
import PostMain from "./components/PostMain";
import MainLayout from "./layouts/MainLayout";

export default function Home (){
  return(
    <>
      <MainLayout>
        <div>
         <ClientOnly>
            <PostMain post={{
              id: '123',
              user_id: '1',
              video_url: 'https://cdn.pixabay.com/video/2024/07/27/223461_large.mp4',
              text: 'Cool sea!',
              created_at: 'today',
              profile:{
                id:'1',
                name: 'test',
                image: '/images/placeholder-user.jpg'
              }
            }} />
         </ClientOnly>
        </div>
      </MainLayout>
    </>
  )
}