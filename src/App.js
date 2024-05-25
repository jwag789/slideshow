import logo from './logo.svg';
import './App.css';
import '@splidejs/react-splide/css';

import { Splide, SplideSlide } from '@splidejs/react-splide';

function App() {
  return (
    <div className="App">
      <Splide aria-label="My Favorite Images">
  <SplideSlide className="bg-emerald-200">
    <div className="h-full flex justify-center items-center">
      <div className=" flex justify-center items-center flex-col w-screen m-14 bg-emerald-100 p-10 rounded-md shadow-lg font-mono text-slate-600">
        <h2 className="text-3xl">Hello! My name is Justin! Nice to meet you!</h2>
        <p className="text-lg mt-4 w-3/4">I was born in Long Island, New York. I have always loved working with computers. Below is a list of my hobbies which led me to this career:</p>
        <ul className="w-3/4 mb-3 list-disc text-left text-lg mt-4 flex justify-between">
          <li>Drawing</li>
          <li>Painting</li>
          <li>Playing Piano</li>
          <li>Making Games</li>
        </ul>
        <div className="flex justify-between w-5/6 ">
        <img className="w-1/2" src="/computer1.jpg"  />
        <img className="w-1/2" src="/computer2.jpg" />
        </div>
      </div>
    </div>
  </SplideSlide>
  <SplideSlide className="bg-yellow-300">
    <div className="h-full flex justify-center items-center">
      <div className="flex justify-center items-center flex-row w-screen m-14 bg-yellow-100 p-10 rounded-md shadow-lg font-mono text-slate-600">
        <div className="flex justify-left text-left items-center flex-col">
        <h2 className="text-3xl">I am now a Brooklynite with my wife and puppy!</h2>
        <p className="text-lg mt-4">Married 2 months ago (I built our wedding website!), I moved to Brooklyn with my wife Angie and our puppy, Cappuccino. We love taking him for long walks, and exploring all of the coffee shops Brooklyn has to offer.</p>
        <p className="text-lg mt-4 w-full">I enjoy spending time working on my career by:</p>
        <ul className="list-disc text-left text-lg mt-4 w-5/6">
          <li>Making web apps</li>
          <li>Trying new technologies</li>
          <li>Reading dev blogs</li>
          <li>Freelancing</li>
        </ul>
        </div>
        <div className="flex justify-items-end max-w-96">
        <img className="w-11/12 ml-auto" src="/doggy2.jpg" />
        </div>
      </div>
    </div>
  </SplideSlide>
  <SplideSlide className="bg-purple-200">
    <div className="h-full flex justify-center items-center">
      <div className=" flex justify-center items-center flex-col w-screen m-14 bg-purple-100 p-10 rounded-md shadow-lg font-mono text-slate-600">
        <h2 className="text-3xl">One project I am extremely proud of...</h2>
        <p className="text-lg mt-4 w-3/4">Building a staffing application for the City of Sacramento from 0-1.</p>
        <p className="text-lg mt-4 w-3/4">Things I got to do during this project include:</p>
        <ul className="w-full mb-3 list-disc text-left text-lg mt-4 flex justify-between">
          <li>Gather requirements</li>
          <li>Create milestones</li>
          <li>Mentor junior developers</li>
          <li>Develop API, models, and front end</li>
        </ul>
        <ul className="w-full mb-3 list-disc text-left text-lg mt-4 flex justify-between">
          <li>Research technologies</li>
          <li>Architect application</li>
          <li>Lead development life cycle</li>
          <li>Level up coding skills</li>
        </ul>
        <div className="flex justify-between w-full mt-6">
        <img className="w-1/4" src="/site1.png"  />
        <img className="w-1/4" src="/site2.png" />
        <img style={{mixBlendMode: "multiply"}} className="w-1/4" src="/site5.png"  />
        <img style={{mixBlendMode: "multiply"}} className="w-1/4" src="/site3.png" />
        </div>
      </div>
    </div>
  </SplideSlide>
  <SplideSlide className="bg-red-200">
    <div className="h-full flex justify-center items-center">
      <div className=" flex justify-center items-center flex-col w-screen m-14 bg-red-100 p-10 rounded-md shadow-lg font-mono text-slate-600">
        <h2 className="text-3xl">Why am I so proud of this project?</h2>
        <p className="text-lg mt-4 w-3/4">I had the opportunity to showcase many different skill sets. During this project, I:</p>
        <ul className="w-full mb-3 list-disc text-left text-lg mt-4 flex justify-between">
          <li>Made architectural decisions</li>
          <li>Developed full stack</li>
          <li>Managed timelines</li>
          <li>Delivered client needs</li>
        </ul>
        <ul className="w-full mb-3 list-disc text-left text-lg mt-4 flex justify-between">
          <li>Led a team</li>
          <li>Managed developers</li>
          <li>Problem solved</li>
          <li>Resolved conflicts</li>
        </ul>
        <div className="text-left">
        <p>The result of this included <b>more efficient employees</b>, saving the client from hiring extra engineers, saving them <b>$300,000 in budget.</b></p>
        <p>We kept <b>load times fast</b>, with a <b>secure, scalable application,</b> and the client was extremely satisfied.</p>
        <p>I was given an extremely <b>high recommendation</b> from the client, leading another city of California requesting to hire me next.</p>
        <p>This is just one project I am extremely proud of. I put all of my effort into everything, and am a dedicated, passionate engineer.</p>
        </div>
        <div className="flex justify-between w-full mt-5">
        <img className="w-1/3" src="/port1.png"  />
        <img className="w-1/3" src="/port2.png" />
        <img className="w-1/3" src="/port3.png"  />
        </div>
      </div>
    </div>
  </SplideSlide>
</Splide>
    </div>
  );
}

export default App;
