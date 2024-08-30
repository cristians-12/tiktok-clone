import ClientOnly from "./components/ClientOnly";
import PostMain from "./components/PostMain";
import MainLayout from "./layouts/MainLayout";

export default function Home (){
  return(
    <>
      <MainLayout>
        <div className="pt-14">
         <ClientOnly>
            <PostMain post={{
              id: '123',
              user_id: '1',
              video_url: 'https://cdn.pixabay.com/video/2024/07/27/223461_large.mp4',
              text: 'Cool sea!',
              created_at: 'today',
              likes:['pedro', 'tilin'],
              profile:{
                id:'1',
                name: 'test',
                image: '/images/placeholder-user.jpg'
              }
            }} />
            <PostMain post={{
              id: '123',
              user_id: '1',
              video_url: 'https://cdn.pixabay.com/video/2020/08/14/47213-451041047_large.mp4',
              text: 'Yesterday walk',
              created_at: 'today',
              likes:[],
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