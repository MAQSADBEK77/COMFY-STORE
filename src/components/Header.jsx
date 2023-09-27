import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="bg-slate-700">
      <div className="container-css py-2 flex justify-center items-center sm:justify-end gap-6">
        <Link to="/register" className="link link-hover link-success text-sm">
          Sign in / Guest
        </Link>
        <Link to="/login" className="link link-hover link-success text-sm">
          Create accaunt
        </Link>
      </div>
    </div>
  );
}

export default Header;
