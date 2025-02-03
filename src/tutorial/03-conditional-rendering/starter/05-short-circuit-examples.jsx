import { useState } from 'react';

const ShortCircuitExamples = () => {
  // falsy
  const [text, setText] = useState("ds");
  // truthy
  const [name, setName] = useState('susan');
  const [user, setUser] = useState({ name: 'john' });
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      <h3>{<div>Short Circuit Examples</div> && text}</h3>
    </div>
  )
};

export default ShortCircuitExamples;
