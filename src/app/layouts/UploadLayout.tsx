import React from 'react'
import TopNav from './includes/TopNav'

const UploadLayout = ( {children}:{children:React.ReactNode}) => {
  return (
    <>
        <div>
            <TopNav/>
            <div>
                {children}
            </div>
        </div>
    </>
  )
}

export default UploadLayout