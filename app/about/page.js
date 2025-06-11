import React from 'react'

const about = () => {
  return (
    <section id="about" className="py-16 px-4 text-gray-800 dark:text-gray-200">
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-6">
        <div className="inline-block border-blue-500 pb-1">Hey! I'm <span className="font-semibold text-blue-600 dark:text-blue-400">Naveen Kr Gupta</span> and I'm a full stack engineer.</div>
      </h2>
      <p className="text-lg leading-relaxed mb-6">
        Hello..! I am <span className="font-semibold text-blue-600 dark:text-blue-400">Naveen Kr Gupta</span> from Maharajganj District.<br />
        Currently, I am pursuing <span className="font-semibold">BCA (Bachelor of Computer Applications)</span> — 1st Year at <span className="font-semibold">MGPG (Mahatma Gandhi Post Graduate College, Gorakhpur)</span>.
      </p>
      </div>

      {/* <div className="mt-[100px] max-w-3xl mx-auto text-center">
    <h3 className="text-3xl font-bold mb-4 text-blue-600 dark:text-blue-400">My Vision</h3>
    <p className="text-lg leading-relaxed mb-6">
      My goal is to become a skilled full-stack developer who not only understands the technical side of software but also creates digital experiences that are useful, inclusive, and inspiring. I aim to contribute to real-world projects that make a difference in people’s lives.
    </p>
    </div> */}

    <div className="mt-[300px] max-w-3xl mx-auto text-center">
      <h3 className="text-3xl font-bold mb-6 text-blue-600 dark:text-blue-400">Connect With Me</h3>
      <div className="flex justify-center gap-6">
        {/* GitHub */}
        <a href="https://github.com/Naveen-Gupta99" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.5-1.3-1.2-1.6-1.2-1.6-1-.6.1-.6.1-.6 1.1.1 1.6 1.1 1.6 1.1 1 .1.7-.4.7-.4-.5-.7-.2-1.3.1-1.5-2.6-.3-5.3-1.3-5.3-5.9a4.7 4.7 0 0 1 1.3-3.3c-.1-.3-.6-1.5.1-3.1 0 0 1-.3 3.4 1.2a12 12 0 0 1 6.3 0c2.4-1.5 3.4-1.2 3.4-1.2.7 1.6.3 2.8.1 3.1a4.7 4.7 0 0 1 1.3 3.3c0 4.6-2.7 5.6-5.3 5.9.3.3.5.7.5 1.4v2.1c0 .3.2.7.8.6A12 12 0 0 0 12 0z"/>
          </svg>
        </a>
        {/* LinkedIn */}
        <a href="https://linkedin.com/in/naveen-kr-gupta-510190336" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14a5 5 0 0 0-5 5v14a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5v-14a5 5 0 0 0-5-5zm-11 20h-3v-10h3v10zm-1.5-11.3a1.7 1.7 0 1 1 0-3.4 1.7 1.7 0 0 1 0 3.4zm13.5 11.3h-3v-5.5c0-3.2-4-3-4 0v5.5h-3v-10h3v1.5c1.4-2.6 7-2.8 7 2.5v6.1z"/>
          </svg>
        </a>
        {/* Twitter */}
        <a href="https://twitter.com/@NaveenG71236476" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.949.564-2.005.974-3.127 1.194a4.48 4.48 0 0 0-7.643 4.088c-3.727-.184-7.038-1.973-9.251-4.69a4.481 4.481 0 0 0-.607 2.256c0 1.555.791 2.927 1.996 3.73a4.466 4.466 0 0 1-2.032-.562v.057a4.484 4.484 0 0 0 3.588 4.392c-.379.103-.779.158-1.19.158-.292 0-.577-.028-.855-.08a4.482 4.482 0 0 0 4.188 3.114 8.975 8.975 0 0 1-5.561 1.918c-.36 0-.716-.021-1.066-.062a12.675 12.675 0 0 0 6.865 2.015c8.236 0 12.742-6.826 12.742-12.742 0-.195-.004-.39-.013-.583a9.145 9.145 0 0 0 2.258-2.325z"/>
          </svg>
        </a>

         {/* YouTube */}
    <a href="https://youtube.com/@mrCode99" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 dark:hover:text-red-400 transition">
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.5 6.2s-.2-1.6-.8-2.3a3.2 3.2 0 0 0-2.3-.9C17.8 2.7 12 2.7 12 2.7s-5.8 0-8.4.3a3.2 3.2 0 0 0-2.3.9c-.6.7-.8 2.3-.8 2.3S0 8.1 0 9.9v4.2c0 1.8.3 3.7.3 3.7s.2 1.6.8 2.3a3.4 3.4 0 0 0 2.3.8c1.7.1 7.2.3 7.2.3s5.8 0 8.4-.3a3.2 3.2 0 0 0 2.3-.8c.6-.7.8-2.3.8-2.3s.3-1.9.3-3.7V9.9c0-1.8-.3-3.7-.3-3.7zM9.6 14.8V8.9l6.2 2.9-6.2 3z"/>
      </svg>
    </a>

    {/* Instagram */}
    <a href="https://instagram.com/naveen___9161" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 dark:hover:text-pink-400 transition">
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 2 .3 2.4.5.5.2.9.5 1.3 1 .4.4.7.9 1 1.3.2.4.4 1.2.5 2.4.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.3 2-.5 2.4-.2.5-.5.9-1 1.3-.4.4-.9.7-1.3 1-.4.2-1.2.4-2.4.5-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-2-.3-2.4-.5a4.2 4.2 0 0 1-1.3-1 4.2 4.2 0 0 1-1-1.3c-.2-.4-.4-1.2-.5-2.4C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8c.1-1.2.3-2 .5-2.4a4.2 4.2 0 0 1 1-1.3c.4-.4.9-.7 1.3-1 .4-.2 1.2-.4 2.4-.5C8.4 2.2 8.8 2.2 12 2.2m0-2.2C8.7 0 8.3 0 7.1.1 5.9.2 4.9.4 4.2.7c-.8.3-1.5.8-2.2 1.5a6.4 6.4 0 0 0-1.5 2.2c-.3.7-.5 1.7-.6 2.9C0 8.3 0 8.7 0 12s0 3.7.1 4.9c.1 1.2.3 2.2.6 2.9a6.4 6.4 0 0 0 1.5 2.2c.7.7 1.4 1.2 2.2 1.5.7.3 1.7.5 2.9.6 1.2.1 1.6.1 4.9.1s3.7 0 4.9-.1c1.2-.1 2.2-.3 2.9-.6.8-.3 1.5-.8 2.2-1.5a6.4 6.4 0 0 0 1.5-2.2c.3-.7.5-1.7.6-2.9.1-1.2.1-1.6.1-4.9s0-3.7-.1-4.9c-.1-1.2-.3-2.2-.6-2.9a6.4 6.4 0 0 0-1.5-2.2c-.7-.7-1.4-1.2-2.2-1.5C19.1.4 18.1.2 16.9.1 15.7 0 15.3 0 12 0zM12 5.8a6.2 6.2 0 1 0 0 12.4 6.2 6.2 0 0 0 0-12.4zm0 10.2a4 4 0 1 1 0-8.1 4 4 0 0 1 0 8.1zm6.4-10.5a1.4 1.4 0 1 0 0-2.7 1.4 1.4 0 0 0 0 2.7z"/>
      </svg>
    </a>
      </div>
      </div>
  </section>
  

  )
}

export default about
