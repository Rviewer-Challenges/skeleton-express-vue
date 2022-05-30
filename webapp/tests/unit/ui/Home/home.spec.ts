import { shallowMount } from '@vue/test-utils'
import HomeComponent from "@/ui/Home/HomeComponent.vue";

describe('HeaderComponent.vue', () => {
    it('Home renders properly', () => {
        const wrapper = shallowMount(HomeComponent)
        expect(wrapper.text()).toMatch('Here you would find a Vue bootstrapped webapp where you could start coding without taking care about configuring so many things, and just focus on the code!  You could start modifying the src/App.vue file to see any change in the webapp.')
    })
})
