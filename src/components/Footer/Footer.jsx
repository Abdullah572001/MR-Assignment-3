import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router";
import { X } from '@thesvg/react';
import { RiLinkedinFill, RiFacebookFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="bg-[#001931]">
      <div className="max-w-350 mx-auto px-4 py-20">
        <div className="grid justify-between grid-cols-1 md:grid-cols-2 lg:grid-cols-4 space-y-8">
          <div className="">
            <Link to="/" className="flex items-center gap-2">
              <img className="w-10 h-10" src={logo} alt="" />
              <h2 className="font-bold text-white">HERO.IO</h2>
            </Link>
            <p className="text-gray-400 text-sm mt-4">
              HERO.IO is your ultimate destination for discovering, exploring,
              and installing the most innovative and powerful applications
              available today. Built for modern users, it delivers a seamless
              browsing experience with detailed app insights, ratings, and
              reviews — all in one beautifully designed platform.
            </p>
          </div>

          <div className="space-y-4 md:ml-8">
            <h3 className="text-white font-bold text-lg">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  All Apps
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Installation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-white font-bold text-lg">Categories</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a className="hover:text-white transition">
                  Social Media Apps
                </a>
              </li>
              <li>
                <a className="hover:text-white transition">
                  Productivity Apps
                </a>
              </li>
              <li>
                <a className="hover:text-white transition">
                  Entertainment Apps
                </a>
              </li>
              <li>
                <a className="hover:text-white transition">
                  Utility Apps
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-white font-bold text-lg">Social Links</h2>
            <ul className="flex gap-4 mt-4">
                <li><X className="h-5 w-5 bg-white rounded-full p-0.5" /></li>
                <li><RiLinkedinFill className="h-5 w-5 bg-white rounded-full p-0.5" /></li>
                <li><RiFacebookFill className="h-5 w-5 bg-white rounded-full p-0.5" /></li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-600 mt-8 lg:mt-3" />

        <p className="text-sm text-gray-400 text-center mt-8 lg:mt-4">Copyright © 2025 - All right reserved</p>
      </div>
    </div>
  );
};

export default Footer;
