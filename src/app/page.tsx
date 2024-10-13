'use client';
import Footer from 'src/components/Footer';
import TransactionWrapper from 'src/components/TransactionWrapper';
import WalletWrapper from 'src/components/WalletWrapper';
import { ONCHAINKIT_LINK } from 'src/links';
import OnchainkitSvg from 'src/svg/OnchainkitSvg';
import { useAccount } from 'wagmi';
import LoginButton from '../components/LoginButton';
import SignupButton from '../components/SignupButton';
import CreatorShowcase from '../components/CreatorShowcase';
import { useState, useEffect } from 'react';
import { FaSun, FaMoon, FaDesktop } from 'react-icons/fa';

enum Theme {
  Dark = 'dark',
  Light = 'light',
  System = 'system',
}

export default function Page() {
  const { address } = useAccount();
  const [theme, setTheme] = useState<Theme>(Theme.System);

  useEffect(() => {
    if (theme === Theme.System) {
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      document.documentElement.classList.toggle('dark', systemPrefersDark);
    } else {
      document.documentElement.classList.toggle('dark', theme === Theme.Dark);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      if (prevTheme === Theme.Dark) return Theme.Light;
      if (prevTheme === Theme.Light) return Theme.System;
      return Theme.Dark;
    });
  };

  const getCurrentThemeClasses = () => {
    switch (theme) {
      case Theme.Dark:
        return 'bg-gradient-to-b from-[#222336] to-twitter-darker text-white';
      case Theme.Light:
        return 'bg-gradient-to-b from-white to-gray-500 text-black';
      default:
        return 'bg-gradient-to-b from-[#222336] to-[#222336] text-white';
    }
  };

  return (
    <div className={`flex flex-col  ${getCurrentThemeClasses()}`}>
      {/* Navigation Bar */}
      <header className="flex items-center justify-between p-6 bg-opacity-80 backdrop-blur-lg shadow-lg">
        <div className="flex items-center space-x-4">
          <a
            href="/"
            className="flex items-center text-2xl font-bold tracking-tight text-white transition-transform duration-300 transform hover:scale-105"
          >
            {/* <OnchainkitSvg
            /> */}
            Web3 Freelance Hub
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-700 text-white shadow-md hover:bg-gray-600"
          >
            {theme === Theme.Dark ? <FaSun /> : theme === Theme.Light ? <FaDesktop /> : <FaMoon />}
          </button>
          <SignupButton />
          {!address && <LoginButton />}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-1 flex-col items-center justify-center space-y-10 px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
            Connect, Showcase, and Hire on the Blockchain
          </h1>
          <p className="mt-4 text-lg text-indigo-200">
            The ultimate decentralized platform for creators and clients. <br/>
            Discover new talent, support creators with crypto, and launch your project.
          </p>
        </div>

        {/* Wallet Section */}
        <div className="w-auto max-w-sm ">
          {address ? (
            <div className="p-6 text-center bg-indigo-800 rounded-lg shadow-lg">
              <p className="text-xl font-medium">Welcome, {address.slice(0, 6)}...{address.slice(-4)}</p>
            </div>
          ) : (
            <WalletWrapper text="Connect your wallet to start" />
          )}
        </div>

        {/* Creator Showcase */}
        <section>
          <h2 className="text-2xl font-semibold">Featured Creators</h2>
          <CreatorShowcase />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
