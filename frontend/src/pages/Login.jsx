

const GoogleAuthButton = ({ onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full bg-white text-gray-800 px-4 py-2 rounded-lg shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition duration-300 flex items-center justify-center"
    >
      <img
        src="https://developers.google.com/identity/images/g-logo.png"
        alt="Google Logo"
        className="w-5 h-5 mr-2"
      />
      Sign in with Google
    </button>
  );
};

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-800 to-gray-900 text-white">
      <div className="p-8 rounded-xl shadow-lg bg-gray-900 max-w-6xl">
        <h1 className="mb-4 text-5xl font-extrabold text-gray-200 dark:text-white md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Youtube</span> Collab.</h1>
        <p className="mb-6 text-center text-lg font-normal text-gray-400 lg:text-xl">Mange your youtube Channel with this tool.</p>
        <div className=" flex first-letter:items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
          <GoogleAuthButton onClick={() => { }} />
        </div>
      </div>
    </div>
  );

};

export default Login
