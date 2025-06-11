"use client";
import { useEffect, useState } from "react";

const Page = () => {
  const sentences = [
    "Learn C++",
    "Learn JavaScript",
    "Learn Node js",
    "Learn HTML",
    "Learn CSS",
    "Learn React js",
    "Learn Next js",
    "Learn Node js",
    "Learn Express js",
    "Learn mongo DB",
  ];

  const [anotext, setanoText] = useState("");
  const [index, setIndex] = useState(0);
  const [letter, setLetter] = useState(0);

  //main heading
  const [text, setText] = useState("");
  const fullText = "Weelcome to Naveen Gupta - Portfolio";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setText((prev) => prev + fullText.charAt(index));
        index++;
      } else {
        clearInterval(interval);
      }
    },[sentences], 50); // adjust typing speed here
    return () => clearInterval(interval);
  }, []);

  //for syntaxt loop

  useEffect(() => {
    const current = sentences[index];
    if (letter < current.length) {
      const timeout = setTimeout(() => {
        setanoText((prev) => prev + current[letter]);
        setLetter(letter + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setanoText("");
        setLetter(0);
        setIndex((prev) => (prev + 1) % sentences.length);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [letter, index]);

  return (
    <>
      <div className="flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl  md:text-5xl font-bold font-sans mt-[120px] text-center text-white/90">
          <span className="text-3xl md:text-4xl animate-bounce">👋</span>
          {text}
        </h1>
      </div>

      <div className="flex flex-col items-center justify-center min-h-[80px] min-w-[250px] text-white">
        <h4 className="text-2xl  md:text-3xl font-bold  mt-[30px] text-center">
          {anotext}
        </h4>
      </div>

      <div className="flex flex-col items-center justify-center px-1 ">
        <p className="text-1xl  md:text-2xl md:mx-70  mt-[35px] md:mt-[90px] font-serif text-center">
          I&apos;m a passionate{" "}
          <span className="font-semibold text-blue-600 dark:text-blue-400">
            @MERN Stack developer
          </span>{" "}
          skilled in building dynamic and interactive responsive web
          applications using MongoDB, Express, React, Next and Node.js. Let&apos;s
          create something amazing!
        </p>
      </div>



      <section className="px-4 py-10 text-center mt-[30px] md:mt-[60px] ">
        <h2 className="text-3xl font-bold mb-4">
          GitHub <span className="text-blue-500 dark:text-blue-400">Link</span>
        </h2>
        <p className="text-base md:text-lg max-w-2xl mx-auto mb-6 leading-relaxed text-gray-400">
          My GitHub showcases clean, well-documented code, real-world MERN stack
          projects, and consistent contributions that reflect my growth,
          dedication, and passion for development.
        </p>
        <a
          href="https://github.com/Naveen-Gupta99"
          className="inline-block px-6 py-2 text-white border border-blue-500 rounded-full hover:bg-blue-600 transition-colors duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github.com
        </a>
        </section>

        <section className="px-4 py-10 bg-transparent text-white">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
    
    {/* Card 1 */}
    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 shadow-lg text-center">
      <img
        src="https://www.eschoolnews.com/files/2024/12/k-12-tech-innovation-news.jpeg"
        alt="Project 1"
        className="w-full h-40 object-cover rounded-lg mb-4"
      />
      <h3 className="text-xl font-semibold mb-2">The World of Technology</h3>
      <p className="text-sm leading-relaxed text-gray-300">
      Technology is transforming every aspect of our lives—from AI to blockchain—driving innovation, automation, and global connectivity.
      </p>
    </div>

    {/* Card 2 */}
    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 shadow-lg text-center">
      <img
        src="https://tii.imgix.net/production/articles/10356/67b191b5-5d6a-46a0-9623-b7068b6ff7ee-Q6HEIH.png?auto=compress&fit=crop&auto=format"
        alt="Project 2"
        className="w-full h-40 object-cover rounded-lg mb-4"
      />
      <h3 className="text-xl font-semibold mb-2">Data Structures & Algorithms</h3>
      <p className="text-sm leading-relaxed text-gray-300">
      DSA builds the foundation of problem-solving in programming, essential for coding interviews and writing optimized code.
      </p>
    </div>

    {/* Card 3 */}
    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 shadow-lg text-center">
      <img
        src="https://static.toiimg.com/thumb/msid-114196102,width-400,resizemode-4/114196102.jpg"
        alt="Project 3"
        className="w-full h-40 object-cover rounded-lg mb-4"
      />
      <h3 className="text-xl font-semibold mb-2">Web Development</h3>
      <p className="text-sm leading-relaxed text-gray-300">
      Web development combines design and coding to create dynamic, user-friendly websites and powerful online applications.
      </p>
    </div>

  </div>
</section>



      <section className="px-4 py-5 bg-transparent text-white">
  <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
    
    {/* Website Link 1 */}
    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 shadow-md text-center">
      <h3 className="text-xl font-semibold mb-2">React Portfolio</h3>
      <p className="text-sm text-gray-300 mb-4">
        this is build in React Node js Full stack portfolio
      </p>
      <a 
        href="https://naveen-gupta.onrender.com" 
        target="_blank" 
        className="inline-block text-blue-400 hover:text-blue-600 font-medium"
      >
        Visit Portfolio
      </a>
    </div>

    {/* Website Link 2 */}
    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 shadow-md text-center">
      <h3 className="text-xl font-semibold mb-2">My first app</h3>
      <p className="text-sm text-gray-300 mb-4">
        this is my first built in portfolio website on html css and js
      </p>
      <a 
        href="https://naveen-gupta99.github.io/My-Portfolio/" 
        target="_blank" 
        className="inline-block text-blue-400 hover:text-blue-600 font-medium"
      >
        Visit Chat App
      </a>
    </div>

  </div>
</section>



<div className="mt-[50px] max-w-3xl mx-auto text-center">
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

    </>
  );
};
export default Page;
