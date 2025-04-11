import "./Header.css";

const Header = ({ title, desc, drawNumber }) => {
  return (
    <div className="header">
      <h1>{title}</h1>
      <div className="draw-info">
        <p>
          {desc} {drawNumber}
        </p>
      </div>
    </div>
  );
};

export default Header;
