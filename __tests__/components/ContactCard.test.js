import enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import ContactCard from '../../src/components/ContactCard';

enzyme.configure({adapter: new Adapter()});

describe('contact card component validation', () => {
  it('renders correctly with contact card elments', async () => {
    const wrapper = shallow(<ContactCard />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with text elements', async () => {
    const wrapper = shallow(<ContactCard />);
    expect(wrapper.find('Text')).toHaveLength(2);
  });
});
