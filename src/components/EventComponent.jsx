import React from 'react';

const EventComponent = ({ events, onCreateEvent }) => {
  return (
    <div>
      <h2>Events</h2>
      <div>
        {events.length > 0 ? (
          <ul>
            {events.map((event) => (
              <li key={event.id}>{event.name}</li>
            ))}
          </ul>
        ) : (
          <p>No events created yet.</p>
        )}
      </div>
      <button onClick={onCreateEvent}>Create New Event</button>
    </div>
  );
};

export default EventComponent;
