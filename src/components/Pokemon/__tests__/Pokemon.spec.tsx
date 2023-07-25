import { render } from '@testing-library/react';
import React from 'react';
import Pokemon from '../Pokemon';



describe('<Pokemon />', () => {
  it('should render', async () => {
  
    const { asFragment, getByText, queryByText } = render(
     <Pokemon />
    );
   
    expect(getByText('Pokemon')).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
