import apiService from '../gcp/data'
import homeImage from '../assets/open_icon.jpg'


const FirstPage = () => {

  function oauthUrl() {
    apiService.getOauth2Url().then(url =>
      window.location.href = url
    ).catch(err => {
      console.log(err);
    })
  }


  return (
    <div className="m-auto  justify-center text-white min-h-screen  ">
      <div className='m-auto max-w-screen-sm flex flex-col items-center justify-center'>

        <img className="m-auto w-80 h-80 object-cover mb-8 rounded-3xl" src={homeImage} alt="Top Image" />
        {/* Welcome Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">Welcome to Creator Yard</h1>
          {/* Description */}
          <p className="text-lg">
            Collaborate seamlessly with editors and effortlessly manage YouTube uploads. Click on "Add Channel" to embark on your journey.
          </p>
        </div>
        {/* Add Channel Button */}
        <button className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue mb-12"
          onClick={oauthUrl}>
          Add Channel
        </button>
      </div>
    </div>
  );

};

export default FirstPage;
