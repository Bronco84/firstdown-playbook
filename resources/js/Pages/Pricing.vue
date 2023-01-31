<script setup>
    import ProductCard from '@/Components/ProductCard.vue';
    import Footer from '@/Components/Footer.vue';
    import { Head, Link } from '@inertiajs/vue3';
</script>

<template>
    <section>
        <Head title="Free-Trial" />
        <div class="background-image grid w-full text-white h-48 text-center place-items-center">
            <div>
                <h1 class="text-5xl font-bold chakra" >Welcome to FirstDown PlayBook™!</h1>
                <h4 class="text-2xl mt-2">The most comprehensive football playbook tool on the planet</h4>
            </div>
        </div>
        <div>
        <nav class="text-center bg-gray-700 text-white uppercase text-lg sticky top-0">
            <div class="grid grid-cols-6 divide-x divide-gray-900 py-5">
                <div><Link href="/pricing?interest=flag_football">Flag Football</Link></div>
                <div><Link href="/pricing?interest=7v7_football">7on7 Passing</Link></div>
                <div><Link href="/pricing?interest=tackle_football">Tackle Football</Link></div>
                <div><Link href="/pricing?interest=all_football">All Football</Link></div>
                <div><Link href="/pricing?interest=full_football" class="">Full Football <span class="hidden xl:inline-block">Team</span></Link></div>
                <div><Link href="/pricing?interest=faq">FAQ</Link></div>
            </div>
        </nav>
        <div class="container mx-auto max-w-6xl mb-14">
            <div class="space-y-16 md:px-10">
                <div class="row">
                    <div class="col mt-5">
                        <div class="card shadow-xl border-1 border-color-gray">
                            <div class="card-header text-center bg-red-700 py-3">
                                <h2 class="text-white chakra uppercase text-3xl">Standard Football Membership Features</h2>
                                <h4 class="text-white mb-0 font-nunito-500 text-xl" style="font-style: italic;">included with all football memberships!</h4>
                            </div>
                            <div class="card-body px-14 py-8">
                                <ul class=" list-disc list-inside space-y-2">
                                    <li>Draw your own football plays from scratch using the same football play drawing technology that NFL coaches use</li>
                                    <li>Print football plays, football practice cards, custom football playbooks, and wristband sheets in seconds!</li>
                                    <li>Share your plays and playbooks with your staff and team as PDFs or printed copies</li>
                                    <li>Customize your plays and playbooks with your team’s colors</li>
                                    <li>All plays include quarterback reads, player assignments and professional coaching points</li>
                                    <li>Organize your plays into professional looking football playbooks that are saved year after year (even if you take a break from your subscription!)</li>
                                    <li>Use FirstDown PlayBook on any device with a web browser!</li>
                                    <li>Easily manage your auto-renewal subscription inside your account</li>
                                </ul>
                                <h3 class="text-center mt-6 text-3xl font-bold">Select a plan below to get started!</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <product-card id="flag_football">
                    <template #title>Flag Football Membership  <font-awesome-icon class="text-yellow-500 ml-5" icon="fa-solid fa-flag" /></template>
                    <template #users>Single User</template>
                    <template #leftbody>
                        <div>
                            <div class="text-red-600 text-2xl font-bold">1,000+ flag football plays available for editing, or draw your own!</div>
                            <div class="mt-2 font-bold italic">Includes ALL standard football membership features listed above, PLUS:</div>
                            <ul class=" list-disc list-inside mt-4 space-y-4">
                                <li>Flag football offense plays and flag football defense plays for 4v4, 5v5, 6v6, 7v7, and 8v8 available</li>
                                <li>Easily create custom youth flag football playbooks and adult flag football playbooks</li>
                                <li>All flag football plays are color-coded with professional coaching points</li>
                                <li>Print flag football wristband sheets in seconds!</li>
                                <li>Official football playbook of Matt Leinart Flag Football and the NAIA Women's Flag Football National Champions</li>
                            </ul>
                        </div>
                    </template>
                    <template #rightbody>
                        <div class="grid grid-cols-1 gap-8 content-around  text-center ">
                            <div class="">
                                <div class="">Flag Football</div>
                                <div class="">90-Day Subscription</div>
                                <div>$<span class="text-3xl font-extrabold"> 75</span> <span class="text-gray-500">/ 90 Days</span></div>
                                <div class="bg-red-600 p-1 mt-4 rounded text-white">Select this Plan</div>
                            </div>
                            <hr class="border-gray-400"/>
                            <div class="">
                                <div class="">Flag Football</div>
                                <div class="">90-Day Subscription</div>
                                <div>$<span class="text-3xl font-extrabold"> 150</span> <span class="text-gray-500">/ year</span></div>
                                <div class="bg-red-600 p-1 mt-4 rounded text-white">Select this Plan</div>
                            </div>

                        </div>
                    </template>
                </product-card>
                <product-card id="7v7_football">
                    <template #title>7ON7 PASSING MEMBERSHIP<font-awesome-icon class="text-yellow-500 ml-5" icon="fa-solid fa-football" /></template>
                    <template #users>Single User</template>
                    <template #leftbody>
                        <div>
                            <div class="text-red-600 text-2xl font-bold">1,000+ 7v7 pass game plays and 7v7 defensive coverages available for editing... or draw your own!</div>
                            <div class="mt-2 font-bold italic">Includes ALL standard football membership features listed above, PLUS:</div>
                            <ul class=" list-disc list-inside mt-4 space-y-4">
                                <li>All 7 on 7 passing plays include quarterback reads and professional coaching points</li>
                                <li>Find 7 on 7 formations, 7 on 7 concepts, and 7 on 7 coverage beaters</li>
                                <li>Find 7v7 football plays to defeat 5 different coverages (Cover 1, 2, 3, 4 & 6)</li>
                                <li>Print 7v7 play cards for practice or games or take your device to the field</li>
                                <li>New 7v7 football plays added weekly!</li>
                            </ul>
                        </div>
                    </template>
                    <template #rightbody>
                        <div class="grid grid-cols-1 gap-8 content-around  text-center ">
                            <div class="">
                                <div class="">7on7 Passing</div>
                                <div class="">90-Day Subscription</div>
                                <div>$<span class="text-3xl font-extrabold"> 75</span> <span class="text-gray-500">/ 90 Days</span></div>
                                <div class="bg-red-600 p-1 mt-4 rounded text-white">Select this Plan</div>
                            </div>
                            <hr class="border-gray-400"/>
                            <div class="">
                                <div class="">7on7 Passing</div>
                                <div class="">Annual Subscription</div>
                                <div>$<span class="text-3xl font-extrabold"> 150</span> <span class="text-gray-500">/ year</span></div>
                                <div class="bg-red-600 p-1 mt-4 rounded text-white">Select this Plan</div>
                            </div>

                        </div>
                    </template>
                </product-card>
                <product-card id="tackle_football">
                    <template #title>TACKLE FOOTBALL MEMBERSHIP<font-awesome-icon class="text-yellow-500 ml-5" icon="fa-solid fa-football" /></template>
                    <template #users>Single User</template>
                    <template #leftbody>
                        <div>
                            <div class="text-red-600 text-2xl font-bold">1,000+ 7v7 pass game plays and 7v7 defensive coverages available for editing... or draw your own!</div>
                            <div class="mt-2 font-bold italic">Includes ALL standard football membership features listed above, PLUS:</div>
                            <ul class=" list-disc list-inside mt-4 space-y-4">
                                <li>All 7 on 7 passing plays include quarterback reads and professional coaching points</li>
                                <li>Find 7 on 7 formations, 7 on 7 concepts, and 7 on 7 coverage beaters</li>
                                <li>Find 7v7 football plays to defeat 5 different coverages (Cover 1, 2, 3, 4 & 6)</li>
                                <li>Print 7v7 play cards for practice or games or take your device to the field</li>
                                <li>New 7v7 football plays added weekly!</li>
                            </ul>
                        </div>
                    </template>
                    <template #rightbody>
                        <div class="grid grid-cols-1 gap-8 content-around  text-center ">
                            <div class="">
                                <div class="">7on7 Passing</div>
                                <div class="">90-Day Subscription</div>
                                <div>$<span class="text-3xl font-extrabold"> 75</span> <span class="text-gray-500">/ 90 Days</span></div>
                                <div class="bg-red-600 p-1 mt-4 rounded text-white">Select this Plan</div>
                            </div>
                            <hr class="border-gray-400"/>
                            <div class="">
                                <div class="">7on7 Passing</div>
                                <div class="">Annual Subscription</div>
                                <div>$<span class="text-3xl font-extrabold"> 150</span> <span class="text-gray-500">/ year</span></div>
                                <div class="bg-red-600 p-1 mt-4 rounded text-white">Select this Plan</div>
                            </div>

                        </div>
                    </template>
                </product-card>
                <product-card id="all_football">
                    <template #title>ALL FOOTBALL MEMBERSHIP<font-awesome-icon class="text-yellow-500 ml-5" icon="fa-solid fa-football" /></template>
                    <template #users>Single User</template>
                    <template #leftbody>
                        <div>
                            <div class="text-red-600 text-2xl font-bold">This includes everything you see above, all in one package!</div>
                            <ul class=" list-disc list-inside mt-4 space-y-4">
                                <li>Our best value single-user membership (50% savings)!</li>
                                <li>Includes ALL standard football membership features features listed above</li>
                                <li>Includes ALL flag football membership features listed above</li>
                                <li>Includes ALL 7on7 passing membership features listed above</li>
                                <li>Includes ALL tackle football membership features listed above</li>
                            </ul>
                        </div>
                    </template>
                    <template #rightbody>
                        <div class="grid grid-cols-1 gap-8 content-around  text-center ">
                            <div class="">
                                <div class="">All Football</div>
                                <div class="">90-Day Subscription</div>
                                <div>$<span class="text-3xl font-extrabold"> 125</span> <span class="text-gray-500">/ 90 Days</span></div>
                                <div class="bg-red-600 p-1 mt-4 rounded text-white">Select this Plan</div>
                            </div>
                            <hr class="border-gray-400"/>
                            <div class="">
                                <div class="">All Football</div>
                                <div class="">Annual Subscription</div>
                                <div>$<span class="text-3xl font-extrabold"> 250</span> <span class="text-gray-500">/ year</span></div>
                                <div class="bg-red-600 p-1 mt-4 rounded text-white">Select this Plan</div>
                            </div>
                        </div>
                    </template>
                </product-card>
                <product-card id="full_football">
                    <template #title>FULL FOOTBALL TEAM MEMBERSHIP<font-awesome-icon class="text-yellow-500 ml-5" icon="fa-solid fa-football" /></template>
                    <template #users>Unlimited Users</template>
                    <template #leftbody>
                        <div>
                            <div class="text-red-600 text-2xl font-bold">Add unlimited members of your coaching staff and team with their own logins</div>
                            <ul class=" list-disc list-inside mt-4 space-y-4">
                                <li>Get access to our entire database of over 35,000 football plays drawn by NFL coaches</li>
                                <li>Created with high school and college football teams in mind</li>
                                <li>Control who can view and edit each one of your football playbooks</li>
                                <li>Group permissions by position, team, feeder programs, etc.</li>
                                <li>Manage multiple football teams from one account</li>
                                <li>Quiz your football players on their knowledge of the game plan</li>
                                <li>Great for youth football programs with multiple teams and age groups</li>
                            </ul>
                        </div>
                    </template>
                    <template #rightbody>
                        <div class="grid grid-cols-1 gap-8 content-around  text-center ">
                            <div class="">
                                <div class="">Full Football Team</div>
                                <div class="">6-Month Subscription</div>
                                <div>$<span class="text-3xl font-extrabold"> 350</span> <span class="text-gray-500">/ 6 Months</span></div>
                                <div class="bg-red-600 p-1 mt-4 rounded text-white">Select this Plan</div>
                            </div>
                            <hr class="border-gray-400"/>
                            <div class="">
                                <div class="">Full Football Team</div>
                                <div class="">Annual Subscription</div>
                                <div>$<span class="text-3xl font-extrabold"> 700</span> <span class="text-gray-500">/ year</span></div>
                                <div class="bg-red-600 p-1 mt-4 rounded text-white">Select this Plan</div>
                            </div>
                        </div>
                    </template>
                </product-card>
            </div>
        </div>
        <div id="faq" class="bg-gray-200 py-20">
            <div class="text-4xl text-center font-bold mb-20">Frequently Asked Questions</div>
            <div class="max-w-7xl mx-auto">
                <div class="grid grid-cols-2 gap-10 px-10">
                    <div class="grid grid-cols-1 gap-10">
                        <div>
                            <div class="text-2xl font-bold mb-2">Can I draw my own football plays?</div>
                            <div class="">Yes! Our NFL quality football play drawing tool is very easy to use and has everything anyone needs to create well-drawn football plays.</div>
                        </div>
                        <div>
                            <div class="text-2xl font-bold mb-2">Can I edit the 35,000 pre-drawn football plays within FirstDown PlayBook?</div>
                            <div class="">Yes! You can custom edit every football play in FirstDown PlayBook to fit your team's needs, including Offense plays, Defense plays, Special Teams plays, Flag Football plays, Youth Football plays, and more.</div>
                        </div>
                        <div>
                            <div class="text-2xl font-bold mb-2">Who draws the plays on FirstDown PlayBook?</div>
                            <div class="">All of the football plays inside FirstDown PlayBook were drawn by former NFL coaches and players.</div>
                        </div>
                        <div>
                            <div class="text-2xl font-bold mb-2">I coach flag football, do you have a lot of content for that?</div>
                            <div class="">Plenty! FirstDown PlayBook provides a very comprehensive section of flag football plays that includes 4v4, 5v5/NFL Flag, 6v6, 7v7 & 8v8 for both offense and defense. The flag football membership is great for youth and adult leagues and The Official Playbook of Matt Leinart Flag Football and the NAIA Wome's Flag Football National Champions!</div>
                        </div>
                        <div>
                            <div class="text-2xl font-bold mb-2">Can I print football plays from FirstDown PlayBook?</div>
                            <div class="">Yes! You can print plays, multiple plays on one page (PlayGrids), full football playbooks, as well as football wristband sheets.</div>
                        </div>
                        <div>
                            <div class="text-2xl font-bold mb-2">Is FirstDown PlayBook easy to use?</div>
                            <div class="">Absolutely! FirstDown PlayBook has worked hard to help you coach football and save time. We allow you to easily and efficiently find, save and draw football plays and football playbooks.</div>
                        </div>
                        <div>
                            <div class="text-2xl font-bold mb-2">Who uses FirstDown PlayBook?</div>
                            <div class="">Football coaches of all levels use FirstDown PlayBook. <a class="text-blue-500" href="https://firstdown.playbooktech.com/coaches-community/testimonials?utm_source=firstdown.playbooktech.com&amp;utm_medium=FAQ" target="_blank" title="FirstDown PlayBook Reviews &amp; Testimonials">Click here to see what coaches have to say about FirstDown PlayBook!</a></div>
                        </div>
                        <div>
                            <div class="text-2xl font-bold mb-2">How do I get help on FirstDown PlayBook?</div>
                            <div class="faq-answer">We have many resources to help you coach football and use FirstDown PlayBook! Our <a class="text-blue-500" href="https://firstdown.playbooktech.com/coaches-community/help?utm_source=firstdown.playbooktech.com&amp;utm_medium=FAQ" target="_blank" title="FirstDown PlayBook Help Page">Help Page</a> has plenty of short videos that show you how to use FirstDown PlayBook. Our <a class="text-blue-500" href="https://firstdown.playbooktech.com/coaches-community/?utm_source=firstdown.playbooktech.com&amp;utm_medium=FAQ" target="_blank" title="FirstDown PlayBook Coaches Community">Coaches Community Site</a> provides helpful football coaching tips, clinics, and featured X and O’s. You can also always email us at <a class="text-blue-500" href="mailto:info@firstdownapp.com">info@firstdownapp.com</a> or call us at <a class="text-blue-500" href="tel:1-512-814-6158"><span class="broadviewChromeCall" title="Call from OfficeSuite Phone" style="color: rgb(3, 173, 0); cursor: pointer; text-decoration: none;">(512) 814-6158</span></a>.</div>
                        </div>
                    </div>
                    <div class="grid grid-cols-1 gap-10">
                        <div>
                            <div class="text-2xl font-bold mb-2">Can I create my own football playbooks?</div>
                            <div class="">Yes! FirstDown PlayBook makes it very easy for you to create custom football playbooks and organize them with multiple levels of folders. You can share these playbooks with your team via PDF or printed copies.</div>
                        </div>
                        <div>
                            <div class="text-2xl font-bold mb-2">Is FirstDown PlayBook designed for all levels of football?</div>
                            <div class="">Yes! FirstDown PlayBook caters to all levels of football, including Youth Football, High School Football, College Football, Intramural Football, and Professional Football. Users range from 5-year-old flag football coaches all the way up to the NFL!</div>
                        </div>
                        <div>
                            <div class="text-2xl font-bold mb-2">Are my football plays and football playbooks saved from year to year and can I transfer them from team to team?</div>
                            <div class="">Absolutely! When you come back next season, your plays and playbooks will be here waiting for you. You can always take your single-user memberships with you from school to school or program to program.</div>
                        </div>
                        <div>
                            <div class="text-2xl font-bold mb-2">I’m new to coaching football, will this help me?</div>
                            <div class="">FirstDown PlayBook is the perfect tool for new football coaches! Every football play has detailed coaching points and player assignments for every position. We also post to our blog daily about ways to help you and your team become better.</div>
                        </div>
                        <div>
                            <div class="text-2xl font-bold mb-2">I coach 6-man/8-man/9-man/12-man football, will this help me?</div>
                            <div class="">Yes! FirstDown PlayBook has dedicated sections for 6-man football, 8-man football, 9-man football, and 12-man Canadian football.</div>
                        </div>
                        <div>
                            <div class="text-2xl font-bold mb-2">Will FirstDown PlayBook work for my 7on7 team?</div>
                            <div class="">Yes! FirstDown PlayBook has thousands of 7on7 pass plays that are perfect for your 7v7 football team.</div>
                        </div>
                        <div>
                            <div class="text-2xl font-bold mb-2">Can I cancel my or change my membership?</div>
                            <div class="">Yes. Your subscription plan may be canceled at any time. This is an automatic renewal subscription. If you cancel your subscription, it will not auto-renew, but you will retain access to your account until the end of your subscription period. You can always upgrade to a longer plan or a plan with more football.</div>
                        </div>
                        <div>
                            <div class="text-2xl font-bold mb-2">What computers/devices can I use FirstDown PlayBook on?</div>
                            <div class="">FirstDown PlayBook is a web-based program. That means there is no download necessary and it can be used on any device that has an internet browser such as Google Chrome, Safari, Firefox or Edge. This includes desktop computers, laptops, tablets, and smartphones. However, we do recommend drawing and editing plays on a larger device.</div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer></Footer>
    </section>
</template>

<style scoped>
    .background-image{
        background-image: url("https://playbook-tech-assets.s3.amazonaws.com/firstdown/marketing/red-players-banner-1280x200.png");
        background-repeat: no-repeat;
        background-size:cover;
    }
    li {
        list-style-type: disc;
        list-style-position: inside;
        text-indent: -22px;
        padding-left: 1em;
    }


</style>
