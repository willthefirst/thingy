import Image from 'next/image'

import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <main>
      <div className='flex flex-col min-h-dvh bg-white text-[#333]'>
        <header className='px-4 lg:px-6 h-14 flex items-center justify-between'>
          <div className='flex gap-4 sm:gap-6' />
        </header>
        <main className='flex-1 grid grid-cols-1 md:grid-cols-2 items-center justify-center px-4 md:px-6 py-12 md:py-24 lg:py-32'>
          <div className='space-y-4'>
            <h1 className='text-4xl font-bold tracking-tighter text-[#333] sm:text-5xl md:text-6xl'>
              A website, just for you, made by me
            </h1>
            <p className='text-lg text-[#555]'>
              I{`&apos`}ll make a website for you.
            </p>
          </div>
          <div className='max-w-md mx-auto w-full space-y-4'>
            <form className='space-y-4'>
              <div className='grid gap-2'>
                <Label
                  htmlFor='email'
                  className='text-[#333]'>
                  Your email
                </Label>
                <Input
                  id='email'
                  type='email'
                  placeholder='m@example.com'
                  className='bg-white text-[#333] border border-[#ccc]'
                />
              </div>
              <div className='grid gap-2'>
                <Label
                  htmlFor='surname'
                  className='text-[#333]'>
                  Your preferred surname
                </Label>
                <Input
                  id='surname'
                  type='text'
                  placeholder='Palmer'
                  className='bg-white text-[#333] border border-[#ccc]'
                />
              </div>
              <div className='grid gap-2'>
                <Label
                  htmlFor='description'
                  className='text-[#333]'>
                  What do you want on your website? Please make it fun!
                </Label>
                <Textarea
                  id='description'
                  placeholder='A website with a dancing unicorn and a glitter button!'
                  className='bg-white text-[#333] min-h-[120px] border border-[#ccc]'
                />
              </div>
              <Button
                type='submit'
                className='w-full bg-[#333] text-white'>
                Submit
              </Button>
            </form>
          </div>
        </main>
      </div>
    </main>
  )
}
