# Interview Scheduler
## Overview
A React single-page application meant to replicate the scheduling of interviews between students and a list of interviewers. 

Peruse a 5-day calendar for available interview slots, select a time slot and interviewer of your choice, enter your name and save the appointment. 

With the scheduler_api (linked below), data is persistent between refreshes. The app is set up to make requests to the API for appointment data to populate the React components.

## Key Features

- Persistent data using a custom API.
- Information re-renders live, without page refresh.
- Able to edit or delete existing interviews.
- Hover effects for selectable components and buttons.
- User feedback components display when a booking is deleting or saving.
- Confirmation prompts before deleting appointment.
- Navigation bar containing days of the week change colour and opacity when selected or out of appointment slots.
- Interviewer icons display name and new styling when selected.
- User-facing error messages handle errors and re-render state of the appointments list.
- Prevents users from submitting an appointment without submitting a name with error message. 
- Remaining spots listed beneath the day in the Nav bar and updates live when an appointment is made or deleted.

## API

Find the Scheduler API [here.](https://github.com/lighthouse-labs/scheduler-api)

## Screenshots
#### The Main Interface:
![The main interface](https://github.com/Rmaceac/scheduler/blob/master/docs/main-page.png?raw=true)

#### Creating an Appointment:
![Creating an appointment](https://github.com/Rmaceac/scheduler/blob/master/docs/creating-appointment.png?raw=true)

#### Displaying a 'No-Name-Provided' Error:
![Displaying a 'No-Name-Provided' Error](https://github.com/Rmaceac/scheduler/blob/master/docs/no-name-error.png?raw=true)

#### Animated 'Saving' Feedback:
![Animated 'Saving' feedback](https://github.com/Rmaceac/scheduler/blob/master/docs/saving-appointment.png?raw=true)

#### 'Confirm Delete' Prompt:
!['Confirm Delete' Prompt](https://github.com/Rmaceac/scheduler/blob/master/docs/confirm-delete.png?raw=true)

## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```
