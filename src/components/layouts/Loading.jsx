import loader from '../../assets/svg/loader.svg';

const Loading = () => {
  return (
    <div className="loading-container">
      <img src={loader} alt="Loading..." className="loading" />
    </div>
  );
};

export default Loading;
