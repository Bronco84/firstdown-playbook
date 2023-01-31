<template>
    <section class="product-container">
        <div class="shadow-xl">
            <div class="card-header bg-gray-500 text-white p-4 flex items-center">
                <div class="chakra mb-0 text-uppercase text-lg md:text-3xl uppercase">
                    <slot name="title"></slot>
                </div>
                <div class="flex flex-1 justify-end content-center">
                    <slot name="users"></slot>
                </div>
            </div>
            <div class="card-body mb-10 md:mb-0 md:flex border border-gray-400">
                <div class="md:flex-grow p-10">
                    <slot name="leftbody"></slot>
                </div>
                <div class="md:w-1/4 bg-gray-300 p-10">
                    <slot name="rightbody"></slot>
                </div>
            </div>
        </div>
    </section>
</template>

<style>
    .product-container{
        scroll-margin-top: 80px;
    }
</style>
