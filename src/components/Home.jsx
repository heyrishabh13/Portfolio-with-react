const Home = () => (
  <section
    id="home"
    className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600"
  >
    <div className="text-center text-white animate-fadeIn">
      <h1 className="text-5xl font-bold mb-4">Hi, I'm [Your Name]</h1>
      <p className="text-xl mb-6">A Passionate Web Developer</p>
      <a
        href="#projects"
        className="inline-block bg-white text-blue-600 font-semibold py-2 px-4 rounded-full hover:bg-blue-100 transition-all duration-300"
      >
        View My Work
      </a>
    </div>
  </section>
);

export default Home;
