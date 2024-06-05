import { Link } from 'react-router-dom';
import Header_xx from '../components/Header_xx';

const HomePage_xx = () => {
  return (
    <>
      <div>
        <div className='antialiased bg-primary-950 text-primary-100 min-h-screen flex flex-col relative'>
          <Header_xx />
          <div class="flex-1 grid">
          <main class="w-full h-screen">
            <main>
              <img
                alt="Mountains and forests with two cabins"
                class="absolute object-cover h-full w-full text-transparent"
                src="../public/images/bg.webp"
              />
              <div class="relative pt-40 z-10 text-center">
                <h1
                  class="text-8xl text-slate-100 mb-10 tracking-tight font-normal"
                >
                  Welcome to paradise.
                </h1>
                <a
                  class="bg-amber-300 px-8 py-6 text-primary-800 text-lg font-semibold hover:bg-amber-500 transition-all"
                  href="./cabins.html"
                  >Explore luxury cabins</a
                >
              </div>
            </main>
          </main>
        </div>
        </div>
      </div>
    </>
  );
};
export default HomePage_xx;
