<template>
    <Disclosure as="nav" class="bg-black z-20" v-slot="{ open }">
      <div class="4xl:mx-auto 4xl:max-w-7xl px-2 sm:px-8">
        <div class="relative flex items-center justify-between" style="height:73px">
          <div class="absolute inset-y-0 right-0 flex items-center md:hidden">
            <!-- Mobile menu button-->
            <DisclosureButton class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span class="sr-only">Open main menu</span>
              <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
              <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>
          <div class="flex flex-1 sm:items-stretch ">
            <div class="flex flex-shrink-0 items-center">
              <ApplicationLogo class="h-9 w-auto"/>
            </div>
            <div class="flex flex-1 hidden md:ml-6 md:block">
              <div class="flex justify-end lg:space-x-12">
                <template  v-for="item in navigation">
                    <Link v-if="item.name == 'SIGN UP'" :key="item.name" :href="item.href" :class="[item.current ? 'text-white' : 'text-white hover:bg-red-800 hover:text-white', 'bg-red-600 px-3 py-2 text-md font-bold whitespace-nowrap']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</Link>
                    <Menu v-else-if="item.name == 'PRODUCTS'" as="div" class="relative inline-block text-left">
                        <MenuButton :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'flex px-3 py-2 text-md font-bold']">
                            PRODUCTS<ChevronDownIcon class="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                        </MenuButton>
                        <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                            <MenuItems class="absolute right-0 z-10 mt-2 w-72 p-4 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div class="py-1">
                                    <h3 class="font-bold"><font-awesome-icon icon="fa-solid fa-football" class="text-brown-400"/> <span class="ml-2">FIRSTDOWN PLAYBOOK</span></h3>
                                    <div class="pl-4 menu-items">
                                        <MenuItem v-slot="{ active, close }">
                                            <Link @click="close" href="/pricing?interest=flag_football" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Flag Football (Single User)</Link>
                                        </MenuItem>
                                        <MenuItem v-slot="{ active, close }">
                                            <Link @click="close" href="/pricing?interest=7v7_football" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">7 on 7 Passing (Single User)</Link>
                                        </MenuItem>
                                        <MenuItem v-slot="{ active, close }">
                                            <Link @click="close" href="/pricing?interest=tackle_football" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Tackle Football (Single User)</Link>
                                        </MenuItem>
                                        <MenuItem v-slot="{ active, close }">
                                            <Link @click="close" href="/pricing?interest=all_football" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">ALL Football (Single User)</Link>
                                        </MenuItem>
                                        <MenuItem v-slot="{ active, close }">
                                            <Link @click="close" href="/pricing?interest=full_football" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">ALL Football (Full Team)</Link>
                                        </MenuItem>
                                    </div>
                                </div>
                                <div class="pt-4">
                                    <h3 class="font-bold"><font-awesome-icon icon="fa-solid fa-basketball" /> <span class="ml-2">FASTBREAK PLAYBOOK</span></h3>
                                    <div class="pl-4">
                                        <MenuItem v-slot="{ active }">
                                            <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Single User Basketball</a>
                                        </MenuItem>

                                        <MenuItem v-slot="{ active }">
                                            <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Full Team Basketball</a>
                                        </MenuItem>
                                    </div>
                                </div>
                            </MenuItems>
                        </transition>
                    </Menu>
                    <Link v-else :href="item.href" :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'px-3 py-2 text-md font-bold whitespace-nowrap']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</Link>
                </template>
              </div>
            </div>
          </div>
          <div v-if="false" class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button type="button" class="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
              <span class="sr-only">View notifications</span>
              <BellIcon class="h-6 w-6" aria-hidden="true" />
            </button>

            <!-- Profile dropdown -->
            <Menu as="div" class="relative ml-3">
              <div>
                <MenuButton class="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span class="sr-only">Open user menu</span>
                  <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                </MenuButton>
              </div>
              <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                <MenuItems class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <MenuItem v-slot="{ active }">
                    <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Your Profile</a>
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                    <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Settings</a>
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                    <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Sign out</a>
                  </MenuItem>
                </MenuItems>
              </transition>
            </Menu>
          </div>
        </div>
      </div>
      <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
        <DisclosurePanel class="md:hidden">
            <div class="space-y-1 px-2 pt-2 pb-3">
                <template v-for="item in navigation">
                    <Link :href="item.href">
                        <DisclosureButton :key="item.name" :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block px-3 py-2 rounded-md text-base font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</DisclosureButton>
                    </Link>
                </template>
            </div>
        </DisclosurePanel>
      </transition>
    </Disclosure>
  </template>

<script setup>
import ApplicationLogo from '@/Components/ApplicationLogo.vue'
import { ref, onMounted } from 'vue'
import { usePage } from '@inertiajs/vue3'
import { Link } from '@inertiajs/vue3'
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/vue/24/outline'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'
import { router } from '@inertiajs/vue3'

let navMenu = ref(false);
let interest = ref(usePage().props.interest);
function checkInterest() {
    interest = usePage().props.interest;
    let el = document.getElementById(interest);
    if(interest){
        document.getElementById(interest).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }
}
function keyCheck(event){
    if(event.key == 'Escape'){
      navMenu = false;
    }
}
function onClose(){
    navMenu = false;
}


onMounted(() => {

    document.addEventListener( "keydown", keyCheck );

    setTimeout(function(){
        checkInterest();
    }, 500)

});

// onUpdated(() => {
//     checkInterest();
// });

router.on('finish', (event) => {
    checkInterest();
});

const navigation = [
    { name: 'FREE TRIAL', href: 'register', current: false },
    { name: 'PRODUCTS', href: 'products', current: false },
    { name: 'PRICING', href: 'pricing', current: false },
    { name: 'LOGIN', href: 'login', current: false },
    { name: 'SIGN UP', href: 'register', current: false },
]
</script>
  <style>
    .menu-items a{
        font-weight: bold!important;
    }
  </style>
