const News = () => {
  const cityBlue = "#6CABDD"; // Man City blue color

  return (
    <div className="h-screen bg-gray-50 flex justify-center items-center p-0">
      <div className="w-full h-full">
        <h1
          className="text-3xl md:text-5xl font-extrabold text-center mb-6 mt-4 uppercase tracking-wider"
          style={{ color: cityBlue }}
        >
          Official Manchester City News
        </h1>
        {/* Responsive iframe for Manchester City Official News */}
        <div className="relative w-full h-full">
          <iframe
            src="https://www.mancity.com/news"
            title="Official Manchester City News"
            className="absolute top-0 left-0 w-full h-full border-0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default News;
