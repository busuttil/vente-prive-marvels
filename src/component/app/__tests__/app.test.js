import React from 'react';
import { shallow } from 'enzyme';
import App from '../app.component';
import { AppContainer } from '../app.styled';

describe('App', () => {
  const getWrapper = shallow(<App />);

  it('render without crashing', () => {
    expect(getWrapper).toMatchSnapshot();
  });

  it('render AppContainer class', () => {
    const wrapper = shallow(<AppContainer />);
    expect(wrapper).toMatchSnapshot();
  });
});
