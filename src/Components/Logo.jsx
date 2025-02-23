const Logo = ({ logo }) => {
    return (
      <div className="flex-fill">
        <a href="#">
          <img src={logo} alt="Application medicinale" />
        </a>
      </div>
    );
  };
  
  export default Logo;