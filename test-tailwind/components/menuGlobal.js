import styles from '../styles/Home.module.css'
import MenuPrincipal from '../components/menu'
import MenuSecondaire from '../components/menu_bis'

export default function MenuGlobal() {
    return (
    <nav class="px-2 bg-white border-gray-200 dark:bg-black dark:border-black cursor-crosshair">
        <div class="container flex flex-wrap items-center justify-between mx-auto ">
          
          
          <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <MenuPrincipal/>
            {/* <li>
              <button id="dropdownRightStartButton" data-dropdown-toggle="dropdownRightStart" data-dropdown-placement="right-start" class="mb-3 md:mb-0 text-black  dark:text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center" type="button">
                Menu
                <svg class="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd">
                  </path>
                </svg>
              </button>
              <div id="dropdownRightStart" class="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700 ">
                  <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownRightStartButton">
                    <li>
                      <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                    </li>
                    <li>
                      <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                    </li>
                    <li>
                      <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                    </li>
                    <li>
                      <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                    </li>
                  </ul>
              </div>
            </li> */}

            
          </ul>
          <div>
            <a href="#" class="flex items-center px-3 text-white rounded md:bg-transparent md:p-0 md:dark:text-white md:dark:bg-transparent" aria-current="page">
              <img src="/cub-logo-vectoriel.svg" class="h-40 mx-3 " alt="Flowbite Logo" />
              {/* <a href="#" class="flex items-center">
                  
              </a> */}
            </a>
          </div>
          <div className='flex flex-col'>
            <MenuSecondaire/>

          </div>
        </div>
      </nav>
    )
}