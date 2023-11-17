import React from "react";
import {en} from '../constants/common'

export default function Header() {
  return (
    <section class="py-2">
      <div class="w-full">
        <div class="relative overflow-hidden bg-white border-b-1 dark:bg-gray-800 sm:rounded-lg">
          <div class="flex-row items-center justify-between p-4 sm:flex sm:space-y-0 sm:space-x-4">
            <div>
              <h5 class="mr-3 font-semibold text-xl text-slate-950 dark:text-white">{en.title}</h5>
            </div>
            <button
              type="button"
              class="flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-lg bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-3.5 w-3.5 mr-2 -ml-1"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
              </svg>
              New Bookmark
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
