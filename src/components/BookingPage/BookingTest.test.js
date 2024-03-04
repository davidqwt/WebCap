import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';
import BookingPage from "./BookingPage";
import {initializeTimes,updateTimes} from "./BookingPage"
import { fetchData,submitAPI } from "./API";

// test('Renders the BookingForm heading', () => {
//     render(<BookingForm />);
//     const headingElement = screen.getByText(/Book Now/);
//     expect(headingElement).toBeInTheDocument();
// })

// test('test initalizeTime and updateTimes function with giving array',()=>{

//     // const initialState = initializeTimes();
//     // const expectedResult = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
//     // expect(initialState).toEqual(expectedResult);

//     let state = [];

//   // Define action to update times
//   const action = { type: 'update', payload: ['19:00', '20:00'] };

//   // Call reducer function (updateTimes) with action
//   state = updateTimes(state, action);

//   // Define expected result after update
//   const expectedResult = ['19:00', '20:00'];

//   // Assert that the state has been updated correctly
//   expect(state).toEqual(expectedResult);

// })
test("initializeTimes returns the correct expected value", () => {
  const today = new Date();
  const initialState = initializeTimes();
  const expectedResult = { availableTimes: fetchData(today) };
  expect(initialState).toEqual(expectedResult);
});

test("updateTimes returns the same state", () => {
  const state = {
    times: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"],
  };
  const action = { type: "SOME_ACTION" };
  const newState = updateTimes(state, action);
  expect(newState).toEqual(state);
});

test("submitAPI returns true", () => {
  const formData = {
    date: "2022-10-12",
    time: "20:00",
    guests: 5,
    occasion: "Birthday",
  };
  const result = submitAPI(formData);
  expect(result).toBe(true);
});
