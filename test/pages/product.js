import Head from 'next/head'
import { Menu, Transition } from '@headlessui/react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import MenuGlobal from '../components/menuGlobal'
import Footer from '../components/footer'
import Accordion from '../components/accordion'
import { Star } from '@emotion-icons/heroicons-solid'

export default function Product() {
    return(
        <div className={styles.container}>

            <MenuGlobal/>

            <div className='flex flex-wrap w-full items-center justify-evenly'>
              <div className= ''>
                <h3 className='text-center text-xl p-2'>
                  un Bonhomme
                </h3>
                <Image
                          className=' rounded-md'
                          src='/tshirt.jpg'
                          alt='Product Image'
                          width={400}
                          height={600}
                        //   priority={i === 0}
                          quality="85"
                        />
                

              </div>
              <div className='flex p-3 border-r-2 border-b-2 border-black'>
                <div className='p-3  rounded-md w-96 content-between'>
                  <div class=' text-center text-xl p-5'>
                    T-Shirt d'Homme
                  </div>

                  {/* <div id="accordion-open" data-accordion="open">
                    <h2 id="accordion-open-heading-1">
                      <button type="button" class="flex justify-between items-center p-5 w-full font-medium text-left rounded-t-xl border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white" data-accordion-target="#accordion-open-body-1" aria-expanded="true" aria-controls="accordion-open-body-1">
                        <span class="flex items-center"><svg class="mr-2 w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg> Matière utilisée</span>
                        <svg data-accordion-icon="" class="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                      </button>
                    </h2>
                    <div id="accordion-open-body-1" class="" aria-labelledby="accordion-open-heading-1">
                      <div class=" text-sm p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                        <p class="  mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada, velit sit amet euismod sagittis, justo massa commodo est, quis venenatis nulla magna ac sem. Proin tristique dolor sit amet libero finibus ullamcorper. Praesent ut tortor imperdiet, eleifend lorem ac, cursus odio. In efficitur, arcu ut elementum commodo, risus augue pulvinar lectus, efficitur mollis magna neque ut urna. Duis </p>
                        <p class="text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada, velit sit amet euismod sagittis, justo massa commodo est, quis venenatis nulla magna ac sem. Proin tristique dolor sit amet libero finibus ullamcorper. Praesent ut tortor imperdiet</p>
                      </div>
                    </div>
                    <h2 id="accordion-open-heading-2">
                      <button type="button" class="flex justify-between items-center p-5 w-full font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-open-body-2" aria-expanded="false" aria-controls="accordion-open-body-2">
                        <span class="flex items-center"><svg class="mr-2 w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>Composition</span>
                          <svg data-accordion-icon="" class="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                      </button>
                    </h2>
                    <div id="accordion-open-body-2" class="hidden" aria-labelledby="accordion-open-heading-2">
                      <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                        <p class="mb-2 text-gray-500 dark:text-gray-400">Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
                        <p class="text-gray-500 dark:text-gray-400">Check out the <a href="https://flowbite.com/figma/" class="text-blue-600 dark:text-blue-500 hover:underline">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.</p>
                      </div>
                    </div>
                    <h2 id="accordion-open-heading-3">
                      <button type="button" class="flex justify-between items-center p-5 w-full font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-open-body-3" aria-expanded="false" aria-controls="accordion-open-body-3">
                        <span class="flex items-center"><svg class="mr-2 w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg> Entretien</span>
                          <svg data-accordion-icon="" class="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                      </button>
                    </h2>
                    <div id="accordion-open-body-3" class="hidden" aria-labelledby="accordion-open-heading-3">
                      <div class="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
                        <p class="mb-2 text-gray-500 dark:text-gray-400">The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.</p>
                        <p class="mb-2 text-gray-500 dark:text-gray-400">However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p>
                        <p class="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
                        <ul class="pl-5 list-disc text-gray-500 dark:text-gray-400">
                          <li><a href="https://flowbite.com/pro/" class="text-blue-600 dark:text-blue-500 hover:underline">Flowbite Pro</a></li>
                          <li><a href="https://tailwindui.com/" rel="nofollow" class="text-blue-600 dark:text-blue-500 hover:underline">Tailwind UI</a></li>
                        </ul>
                      </div>
                    </div>
                  </div> */}
                  <Accordion 
                  title="Matière utilisée" 
                  content="this is content 1" 
                  />
                  <Accordion 
                  title="Composition" 
                  content="this is content 2" 
                  />

                  <div className='flex justify-center p-5'>
                    <button type="button" className=" transition-all flex h-10 text-gray-900 bg-gray-100 bg-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                      XS
                    </button>
                    <button type="button" class="transition-all flex h-10 text-gray-900 bg-gray-100 bg-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                      S
                    </button>
                    <button type="button" class="transition-all flex h-10 text-gray-900 bg-gray-100 bg-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                      M
                    </button>
                    <button type="button" class="transition-all flex h-10 text-gray-900 bg-gray-100 bg-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                      L
                    </button>
                    <button type="button" class="transition-all flex h-10 text-gray-900 bg-gray-100 bg-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                      XL
                    </button>
                  </div>
                  <div className='flex justify-evenly'>
                    <div>
                      <button class="transition-all bg-green-300 hover:bg-green-200 text-white font-bold py-2 px-4 rounded-full">
                        Acheter
                      </button>
                    </div>
                    <div className=''>
                      <button class="transition-all h-10 w-10 bg-gray-300 hover:bg-gray-500 text-white font-bold px-2 rounded-full">
                        <Star className=' fill-white'/>
                      </button>
                    </div>

                    
                  </div>
                  

                </div>
              </div>
            </div>

            {/* <Footer/> */}

        </div>
    )
}