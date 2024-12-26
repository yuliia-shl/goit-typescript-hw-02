import { Hearts } from 'react-loader-spinner';

const Loader = () => {
  return (
    <>
      <Hearts
        height="80"
        width="80"
        color="#ff6a6a"
        ariaLabel="hearts-loading"
        wrapperStyle={{ display: 'flex', justifyContent: 'center' }}
        wrapperClass=""
        visible={true}
      />
    </>
  );
};

export default Loader;
