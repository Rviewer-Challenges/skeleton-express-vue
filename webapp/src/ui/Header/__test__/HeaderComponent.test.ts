import { render } from '@testing-library/vue'
import HeaderComponent from '@/ui/Header/HeaderComponent.vue'

it('should render Header Component', function () {
  const { getByText } = render(HeaderComponent)

  getByText('Welcome to the Rviewer Vue skeleton!')
})