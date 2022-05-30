import { shallowMount } from '@vue/test-utils'
import HeaderComponent from "@/ui/Header/HeaderComponent.vue";

describe('HomeComponent.vue', () => {
    it('Header renders properly', () => {
        const wrapper = shallowMount(HeaderComponent)
        expect(wrapper.text()).toMatch('Welcome to the Rviewer Vue skeleton!')
    })
})
