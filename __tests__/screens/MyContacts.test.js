// library imports
import enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
// page imports
import MyContacts from '../../src/screens/MyContacts';

enzyme.configure({adapter: new Adapter()});

describe('MyContacts screen', () => {
  it('renders correctly with my contacts details', async () => {
    const wrapper = shallow(<MyContacts />);
    expect(wrapper).toMatchSnapshot();
  });
});
