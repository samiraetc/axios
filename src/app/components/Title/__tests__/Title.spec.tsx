import { render, cleanup, waitFor } from '@testing-library/react';
import React from 'react';
import Title from '../Title';
import MockAdapter from "axios-mock-adapter";
import api, { baseURL } from "@pages/api/api";
import { titleMock } from '../../../mock/titleMock';

const mock = new MockAdapter(api, { onNoMatch: "throwException" });

beforeAll(() => {
  mock.reset();
});

afterEach(cleanup);


describe('<Title />', () => {
  it('should render', async () => {
    mock.onGet(`${baseURL}api/v2/pokemon/ditto`).reply(200, titleMock);
    const { asFragment, getByText, queryByText } = render(
     <Title />
    );

    expect(queryByText('Loading...')).toBeInTheDocument();
   

    await waitFor(() =>  expect(queryByText('Loading...')).not.toBeInTheDocument());
   
    expect(getByText('Olá mundo')).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render and api 404', async () => {

    mock.onGet(`${baseURL}api/v2/pokemon/ditto`).reply(404, {errors: 'volte a tentar novamente'});

    const { asFragment, getByText, queryByText } = render(
     <Title />
    );

    expect(queryByText('Loading...')).toBeInTheDocument();
 
    await waitFor(() =>  expect(queryByText('Loading...')).not.toBeInTheDocument());
   
    expect(getByText('Olá mundo')).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
