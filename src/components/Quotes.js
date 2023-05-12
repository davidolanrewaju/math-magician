import './Quotes.css';
import React, { useEffect, useState } from 'react';

const url = 'https://api.api-ninjas.com/v1/quotes?category=success';

function Quotes() {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-Api-Key': 'bF9h6B1FZGeAN6SCVFfe6w==Vpcl9qJ8VbfWDvwi',
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw Error('Cannot Fetch Data From Server. Please try again');
        }
        return response.json();
      })

      .then((data) => {
        setQuotes(data);
        setLoading(false);
        setError(null);
      })
      .catch((err) => {
        setLoading(false);
        if (err.message === 'Failed to fetch') {
          setError('Network Error! Please check your internet connection and try again.');
        } else {
          setError(err.message);
        }
      });
  }, []);

  return (
    <div className="quotes_section">
      {error && <div className="error_message">{ error }</div>}
      {loading && <div className="loading_message">Loading...</div>}
      {quotes.map((item) => (
        <div className="quotes_container" key={item.category}>
          <p className="quote">
            &quot;
            {item.quote}
            &quot;
          </p>
          <p className="author">
            -
            <br />
            {item.author}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Quotes;
