import React from 'react';

export default function Topics(props) {
  const { topics } = props;

  return (
    <div>
      <h3 className = "mt6">Topics</h3>
      {topics.map((topic) => (
        <p key={topic.id}>{topic.name}</p>
      ))}
    </div>
  );
}
