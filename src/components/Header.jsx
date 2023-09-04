import { Link } from "react-router-dom";

export default function Header() {
  //create navbar contents array
  let navContent = [
    { name: "Home", route: "/" },
    { name: "Contact", route: "/contact" },
    { name: "About", route: "/about" },
  ];

  //map the above array into individual <a>
  let navMap = navContent.map((data) => {
    return (
      <Link to={data.route} key={data.name}>
        <p className="nav--content">{data.name}</p>
      </Link>
    );
  });

  return (
    <div className="header--container">
      <div className="header--head">
        <img alt="" className="header--logo"></img>
        <p className="header--title">Girish_N</p>
      </div>
      <div className="header--nav">{navMap}</div>
    </div>
  );
}
