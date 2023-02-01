<script setup>
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import Checkbox from '@/Components/Checkbox.vue';
import { Head, Link, useForm } from '@inertiajs/vue3';

const form = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    terms: false,
});

const submit = () => {
    form.post(route('register'), {
        onFinish: () => form.reset('password', 'password_confirmation'),
    });
};
</script>

<template>
    <section>
        <Head title="Register" />
        <div class="md:absolute side-image top-0 bottom-0 left-0 right-0 z-10">
        </div>

        <div class="md:fixed md:z-10 md:w-1/2 w-full h-screen md:p-20 p-5 bg-white  md:right-0 md:overflow-auto">
            <div class="text-center mb-10">
                <div class="text-xl">FirstDown PlayBook™ Free Trial</div>
                <div class="mb-6 text-red-600">No Credit Card Needed!</div>
                <div class="text-gray-500">Complete the form to start your free trial!*</div>
                <div class="text-gray-400">*Complete and accurate information required for access and discount.</div>
            </div>
            <form @submit.prevent="submit" class="max-w-md mx-auto pb-32">
                <div>
                    <InputLabel for="name" value="Name*" />

                    <TextInput
                        id="name"
                        type="text"
                        class="mt-1 block w-full"
                        v-model="form.name"
                        required
                        autofocus
                        autocomplete="name"
                    />

                    <InputError class="mt-2" :message="form.errors.name" />
                </div>

                <div class="mt-4">
                    <InputLabel for="email" value="Email*" />

                    <TextInput
                        id="email"
                        type="email"
                        class="mt-1 block w-full"
                        v-model="form.email"
                        required
                        autocomplete="username"
                    />

                    <InputError class="mt-2" :message="form.errors.email" />
                </div>

                <div class="mt-4">
                    <InputLabel for="city" value="City*" />

                    <TextInput
                        id="city"
                        type="text"
                        class="mt-1 block w-full"
                        v-model="form.city"
                        required
                        autocomplete="city"
                    />

                    <InputError class="mt-2" :message="form.errors.city" />
                </div>
                <div class="mt-4">
                    <InputLabel for="state" value="State*" />

                    <TextInput
                        id="state"
                        type="text"
                        class="mt-1 block w-full"
                        v-model="form.state"
                        required
                        autocomplete="state"
                    />

                    <InputError class="mt-2" :message="form.errors.state" />
                </div>
                <div class="mt-4">
                    <InputLabel for="country" value="If outside US, what country?" />

                    <TextInput
                        id="country"
                        type="text"
                        class="mt-1 block w-full"
                        v-model="form.country"
                        required
                        autocomplete="country"
                    />

                    <InputError class="mt-2" :message="form.errors.country" />
                </div>
                <div class="mt-4">
                    <InputLabel for="cell_phone" value="Cell Phone Number (no school numbers please)*" />

                    <TextInput
                        id="cell_phone"
                        type="text"
                        class="mt-1 block w-full"
                        v-model="form.cell_phone"
                        required
                        autocomplete="cell_phone"
                    />

                    <InputError class="mt-2" :message="form.errors.cell_phone" />
                </div>
                <div class="mt-4">
                    <InputLabel for="age_of_players" value="Age of Players*" />

                    <select v-model="form.age_of_players" id="age_of_players-3c5bcaa4-038b-4fdf-be2b-42981941894f" required class="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm" name="age_of_players"><option disabled="">Please Select</option><option value="Youth (12 &amp; Under)">Youth (12 &amp; Under)</option><option value="Middle School">Middle School</option><option value="High School">High School</option><option value="College">College</option><option value="Professional">Professional</option><option value="Adult/College Recreation &amp; Intramural">Adult/College Recreation &amp; Intramural</option><option value="Player">I Am A Player</option></select>


                    <InputError class="mt-2" :message="form.errors.age_of_players" />
                </div>
                <div class="mt-4">
                    <InputLabel for="type_of_football" value="Type of Football*" />

                    <select v-model="form.type_of_football" id="type_of_football-3c5bcaa4-038b-4fdf-be2b-42981941894f" required class="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm" name="type_of_football"><option disabled="" value="">Please Select</option><option value="Flag Football">Flag Football</option><option value="Tackle Football">11 v 11 Tackle</option><option value="6/8/9 Man Tackle">6/8/9/12 Man Tackle</option><option value="7 on 7 Passing">7 on 7 Passing</option></select>

                    <InputError class="mt-2" :message="form.errors.type_of_football" />
                </div>


                <div class="mt-4">
                    <InputLabel for="playbook_needs" value="Describe your playbook needs (ie. 6,-Man, Wing T, Spread, 4-2-5, Special Teams)" />

                    <TextInput
                        id="playbook_needs"
                        type="text"
                        class="mt-1 block w-full"
                        v-model="form.playbook_needs"
                        required
                    />

                    <InputError class="mt-2" :message="form.errors.playbook_needs" />
                </div>
                <div class="mt-4">
                    <InputLabel for="organization_name" value="Full School/Program Name (no abbreviations, ie: no = BHS, yes = Belleville High School)*" />

                    <TextInput
                        id="organization_name"
                        type="text"
                        class="mt-1 block w-full"
                        v-model="form.organization_name"
                        required
                    />

                    <InputError class="mt-2" :message="form.errors.organization_name" />
                </div>
                <div class="mt-4">
                    <InputLabel for="position_on_staff" value='Position on Staff (Head or position you coach, not "All")*' />

                    <TextInput
                        id="position_on_staff"
                        type="text"
                        class="mt-1 block w-full"
                        v-model="form.position_on_staff"
                        required
                    />

                    <InputError class="mt-2" :message="form.errors.position_on_staff" />
                </div>

                <div class="mt-4">
                    <InputLabel for="password" value="Password*" />

                    <TextInput
                        id="password"
                        type="password"
                        class="mt-1 block w-full"
                        v-model="form.password"
                        required
                        autocomplete="new-password"
                    />

                    <InputError class="mt-2" :message="form.errors.password" />
                </div>

                <div class="mt-4">
                    <InputLabel for="password_confirmation" value="Confirm Password*" />

                    <TextInput
                        id="password_confirmation"
                        type="password"
                        class="mt-1 block w-full"
                        v-model="form.password_confirmation"
                        required
                        autocomplete="new-password"
                    />

                    <InputError class="mt-2" :message="form.errors.password_confirmation" />
                </div>
                <div class="mt-4 flex">
                    <Checkbox
                        id="agreement"
                        class="mt-1 block h-5 w-5 cursor-pointer"
                        v-model="form.agreement"
                        required
                        autocomplete="cell_phone"
                    />
                    <div class="ml-2">By filling out this form I agree to receive emails and texts from FirstDown PlayBook.*"</div>
                    <InputError class="mt-2" :message="form.errors.agreement" />
                </div>
                <div class="flex items-center justify-end mt-4">
                    <Link
                        :href="route('login')"
                        class="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Already registered?
                    </Link>

                    <PrimaryButton class="ml-4" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                        SUBMIT
                    </PrimaryButton>
                </div>
            </form>

        </div>
        <div class="w-full fixed z-30 bottom-0 py-3 bg-gray-800 text-white flex items-center px-10">
                <div class="flex-1">© 2023 PlayBook Tech, Inc. All rights reserved.</div>
                <div class="col-md-6">
                    <div class="text-md-right footer-links d-none d-md-block"><a href="https://firstdown.playbooktech.com/legal">Legal Information</a></div>
                </div>
            </div>
    </section>
</template>

<style scoped>
    .side-image{
        background-image: url('https://playbook-tech-assets.s3.amazonaws.com/firstdown/marketing/football-on-field-left-1920x1080.png');
        background-repeat: no-repeat;
        background-size: cover;
        top:-15px;

    }
</style>
