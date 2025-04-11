import React,{ useState } from 'react';
import "./Feedback.css";

const Feedback = () => {
  const [name, setName] = useState('');
  const [anonymous, setAnonymous] = useState(false);
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name: anonymous ? 'Anonymous' : name, feedback });
    alert('Feedback submitted! Thank you.');
    setName('');
    setFeedback(' ');
    setAnonymous(false);
  };

    return (
    <div className='feedback'>
      <div className = "feedback-container">
        <h2>Let us know how we did</h2>
        <p>This is our websites feedback page where as a user, will be able to submit
          your experiences with us. Please let us know how we did, every bit of 
          feedback is appreciated for helping us to improve our website and also improve our
          accomodation for you. Even though critisism is accepted, please be respectful in your responses. Thank you.
        </p>
        <form onSubmit={handleSubmit} className = "feedback-form">
          <div className = "form-group">
            <label>Name:</label>
            <input 
              type="text" 
              className = "feedback-input"
              value={anonymous ? '' : name} 
              onChange={(e) => setName(e.target.value)} 
              disabled={anonymous}
            />
            <label className = "checkbox-label">
              <input 
                type="checkbox" 
                className = "feedback-checkbox"
                checked={anonymous} 
                onChange={() => setAnonymous(!anonymous)}
              />
              Submit as Anonymous
            </label>
          </div>
          <div className = "form-gorup">
            <label>Feedback:</label>
            <textarea 
              className = "feedback-textarea"
              value={feedback} 
              onChange={(e) => setFeedback(e.target.value)}
            />
          </div>
          <button type="submit" className = "feedback-button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Feedback;