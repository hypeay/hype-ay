import { MailIcon, HomeIcon, PhoneCall } from 'lucide-react';
// components
import Form from '@/components/Form';
import Head from 'next/head';

const Contact = () => {
  const email = 'management@hypeay.com';

  return (
    <>
      <Head>
        <title>Contact Us - Hype-ay</title>
        <meta
          name='description'
          content='Get in touch with Hype-ay for inquiries, bookings, or collaborations. We are here to make your event unforgettable!'
        />
        <meta
          name='keywords'
          content='Contact Hype-ay, Dance Classes, Event Booking, Corporate Events, Wedding Dance'
        />
        <meta property='og:title' content='Contact Us - Hype-ay' />
        <meta
          property='og:description'
          content='Reach out to Hype-ay for professional dance services and event planning. Let&apos;s create magic together.'
        />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://hypeay.com/contact' />
        <meta property='og:image' content='/path-to-contact-image.jpg' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content='Contact Us - Hype-ay' />
        <meta
          name='twitter:description'
          content='Professional dance services for all occasions. Contact Hype-ay for personalized event solutions.'
        />
        <link rel='canonical' href='https://hypeay.com/contact' />
      </Head>
      <section>
        <div className='container mx-auto'>
          {/* text & illustration */}
          <div className='grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24'>
            {/* text */}
            <div className='flex flex-col justify-center'>
              <div className='flex items-center gap-x-4 text-primary text-lg mb-4'>
                <span className='w-[30px] h-[2px] bg-primary'></span>
                Say Hello 👋
              </div>
              <h1 className='h1 max-w-md mb-8'>Let&apos;s Work Together.</h1>
              <p className='subtitle max-w-[400px]'>
                Got questions, ideas, or ready to plan an unforgettable event? Let&apos;s create magic together.
              </p>
            </div>
            {/* illustration */}
            <div className='hidden xl:flex w-full bg-contact_illustration_light dark:bg-contact_illustration_dark bg-contain bg-top bg-no-repeat'></div>
          </div>
          {/* info text & form */}
          <div className='grid xl:grid-cols-2 mb-24 xl:mb-32'>
            {/* info text */}
            <div className='flex flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24 text-base xl:text-lg'>
              {/* mail */}
              <div className='flex items-center gap-x-8'>
                <MailIcon size={18} className='text-primary' />
                <div>
                  <a
                    href={`mailto:${email}`}
                    className='hover:text-primary transition-colors'
                  >
                    {email}
                  </a>
                </div>
              </div>
              {/* address */}
              <div className='flex items-center gap-x-8'>
                <HomeIcon size={18} className='text-primary' />
                <div>YMCA Fitness, Aungier Street, Dublin 2, Ireland</div>
              </div>
              {/* phone */}
              <div className='flex items-center gap-x-8'>
                <PhoneCall size={18} className='text-primary' />
                <div>
                  <a
                    href='tel:+353831161066'
                    className='hover:text-primary transition-colors'
                  >
                    +353 83 116 1066
                  </a>
                </div>
              </div>
            </div>
            <Form />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
