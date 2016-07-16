import test from 'ava'
import React from 'react'
import Topbar from '../../src/components/Topbar'
import { shallow } from 'enzyme'

test('<Topbar /> component', t => {
  const wrapper = shallow(<Topbar />)
  t.is(wrapper.name(), 'View')
  t.is(wrapper.children().length, 1)
  t.is(wrapper.children().first().name(), 'Text')
})
