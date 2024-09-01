import { Metadata } from "next";
import ClientOnly from "./components/ClientOnly";
import PostMain from "./components/PostMain";
import MainLayout from "./layouts/MainLayout";

export const metadata: Metadata = {
  title: 'Tiktok',
  keywords: ['videos', 'cool', 'funny', 'fyp']
}

export default function Home() {
  return (
    <>
      <MainLayout>
        <div className="pt-14">
          <ClientOnly>
            <PostMain post={{
              id: '12',
              user_id: '1',
              video_url: 'https://cdn.pixabay.com/video/2024/07/14/221180_large.mp4',
              text: 'Cool sea!',
              created_at: 'today',
              likes: ['pedro', 'tilin'],
              profile: {
                id: '1',
                name: 'test',
                image: '/images/placeholder-user.jpg'
              }
            }} />
            <PostMain post={{
              id: '12345',
              user_id: '1',
              video_url: 'https://cdn.pixabay.com/video/2020/08/14/47213-451041047_large.mp4',
              text: 'Yesterday walk',
              created_at: 'today',
              likes: [],
              profile: {
                id: '1',
                name: 'Sheim',
                image: 'https://scontent.fbaq2-2.fna.fbcdn.net/v/t39.30808-6/438205887_25694787833438850_7520236421800646776_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGqT7H9iRFIArMC_iXp7A44ifGpna66s6uJ8amdrrqzq_1ZHuLGBTw7qXpkYlRjHiPUORbpFsaMNKihiMlb_GKe&_nc_ohc=e3oDToH_VmIQ7kNvgGmCQXQ&_nc_zt=23&_nc_ht=scontent.fbaq2-2.fna&oh=00_AYCUEAOX2aBdeRoxmqUpBr4bMozcLNz1HbOPDiOPPVNtwQ&oe=66DA8A4D'
              }
            }} />

          </ClientOnly>
        </div>
      </MainLayout>
    </>
  )
}