import { Link } from "react-router-dom";

export default function Header() {
  //create navbar contents array
  let navContent = [
    { name: "Home", route: "/", img: "" },
    { name: "Contact", route: "/contact", img: "" },
    { name: "About", route: "/about", img: "" },
  ];

  //map the above array into individual <a>
  let navMap = navContent.map((data) => {
    return (
      <Link to={data.route} key={data.name}>
        <img src={data.img} alt="" className="nav--img" title={data.name}></img>
      </Link>
    );
  });

  return (
    <div className="header--container">
      <div className="header--head">
        <Link to="/">
          <img src="" alt="" className="header--logo"></img>{" "}
        </Link>
        <p className="header--title">Girish_N</p>
      </div>
      <div className="header--nav">{navMap}</div>
    </div>
  );
}
