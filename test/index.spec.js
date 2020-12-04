import { mount } from '@vue/test-utils'
import index from '@/pages/index.vue'

describe('index', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(index)
    expect(wrapper.vm).toBeTruthy()
  })

  test('Mostra titulo do minicurso', () => {
    const wrapper = mount(index)
    expect(wrapper.text()).toContain('DevOps Hello World v2')
  })

  test('Mostra o botão da sysvale', () => {
    const wrapper = mount(index)

    const button = wrapper.find('#sysvale')
    expect(button.text()).toBe('Sysvale')
  })

  test('Mostra o botão da lpi', () => {
    const wrapper = mount(index)
    const button = wrapper.find('#lpi')
    expect(button.text()).toBe('LPI')
  })

  test('Mostra botão da apresentação', () => {
    const wrapper = mount(index)
    const button = wrapper.find('#presentation')
    expect(button.text()).toBe('Link Para a Apresentação')
  })
})
