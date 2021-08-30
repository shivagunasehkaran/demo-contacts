import enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import Profile from '../../src/screens/Profile/Profile';

enzyme.configure({adapter: new Adapter()});

describe('Profile screen', () => {
  it('renders correctly with profile details', async () => {
    const wrapper = shallow(<Profile />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with button elements', async () => {
    const wrapper = shallow(<Profile />);
    expect(wrapper.find('Text')).toHaveLength(4);
  });
});
