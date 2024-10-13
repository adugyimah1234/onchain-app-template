'use client';
import React from 'react';
import { FaHeart, FaEthereum, FaBriefcase } from 'react-icons/fa';
import { useAccount } from 'wagmi';
import { useTheme } from './ThemeContext'; // Adjust the path as necessary

interface CreatorPost {
  id: string;
  creatorName: string;
  profileImage: string;
  contentImage: string;
  description: string;
  likes: number;
}

// Sample posts
const posts: CreatorPost[] = [
  {
    id: '1',
    creatorName: 'Alice Designer',
    profileImage: '/images/alice-profile.jpg',
    contentImage: '/images/alice-design.jpg',
    description: 'Check out my latest 3D NFT art! 🌌',
    likes: 250,
  },
  {
    id: '1',
    creatorName: 'Alice Designer',
    profileImage: '/images/alice-profile.jpg',
    contentImage: '/images/alice-design.jpg',
    description: 'Check out my latest 3D NFT art! 🌌',
    likes: 250,
  },
  {
    id: '1',
    creatorName: 'Alice Designer',
    profileImage: '/images/alice-profile.jpg',
    contentImage: '/images/alice-design.jpg',
    description: 'Check out my latest 3D NFT art! 🌌',
    likes: 250,
  },
  {
    id: '1',
    creatorName: 'Alice Designer',
    profileImage: '/images/alice-profile.jpg',
    contentImage: '/images/alice-design.jpg',
    description: 'Check out my latest 3D NFT art! 🌌',
    likes: 250,
  },
  {
    id: '1',
    creatorName: 'Alice Designer',
    profileImage: '/images/alice-profile.jpg',
    contentImage: '/images/alice-design.jpg',
    description: 'Check out my latest 3D NFT art! 🌌',
    likes: 250,
  },
  {
    id: '1',
    creatorName: 'Alice Designer',
    profileImage: '/images/alice-profile.jpg',
    contentImage: '/images/alice-design.jpg',
    description: 'Check out my latest 3D NFT art! 🌌',
    likes: 250,
  },
  {
    id: '1',
    creatorName: 'Alice Designer',
    profileImage: '/images/alice-profile.jpg',
    contentImage: '/images/alice-design.jpg',
    description: 'Check out my latest 3D NFT art! 🌌',
    likes: 250,
  },
  // Add more posts as needed
];

export default function CreatorShowcase() {
  const { address } = useAccount();
  const { theme } = useTheme(); // Get theme from context

  return (
    <div className={`grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 bg-${theme === 'dark' ? 'gray-800' : 'white'}`}>
      {posts.map((post) => (
        <div key={post.id} className={`rounded-lg shadow-lg p-4 transform transition-all hover:scale-105 bg-${theme === 'dark' ? 'gray-700' : 'gray-100'} text-${theme === 'dark' ? 'white' : 'black'}`}>
          {/* Header Section */}
          <div className="flex items-center space-x-4">
            <img src={post.profileImage} alt={post.creatorName} className="w-12 h-12 rounded-full object-cover" />
            <div>
              <p className="text-lg font-semibold">{post.creatorName}</p>
              <p className="text-xs text-gray-400">Posted 1h ago</p>
            </div>
          </div>
          {/* Content Section */}
          <div className="my-4 rounded-lg overflow-hidden">
            <img src={post.contentImage} alt="Content" className="w-full h-64 object-cover" />
          </div>
          <p className="mb-4 text-gray-300">{post.description}</p>
          {/* Interaction Section */}
          <div className="flex items-center justify-between space-x-4">
            {/* Like Button */}
            <button className="flex items-center space-x-1 text-indigo-400 hover:text-indigo-600 transition-colors">
              <FaHeart className="w-5 h-5" />
              <span>{post.likes}</span>
            </button>
            {/* Donate Button */}
            <button className="flex items-center space-x-1 text-green-400 hover:text-green-600 transition-colors">
              <FaEthereum className="w-5 h-5" />
              <span>Donate</span>
            </button>
            {/* Hire Button */}
            {address && (
              <button className="flex items-center space-x-1 text-yellow-400 hover:text-yellow-600 transition-colors">
                <FaBriefcase className="w-5 h-5" />
                <span>Hire</span>
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
