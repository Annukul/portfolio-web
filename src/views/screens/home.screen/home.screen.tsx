import React from 'react';
import backgroundImage from '../../../assets/images/main-background.jpg';
import profileImage from '../../../assets/images/profile.jpg';

export const HomeScreen = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: 'no-repeat',
          width: '100vw',
          height: '100vh',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
          backgroundPosition: '50%',
        }}
        className="flex">
        <div className="w-3/5 flex flex-col items-center justify-center">
          {/* <div>
            <img
              className="w-60 h-60"
              style={{ borderRadius: 200 }}
              src={profileImage}
              alt="Logo"
            />
          </div> */}
          <div className="w-3/4 mb-5">
            <p
              style={{ fontFamily: 'RubikMedium' }}
              className="text-7xl text-amber-300">
              Hey! I'm Annukul
            </p>
          </div>
          <div className="w-3/4">
            <p style={{ fontFamily: 'RubikMedium' }} className="text-3xl">
              A Full Stack Developer experienced in building scalable and high
              performant web applications.
            </p>
          </div>
        </div>
        <div className="w-2/5">
          <nav className="flex w-full h-4/5 items-center justify-start px-10 bg-amber-300">
            <ul className="flex flex-col justify-between h-72">
              <li
                style={{ fontFamily: 'RubikMedium' }}
                className="text-6xl font-bold text-violet-400">
                About
              </li>
              <li
                style={{ fontFamily: 'RubikMedium' }}
                className="text-6xl font-mono font-bold text-violet-400">
                Contact
              </li>
              <li
                style={{ fontFamily: 'RubikMedium' }}
                className="text-6xl font-mono font-bold text-violet-400">
                Projects
              </li>
              <li
                style={{ fontFamily: 'RubikMedium' }}
                className="text-6xl font-mono font-bold text-violet-400">
                Blog
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};
