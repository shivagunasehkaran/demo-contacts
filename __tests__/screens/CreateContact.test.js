import enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import CreateContact from '../../src/screens/CreateContact/CreateContact';

enzyme.configure({adapter: new Adapter()});

describe('CreateContact screen', () => {
  it('renders correctly with create contact details', async () => {
    const wrapper = shallow(<CreateContact />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render state input text element', async () => {
    const wrapper = shallow(<CreateContact />);
    expect(wrapper.find('TextInput')).toHaveLength(4);
  });

  it('should render input element properly', async () => {
    const wrapper = shallow(<CreateContact value={'keyword'} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with button elements', async () => {
    const wrapper = shallow(<CreateContact />);
    expect(wrapper.find('Button')).toHaveLength(1);
  });
});
