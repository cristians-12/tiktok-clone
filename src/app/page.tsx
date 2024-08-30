import ClientOnly from "./components/ClientOnly";
import MainLayout from "./layouts/MainLayout";

export default function Home (){
  return(
    <>
      <MainLayout>
        <div>
         <ClientOnly>
            <PostMain post={{}} />
         </ClientOnly>
        </div>
      </MainLayout>
    </>
  )
}