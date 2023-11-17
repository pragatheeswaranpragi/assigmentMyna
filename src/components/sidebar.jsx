import React from "react";
import { en } from "../constants/common";

export default function Sidebar() {
  const { sidebarNavigations, sidebarSettings } = en;
  return (
    <>
      <aside className="fixed top-0 left-0 z-40 w-64  transition-transform -translate-x-full sm:translate-x-0">
        <div className="px-3 py-4 overflow-y-auto bg-slate-100 dark:bg-gray-800">
          <ul className="flex flex-col justify-between h-screen space-y-2 font-medium">
            <div>
              <li>
                <a
                  href="/"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <svg
                    width="18"
                    height="19"
                    viewBox="0 0 18 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.00542 0.107943C8.89306 0.0374129 8.76308 0 8.63042 0C8.49775 0 8.36778 0.0374129 8.25542 0.107943C7.3574 0.688077 6.53035 1.37129 5.79113 2.14366C4.14827 3.84901 3.27327 5.70616 3.27327 7.5008C3.27327 8.9216 3.83769 10.2842 4.84235 11.2889C5.847 12.2935 8.63042 12.8579 8.63042 12.8579C8.63042 12.8579 11.4138 12.2935 12.4185 11.2889C13.4232 10.2842 13.9876 8.9216 13.9876 7.5008C13.9876 3.22401 9.21078 0.232943 9.00542 0.107943ZM8.63042 11.4294C8.34868 11.4306 8.0695 11.3759 7.80899 11.2687C7.54847 11.1614 7.31177 11.0036 7.11256 10.8044C6.91334 10.6052 6.75554 10.3685 6.64827 10.1079C6.541 9.84743 6.48638 9.56825 6.48756 9.28652C6.48756 7.14366 8.63042 5.71509 8.63042 5.71509C8.63042 5.71509 10.7733 7.14366 10.7733 9.28652C10.7745 9.56825 10.7198 9.84743 10.6126 10.1079C10.5053 10.3685 10.3475 10.6052 10.1483 10.8044C9.94906 11.0036 9.71237 11.1614 9.45185 11.2687C9.19133 11.3759 8.91215 11.4306 8.63042 11.4294ZM17.1661 18.0722C17.1207 18.2168 17.0304 18.3431 16.9085 18.433C16.7865 18.5229 16.6391 18.5716 16.4876 18.5722C16.4146 18.5735 16.3419 18.5614 16.2733 18.5365L8.63042 16.1079L0.987559 18.5365C0.918909 18.5614 0.846283 18.5735 0.773274 18.5722C0.621757 18.5716 0.474356 18.5229 0.352375 18.433C0.230395 18.3431 0.140156 18.2168 0.0947021 18.0722C0.0656974 17.9831 0.0547289 17.8892 0.0624373 17.7958C0.0701457 17.7024 0.0963764 17.6116 0.139598 17.5284C0.18282 17.4453 0.242166 17.3716 0.314173 17.3117C0.38618 17.2518 0.469404 17.2068 0.558988 17.1794L6.27327 15.3579L0.558988 13.5365C0.462341 13.515 0.371225 13.4736 0.291425 13.415C0.211625 13.3564 0.144884 13.2818 0.0954378 13.196C0.0459921 13.1102 0.0149221 13.0151 0.00420014 12.9167C-0.00652179 12.8182 0.00333869 12.7186 0.0331554 12.6242C0.0629721 12.5298 0.112094 12.4426 0.177402 12.3682C0.242711 12.2938 0.322779 12.2337 0.412525 12.1919C0.50227 12.1501 0.599733 12.1274 0.698725 12.1252C0.797717 12.123 0.896077 12.1415 0.987559 12.1794L8.63042 14.6079L16.2733 12.1794C16.3648 12.1415 16.4631 12.123 16.5621 12.1252C16.6611 12.1274 16.7586 12.1501 16.8483 12.1919C16.9381 12.2337 17.0181 12.2938 17.0834 12.3682C17.1487 12.4426 17.1979 12.5298 17.2277 12.6242C17.2575 12.7186 17.2674 12.8182 17.2566 12.9167C17.2459 13.0151 17.2148 13.1102 17.1654 13.196C17.116 13.2818 17.0492 13.3564 16.9694 13.415C16.8896 13.4736 16.7985 13.515 16.7018 13.5365L10.9876 15.3579L16.7018 17.1794C16.7914 17.2068 16.8747 17.2518 16.9467 17.3117C17.0187 17.3716 17.078 17.4453 17.1212 17.5284C17.1645 17.6116 17.1907 17.7024 17.1984 17.7958C17.2061 17.8892 17.1951 17.9831 17.1661 18.0722Z"
                      fill="#E11D48"
                    />
                  </svg>

                  <span className="ms-3 font-extrabold text-xl">CampFire</span>
                </a>
              </li>
              {sidebarNavigations.map((item, index) => (
                <li key={index}>
                  <a
                    href="/"
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 hover:text-[#2563EB] fill-[#64748B] hover:fill-[#2563EB] dark:hover:bg-gray-700 group"
                  >
                    {item.icons}
                    <span className="flex-1 ms-3 whitespace-nowrap">
                      {item.name}
                    </span>
                  </a>
                </li>
              ))}
              <li>
                <p className="py-2">Folders</p>
                <div class="p-2 border-2 border-gray-400 border-dashed rounded-lg dark:border-gray-700">
                  <div className="flex justify-center items-center">
                    <svg
                      width="11"
                      height="12"
                      viewBox="0 0 11 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.9688 6C10.9688 6.17405 10.8996 6.34097 10.7765 6.46404C10.6535 6.58711 10.4865 6.65625 10.3125 6.65625H6.15625V10.8125C6.15625 10.9865 6.08711 11.1535 5.96404 11.2765C5.84097 11.3996 5.67405 11.4688 5.5 11.4688C5.32595 11.4688 5.15903 11.3996 5.03596 11.2765C4.91289 11.1535 4.84375 10.9865 4.84375 10.8125V6.65625H0.6875C0.513452 6.65625 0.346532 6.58711 0.223461 6.46404C0.10039 6.34097 0.03125 6.17405 0.03125 6C0.03125 5.82595 0.10039 5.65903 0.223461 5.53596C0.346532 5.41289 0.513452 5.34375 0.6875 5.34375H4.84375V1.1875C4.84375 1.01345 4.91289 0.846532 5.03596 0.723461C5.15903 0.60039 5.32595 0.53125 5.5 0.53125C5.67405 0.53125 5.84097 0.60039 5.96404 0.723461C6.08711 0.846532 6.15625 1.01345 6.15625 1.1875V5.34375H10.3125C10.4865 5.34375 10.6535 5.41289 10.7765 5.53596C10.8996 5.65903 10.9688 5.82595 10.9688 6Z"
                        fill="#64748B"
                      />
                    </svg>
                    <p className="pl-3">New Folders</p>
                  </div>
                </div>
              </li>
            </div>
            <div className="py-12">
              {sidebarSettings.map((item, index) => (
                <li key={index}>
                  <a
                    href="/"
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 hover:text-[#2563EB] fill-[#64748B] hover:fill-[#2563EB] dark:hover:bg-gray-700 group"
                  >
                    {item.icons}
                    <span className="flex-1 ms-3 whitespace-nowrap">
                      {item.name}
                    </span>
                  </a>
                </li>
              ))}
              <li>
                <button
                  class="flex items-center justify-between text-sm pe-1 font-medium text-gray-900 rounded-md border-slate-200 py-1 border-2 hover:text-blue-600 dark:hover:text-blue-500 md:me-0 dark:text-white"
                  type="button"
                >
                  <div className="flex items-center pl-2 pr-5">
                  <img
                    class="w-8 h-8 me-2 rounded-full"
                    src="https://img.freepik.com/premium-vector/man-avatar-profile-round-icon_24640-14044.jpg?w=360"
                    alt="users"
                  />
                  <p>Pragatheeswaran</p>
                  </div>
                  <div className="pr-3">
                    <svg
                      class="w-2.5 h-2.5 ms-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 1 4 4 4-4"
                      />
                    </svg>
                  </div>
                </button>
              </li>
            </div>
          </ul>
        </div>
      </aside>
    </>
  );
}
