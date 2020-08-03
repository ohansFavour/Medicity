import React from 'react'
import { shallow } from 'enzyme'

import App from './App'

describe('App Component', () => {
  const component = shallow(<App />)
  test('renders component', () => {
    expect(component).toMatchSnapshot()
  })

  it('renders div with classname App', () => {
    const container = component.find('.App')
    expect(container.length).toBe(1)
  })
})
