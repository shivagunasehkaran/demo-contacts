import enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import MyContacts from '../../src/screens/MyContacts/MyContacts';

enzyme.configure({adapter: new Adapter()});

describe('MyContacts screen', () => {
  it('renders correctly with my contacts details', async () => {
    const wrapper = shallow(<MyContacts />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('MyContacts screen : flatlist', () => {
  it('should flatlist return keyExtractor correctly', () => {
    const item = [
      {
        id: '1',
        name: 'Shiva',
      },
      {
        id: '2',
        name: 'gautham',
      },
      {
        id: '2',
        name: 'kumar',
      },
    ];
    const wrapper = shallow(<MyContacts item={item} />);
    expect(wrapper.find('FlatList').length).toEqual(1);
  });
});
