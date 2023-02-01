<script setup>
import { Head, Link } from '@inertiajs/vue3';
import Footer from '@/Components/Footer.vue';
defineProps({
    canLogin: Boolean,
    canRegister: Boolean,
    laravelVersion: String,
    phpVersion: String,
});
</script>

<template>
    <section>
    <Head title="Welcome" />
    <div class="w-full bg-white p-4">
        <div class="flex justify-evenly items-center max-w-7xl mx-auto">
            <div class="chakra text-2xl hidden md:block">OFFICIAL PLAYBOOK OF</div>
            <a class="my-auto" href="https://www.naia.org/sports/fball/index" target="_blank" alt="Official Football PlayBook of NAIA" title="Official Football PlayBook of NAIA">
                <img src="https://playbook-tech-assets.s3.amazonaws.com/firstdown/blog/images/naia-logo.webp" class="img-fluid" alt="Official Football Playbook of NAIA" width="90" height="40" style="--aspect-ratio:90/40;">
            </a>
            <a class="my-auto" href="https://www.naia.org/sports/wflag/index" target="_blank" alt="Official Football PlayBook of NAIA Women's Flag Football" title="Official Football PlayBook of NAIA Women's Flag Football">
                <img src="https://playbook-tech-assets.s3.amazonaws.com/firstdown/blog/images/naia-women-flag-logo.webp" class="img-fluid" alt="Official Football PlayBook of NAIA Women's Flag Football" width="53" height="40" style="--aspect-ratio:53/40;">
            </a>
            <a class="my-auto" href="https://www.usafootball.com/" target="_blank" alt="Official Football PlayBook of USA Football" title="Official Football PlayBook of USA Football">
                    <img src="https://playbook-tech-assets.s3.amazonaws.com/firstdown/blog/images/usa-football-logo.webp" class="img-fluid" alt="Official Football PlayBook of USA Football" width="113" height="40" style="--aspect-ratio:113/40;">
                </a>
                <a class="my-auto" href="https://footballcanada.com/" target="_blank" alt="Official Football PlayBook of Football Canada" title="Official Football PlayBook of Football Canada">
                    <img src="https://playbook-tech-assets.s3.amazonaws.com/firstdown/blog/images/football-canada-logo.webp" class="img-fluid" alt="Official Football PlayBook of Football Canada" width="40" height="40" style="--aspect-ratio:40/40;">
                </a>
        </div>
    </div>
    <div class="homepage-banner-image">
        <div class="max-w-7xl mx-auto text-white">
            <div class="lg:w-1/2 pt-12 lg:px-20 px-10">
                <div class="text-4xl text-center mb-6 font-extrabold">Unlock Your Team's<br/> Competitive Advantage</div>
                <ul class="list-disc space-y-4">
                    <li>Edit One of Our 35,000+ Football Plays Or Draw Your Own With Our Easy to Use, Professional Quality Football Play Drawing Software!</li>
                    <li>Detailed Coaching Notes Included With All Offense, Defense, and Special Teams Plays</li>
                    <li>Print and Share PlayBooks, Play Installs/Cards, Practice Schedules, Practice Scripts, and Wristband Sheets</li>
                    <li>Coaching Clinics and Resources for Youth Football, High School Football, Flag Football, and More!</li>
                </ul>
                <div class=" lg:flex justify-evenly items-center mt-5 space-y-4 lg:space-y-0 ">
                    <div class="cursor-pointer rounded-lg text-xl uppercase bg-red-500 px-4 py-2 w-44 text-center"><Link href="/pricing">SIGN UP NOW!</Link></div>
                    <div class="">OR</div>
                    <div class="underline text-xl cursor-pointer"><Link href="/register">Start Free Trial</Link></div>
                </div>
            </div>
        </div>
        <div class="z-10 bg-black w-full mt-24 pt-4">
            <div class="max-w-5xl mx-auto text-white flex md:space-x-24 p-12 md:p-0">
                <div class="hidden md:block">
                    <img src="https://playbook-tech-assets.s3.amazonaws.com/firstdown/marketing/landing-pages/homepage/coach-singletary-crossed-arms.webp" width="288" height="320" alt="Mike Singletary, Hall of Famer and NFL Coach" title="Mike Singletary, Hall of Famer and NFL Coach"/>
                </div>
                <div class="md:flex-1 font-bold pt-8">
                    <div class="text-3xl italic mb-5"><span class="text-red-700">"</span>FirstDown PlayBook™ changes how coaches teach the game of football. No more drawing plays and cards. This tool enhances your player's learning curve and does it in a fraction of the time.<span class="text-red-700">"</span></div>
                    <div class="text-2xl text-center">Mike Singletary, <i>Hall of Famer and NFL Coach</i></div>
                </div>
            </div>
        </div>

    </div>
    <div class="bg-gray-800 flex items-center">
        <div class="text-3xl text-white p-6 mx-auto font-bold text-center">The Most Comprehensive Digital Football PlayBook Toolkit</div>
    </div>
    <div class="md:grid grid-rows-1 grid-flow-col gap-10 max-w-5xl m-auto p-10">
        <div class="">
            <div class="text-3xl font-bold mb-4 text-red-600">Football Plays Drawn by NFL Coaches</div>
            <div>
                <ul class="list-disc marker:text-red-400 space-y-4 mb-10 md:mb-0">
                    <li>35,000+ pre-drawn football plays for every level</li>
                    <li>Youth football playbooks, high school football playbooks, college football playbooks, flag football playbooks, and more!</li>
                    <li>Youth football plays, high school football plays, and flag football plays drawn up vs multiple looks</li>
                    <li>Detailed <a href="https://www.youtube.com/watch?v=eE6kkI4Q8fE" target="_blank" title="How to Use Coaching Notes on FirstDown PlayBook" class="text-blue-500">football coaching points</a> by NFL coaches included with all playbooks - offense plays, defense plays, and special teams plays</li>
                    <li>Flip ANY football play drawing to see its mirrored version with the click of a button!</li>
                </ul>
            </div>
        </div>
        <div class="text-center">
            <video autoplay="" muted="" loop="" src="https://playbook-tech-assets.s3.amazonaws.com/firstdown/marketing/landing-pages/homepage/find-a-play.mp4" title="How to Find a  Football Play on FirstDown PlayBook" alt="Search for pre-drawn tackle football plays, flag football plays, and 7on7 plays. Then edit them to make them your own!" width="90%"></video>
            <div class="text-blue-500 mt-4 text-small"><a href="https://www.youtube.com/watch?v=oNSe0SblRr4" target="_blank" title="How to Create and Print Wristband Sheets on FirstDown PlayBook">How to Create a Wristband Sheet on FirstDown PlayBook</a></div>
        </div>
    </div>
    <div><hr/></div>
    <div class="md:grid grid-rows-1 grid-flow-col gap-10 max-w-5xl m-auto p-10">
        <div class="">
            <div class="text-3xl font-bold mb-4 text-red-600">Football Coaching Tools to Give Your Team the Winning Edge</div>
            <div>
                <ul class="list-disc marker:text-red-400 space-y-4 mb-10 md:mb-0">
                    <li>Create custom, quality football playbooks in seconds.</li>
                    <li>Create colorful, professional-looking play cards using our simple but powerful football play drawing software</li>
                    <li>Save portions of plays as Football Play Templates (also known as stencils) and re-use them as many times as you want</li>
                    <li>Quickly draw and print Practice Schedules so that your football practice runs as smoothly as possible</li>
                    <li>Easily Create Football Practice Scripts to make the most out of every practice!</li>
                    <li>Organize your football coaching staff & team (with built-in support for Feeder programs, too!)</li>
                </ul>
            </div>
        </div>
        <div class="text-center">
            <img src="https://playbook-tech-assets.s3.amazonaws.com/firstdown/marketing/landing-pages/homepage/wristband-sheets-example.webp" loading="lazy" width="538" height="291" style="width: 100%; height: auto;" class="mt-3 border" alt="FirstDown PlayBook Text-Only Wristband Sheet Example" title="FirstDown PlayBook Text-Only Wristband Sheet Example">
            <div class="text-blue-500 mt-4 text-small"><a href="https://www.youtube.com/watch?v=oNSe0SblRr4" target="_blank" title="How to Create and Print Wristband Sheets on FirstDown PlayBook">How to Create a Wristband Sheet on FirstDown PlayBook</a></div>
        </div>
    </div>
    <div><hr/></div>
    <div class="md:grid grid-rows-1 grid-flow-col gap-10 max-w-5xl m-auto p-10">
        <div class="">
            <div class="text-3xl font-bold mb-4 text-red-600">The Best Football Play Drawing Software on the Market</div>
            <div>
                <ul class="list-disc marker:text-red-400 space-y-4 mb-10 md:mb-0">
                    <li>Our simple but powerful football play editor was built by football coaches, for football coaches.</li>
                    <li>Quickly and easily add players, straight lines, curved lines, symbols, colors, text, and videos to your football plays</li>
                    <li>Use the Lineman View feature to save and draw football plays while zoomed in up to 250% (this is especially useful for Flag Football wristband sheets!)</li>
                    <li>Save portions of plays, such as your most common offensive formations and routes, as Football Play Templates/Stencils to easily re-use them in however many plays you want!</li>
                </ul>
            </div>
        </div>
        <div class="text-center">
            <video autoplay="" muted="" loop="" src="https://playbook-tech-assets.s3.amazonaws.com/firstdown/marketing/landing-pages/homepage/draw-a-play.mp4" alt="Draw your own football plays with FirstDown PlayBook state-of-the-art football play drawing software!" title="How to Draw a Football Play on FirstDown PlayBook" width="90%"></video>
            <div class="text-blue-500 mt-4 text-small"><a href="https://www.youtube.com/watch?v=UKuccMpwtfg" target="_blank" title="How to Use the Play Drawing Tool on FirstDown PlayBook">How to Use the Play Drawing Tool on FirstDown PlayBook</a></div>
        </div>
    </div>
    <div class="bg-gray-800 text-white text-center space-y-4 pb-10">
        <div class="text-3xl p-6 mx-auto font-bold text-center">Are you ready to take your football team's playbook to the next level?</div>
        <div class="rounded-lg text-xl uppercase bg-red-500 px-4 py-2 w-44 text-center mx-auto">SIGN UP NOW!</div>
        <div class="">OR</div>
        <div><Link href="/register" class="underline text-xl text-blue-400 bold">Start Free Trial</Link></div>
    </div>
    <Footer></Footer>
</section>
</template>

<style>
    .homepage-banner-image{
        background: url(https://playbook-tech-assets.s3.amazonaws.com/firstdown/marketing/landing-pages/homepage/homepage-players-banner-1360x627.jpg)!important;
        background-size: cover!important;
        background-position: center!important;
    }
</style>
