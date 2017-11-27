import React from 'react';
import { Header } from '../../components/Header';
// import ReactShallowRenderer from 'react-test-renderer/shallow';
import { shallow } from 'enzyme';

// test('should render Header correctly', () => {
// //     const renderer = new ReactShallowRenderer();
// //     renderer.render(<Header />);
// //   expect(renderer.getRenderOutput()).toMatchSnapshot();
// const wrapper = shallow(<Header />);
// // expect(wrapper.find('h1').text()).toBe('Expensify');
// expect(wrapper).toMatchSnapshot();
// });

let startLogout, wrapper;

beforeEach(() => {
	startLogout = jest.fn();
	wrapper = shallow(
		<Header 
			startLogout={startLogout} 
		/>
	);
});


test('should render the Header correctly', () => {
     expect(wrapper).toMatchSnapshot();
});

test('should call startLogout on button click', () => {
		wrapper.find('button').prop('onClick')();
		expect(startLogout).toHaveBeenCalled();
});