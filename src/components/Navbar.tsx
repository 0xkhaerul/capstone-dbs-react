import { Link, useNavigate, NavLink } from "react-router-dom";
import { useState } from "react";

export function Navbar() {
  const token = localStorage.getItem("token");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login", { replace: true });
    window.location.reload();
  };

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

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
          {/* Logo - Hidden on mobile */}
          <Link
            to="/"
            className="hidden md:block text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            <span className="text-gray-800">Dia</span>Checker
          </Link>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
            aria-label="Toggle mobile menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-6">
              <li>
                <NavLink
                  to="/diabetes-check"
                  className={({ isActive }) =>
                    `font-medium transition-colors ${
                      isActive
                        ? "text-blue-600"
                        : "text-gray-800 hover:text-blue-600"
                    }`
                  }
                >
                  Check Diabetes
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/panduan-check"
                  className={({ isActive }) =>
                    `font-medium transition-colors ${
                      isActive
                        ? "text-blue-600"
                        : "text-gray-800 hover:text-blue-600"
                    }`
                  }
                >
                  Panduan Cek
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/bacaan"
                  className={({ isActive }) =>
                    `font-medium transition-colors ${
                      isActive
                        ? "text-blue-600"
                        : "text-gray-800 hover:text-blue-600"
                    }`
                  }
                >
                  Bacaan
                </NavLink>
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
                      className="px-4 py-2 rounded-md font-medium text-blue-600 bg-blue-50 hover:bg-blue-100 transition-colors"
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

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
            <nav className="container mx-auto px-4 py-4">
              <ul className="space-y-4">
                <li>
                  <NavLink
                    to="/diabetes-check"
                    onClick={closeMobileMenu}
                    className={({ isActive }) =>
                      `block py-2 font-medium transition-colors ${
                        isActive
                          ? "text-blue-600"
                          : "text-gray-800 hover:text-blue-600"
                      }`
                    }
                  >
                    Check Diabetes
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/panduan-check"
                    onClick={closeMobileMenu}
                    className={({ isActive }) =>
                      `block py-2 font-medium transition-colors ${
                        isActive
                          ? "text-blue-600"
                          : "text-gray-800 hover:text-blue-600"
                      }`
                    }
                  >
                    Panduan Cek
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/bacaan"
                    onClick={closeMobileMenu}
                    className={({ isActive }) =>
                      `block py-2 font-medium transition-colors ${
                        isActive
                          ? "text-blue-600"
                          : "text-gray-800 hover:text-blue-600"
                      }`
                    }
                  >
                    Bacaan
                  </NavLink>
                </li>

                {token && (
                  <li>
                    <Link
                      to="/profile"
                      onClick={closeMobileMenu}
                      className="block py-2 text-gray-800 hover:text-blue-600 font-medium transition-colors"
                    >
                      Profile
                    </Link>
                  </li>
                )}

                <li className="pt-4 border-t border-gray-200">
                  {token ? (
                    <button
                      onClick={() => {
                        handleLogout();
                        closeMobileMenu();
                      }}
                      className="w-full text-left bg-[#F7F9FC] px-4 py-2 rounded-md font-medium text-blue-600 hover:bg-blue-50 transition-colors"
                    >
                      Logout
                    </button>
                  ) : (
                    <div className="flex flex-col space-y-2">
                      <Link
                        to="/login"
                        onClick={closeMobileMenu}
                        className="px-4 py-2 rounded-md font-medium text-blue-600 bg-blue-50 hover:bg-blue-100 transition-colors text-center"
                      >
                        Login
                      </Link>
                      <Link
                        to="/register"
                        onClick={closeMobileMenu}
                        className="px-4 py-2 rounded-md font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors text-center"
                      >
                        Register
                      </Link>
                    </div>
                  )}
                </li>
              </ul>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
