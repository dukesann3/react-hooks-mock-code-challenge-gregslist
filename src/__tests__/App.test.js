import { screen, render, waitForElementToBeRemoved } from "@testing-library/react";
import { server } from "../msw/service";
//import userEvent from "@testing-library/user-event";
import App from "../components/App";
import "@testing-library/jest-dom";
import "whatwg-fetch";
import userEvent from "@testing-library/user-event";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("Test passing", () => {
  return new Promise((resolve, reject) => {
    resolve(true);
  });
});

test("Browser contains pictures when browser first loads", async () => {

  render(<App />);
  expect(await screen.findByText(/lorem testum 1/g)).toBeInTheDocument();
  expect(await screen.findByText(/lorem testum 2/g)).toBeInTheDocument();

});

test("Once favorite or unfavorite button is clicked, it will change btns to respective btn type", async () => {

  render(<App />);
  //make sure to await for the browser to populate here...
  await screen.findByText(/lorem testum 1/g);

  screen.getAllByRole('button', {
    name: '☆'
  }).forEach((el) => {
    expect(el).toBeInTheDocument();
    userEvent.click(el);
  });

  expect(screen.queryAllByText("★")[0]).toBeInTheDocument();

});

test("Can search for listing by their name", async () => {

  render(<App />);
  //make sure to await for the browser to populate here...
  await screen.findByText(/lorem testum 1/g);

  const input = screen.getByPlaceholderText(/search free stuff/i);
  userEvent.type(input, 'lorem testum 1');
  
  const submitBtn = screen.getByRole('button', {
    name: '🔍'
  })
  userEvent.click(submitBtn);

  expect(screen.queryAllByText(/lorem testum/).length).toBe(1);

})

test("Listing will be removed from when trash icon/btn is clicked", async () => {
  render(<App />);
  //make sure to await for the browser to populate here...
  await screen.findByText(/lorem testum 1/g);

  userEvent.click(screen.getAllByRole('button', {
    name: '🗑'
  })[0]);

  await waitForElementToBeRemoved(screen.getByText(/lorem testum 1/g));
  expect(screen.queryByText(/lorem testum 1/g)).not.toBeInTheDocument();

});







