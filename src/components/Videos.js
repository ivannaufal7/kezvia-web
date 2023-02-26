import React, { useState, useEffect } from 'react';
import { BsPlayCircleFill } from 'react-icons/bs';
import axios from 'axios';

import ModalVideo from 'react-modal-video'
import '../video.scss'

import { videos } from '../data'

const Videos = () => {
  // const [data, setData] = useState([])
  const [isOpen, setIsOpen] = useState(false)

  // useEffect(() => {
  //   const API_KEY = 'AIzaSyBsP3YkRhhQsh4GNnk6d5hdqcGFoM5GMtU'
  //   const CHANNEL_ID = 'UC4afcoa-8p6upqKy6iEKvTg'
  //   const apiUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&maxResults=4&order=date&type=video&key=${API_KEY}`
  //   axios.get(apiUrl)
  //     .then(response => {
  //       setData(response.data.items)
  //       // console.log(response.data)
  //     })
  //     .catch(error => {
  //       console.log(error)
  //     })
  // }, [])

  return <section id='videos' className='bg-heading min-h-[800px] lg:min-h-[700px] mt-48'>
    <div className='container mx-auto'>
      {/* <div>
        <h1 className='text-white'>{data[1].snippet.title}</h1>
        <p className='text-white'>{data[1].snippet.thumbnails.high.url}</p>
        {data.map(video => (
          <div key={video.id.videoId}>
            <h2>{video.snippet.title}</h2>
            <p>{video.snippet.description}</p>
            <img src={video.snippet.thumbnails.high.url} alt="video thumbnail" />
          </div>
        ))}
      </div> */}
      <div className='pt-8 pb-12'>
        <p
          className='text-lg text-white text-center'
          data-aos='fade-down'
          data-aos-delay='400'
        >Videos</p>
        <h2
          className='h2 text-white text-center'
          data-aos='fade-down'
          data-aos-delay='500'
        >Recently Upload</h2>
      </div>
      <div className='flex flex-col gap-y-4 lg:flex-row-reverse gap-x-12'>
        {videos.filter(item => item.videoId === "9d4l9YHxVKY").map(item => {
          //destructive item
          const { videoId, bgImg } = item
          return (
            <>
              <div
                className='bg-thumb4 w-full h-[300px] lg:h-[462px] bg-no-repeat bg-cover 
                flex items-center justify-center rounded-lg mb-8'
                style={{ backgroundImage: `url(${bgImg})` }}
                data-aos='fade-left'
                data-aos-delay='700'
                key={videoId}
              >
                <div onClick={() => setIsOpen(videoId)} className='text-orange text-4xl lg:text-[42px] hover:scale-150 transition cursor-pointer'>
                  <BsPlayCircleFill />
                </div>
              </div>

              <ModalVideo
                channel='youtube'
                autoplay
                isOpen={isOpen === videoId}
                videoId={videoId}
                onClose={() => setIsOpen(false)}
                className='w-[600px]'
              />
            </>
          )
        })}

        {/* {data.filter(video => video.id.videoId === "um0ux__TzLI").map(video => (
          <>
            <div
              className='w-full h-[300px] lg:h-[462px] bg-no-repeat bg-cover 
        flex items-center justify-center rounded-lg mb-8'
              style={{ backgroundImage: `url(${video.snippet.thumbnails.high.url})` }}
              data-aos='fade-left'
              data-aos-delay='700'
              key={video.id.videoId}
            >
              <div onClick={() => setIsOpen(video.id.videoId)} className='text-orange text-4xl lg:text-[42px] hover:scale-150 transition cursor-pointer'>
                <BsPlayCircleFill />
              </div>
            </div>

            <ModalVideo
                channel='youtube'
                autoplay
                isOpen={isOpen === video.id.videoId}
                videoId={video.id.videoId}
                onClose={() => setIsOpen(false)}
                className='w-[600px]'
              />
          </>
        ))} */}

        <div
          className='flex flex-col gap-y-8 mb-8'
          data-aos='fade-right'
          data-aos-delay='600'
        >
          {videos.filter(item => item.videoId !== "9d4l9YHxVKY").map(item => {
            //destructive item
            const { videoId, title, bgImg } = item
            return (
              <>
                <div className='flex flex-row gap-x-8' key={videoId}>
                  <div className='bg-thumb1 w-[140px] lg:min-w-[169px] h-[132px] bg-no-repeat bg-cover flex items-center justify-center rounded-lg'
                  style={{ backgroundImage: `url(${bgImg})` }}
                  >
                    <div onClick={() => setIsOpen(videoId)} className='text-orange text-2xl lg:text-[32px] hover:scale-150 transition cursor-pointer'>
                      <BsPlayCircleFill />
                    </div>
                  </div>
                  <div className='flex flex-col gap-y-4'>
                    <span className='bg-grey text-white p-2 w-[63px] lg:w-[63px] h-[35px] flex items-center justify-center rounded-2xl'>New</span>
                    <p className='truncate w-[200px] lg:w-[304px] md:w-[540px] text-xl text-white'>{title}</p>
                  </div>

                </div>
                <ModalVideo
                  channel='youtube'
                  autoplay
                  isOpen={isOpen === videoId}
                  videoId={videoId}
                  onClose={() => setIsOpen(false)}
                />
              </>
            )
          })}


          {/* <div className='flex flex-row gap-x-8'>
            <div className='bg-thumb1 w-[169px] h-[132px] bg-no-repeat bg-cover flex items-center justify-center rounded-lg'>
              <div className='text-orange text-2xl lg:text-[32px] hover:scale-150 transition'>
                <BsPlayCircleFill />
              </div>
            </div>
            <div className='flex flex-col gap-y-4'>
              <span className='bg-grey text-white p-2 w-[63px] h-[35px] flex items-center justify-center rounded-2xl'>New</span>
              <p className='truncate w-[304px] text-xl text-white'>What I eat in 2 days (asian food) | Make dumplings with me, Hai Di Lao hotpot</p>
            </div>

          </div>
          <div className='flex flex-row gap-x-8'>
            <div className='bg-thumb2 w-[169px] h-[132px] bg-no-repeat bg-cover flex items-center justify-center rounded-lg'>
              <div className='text-orange text-2xl lg:text-[32px] hover:scale-150 transition'>
                <BsPlayCircleFill />
              </div>
            </div>
            <div className='flex flex-col gap-y-4'>
              <span className='bg-grey text-white p-2 w-[63px] h-[35px] flex items-center justify-center rounded-2xl'>New</span>
              <p className='truncate w-[304px] text-xl text-white'>What I eat in 2 days (asian food) | Make dumplings with me, Hai Di Lao hotpot</p>
            </div>

          </div>
          <div className='flex flex-row gap-x-8'>
            <div className='bg-thumb3 w-[169px] h-[132px] bg-no-repeat bg-cover flex items-center justify-center rounded-lg'>
              <div className='text-orange text-2xl lg:text-[32px] hover:scale-150 transition'>
                <BsPlayCircleFill />
              </div>
            </div>
            <div className='flex flex-col gap-y-4'>
              <span className='bg-grey text-white p-2 w-[63px] h-[35px] flex items-center justify-center rounded-2xl'>New</span>
              <p className='truncate w-[304px] text-xl text-white'>What I eat in 2 days (asian food) | Make dumplings with me, Hai Di Lao hotpot</p>
            </div>

          </div> */}
        </div>

      </div>
    </div>
  </section>;
};

export default Videos;
