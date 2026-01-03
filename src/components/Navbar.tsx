import { Link, useNavigate } from "react-router-dom";

export function Navbar() {
  const token = localStorage.getItem("token");

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear(); // atau removeItem satu2
    navigate("/login");
  };

  return (
    <>
      {/* Skip to content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-[9999] focus:bg-purple-600 focus:text-white focus:p-2 focus:m-3 focus:rounded focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300 font-['Special_Elite',cursive]"
      >
        Skip to content
      </a>

      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <Link
            to="/"
            className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            <span className="text-gray-800">Dia</span>Checker
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-6">
              <li id="diabetes-checked-user-container">
                <Link
                  to="/diabetes-check"
                  className="text-gray-800 hover:text-blue-600 font-medium transition-colors"
                >
                  Check diabetes
                </Link>
              </li>
              <li>
                <Link
                  to="/panduan-check"
                  className="text-gray-800 hover:text-blue-600 font-medium transition-colors"
                >
                  Panduan Cek
                </Link>
              </li>
              <li>
                <Link
                  to="/bacaan"
                  className="text-gray-800 hover:text-blue-600 font-medium transition-colors"
                >
                  Bacaan
                </Link>
              </li>

              {token && (
                <li>
                  <Link
                    to="/profile"
                    className="text-gray-800 hover:text-blue-600 font-medium transition-colors"
                  >
                    Profile
                  </Link>
                </li>
              )}

              {token ? (
                <li className="ml-4">
                  <button
                    onClick={handleLogout}
                    className="bg-[#F7F9FC] px-4 py-2 rounded-md font-medium text-blue-600 hover:bg-blue-50 transition-colors"
                  >
                    Logout
                  </button>
                </li>
              ) : (
                <>
                  <li id="login-container" className="ml-4">
                    <Link
                      to="/login"
                      className="px-4 py-2 rounded-md font-medium text-blue-600 hover:bg-blue-50 transition-colors"
                    >
                      Login
                    </Link>
                  </li>
                  <li id="register-container">
                    <Link
                      to="/register"
                      className="px-4 py-2 rounded-md font-medium text-white hover:text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                    >
                      Register
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
