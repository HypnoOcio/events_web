import EventForm from '@/components/shared/EventForm'
import { auth, clerkClient } from '@clerk/nextjs'
import React from 'react'

const Events = () => {
  const userId = auth() as unknown as string;
  const namne = 'xxxx';
  return (
    <>
    <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
    <div className='wrapper h3-bold text-center sm:text-left'>Create events</div>
    </section>
    <div className='wrapper my-8'>
      {/* <EventForm userID={namne.toString()} EventFormProp={e}/> */}
      <EventForm userID="xxx" type="Create" />
      
    </div>
    </>
  )
}

export default Events

