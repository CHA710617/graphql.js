import search from '../img/search.png';

export const Loading = () => {
  return (
    <div className="loading">
      <div className="loading-box">
        <img src={search} alt="loading indicator" />
        <div className="out-box">
          <i className="in-box"></i>
        </div>
        <p>Loading...</p>
      </div>
    </div>
  );
};