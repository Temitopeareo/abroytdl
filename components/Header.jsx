"use client";
import React from "react";

export default function ExampleNavbarOne() {
  return (
    <div className="shadow-lg relative w-full bg-transparent">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="inline-flex items-center space-x-2">
          <span>
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2 5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5zm18 0H4v11h16V5zm2 15a1 1 0 0 1-1 1H3a1 1 0 1 1 0-2h18a1 1 0 0 1 1 1z"
                fill="#0D0D0D"
                />
            </svg>
          </span>
          <span className="font-bold">ABROTECH YT DOWNLOADER</span>
        </div>
        <div className="hidden lg:block"></div>
      </div>
    </div>
  );
}
