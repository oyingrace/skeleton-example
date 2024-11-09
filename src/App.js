
import React, { useState, useEffect } from 'react';
import { Skeleton, Card } from 'antd'; 


const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 10000);
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <Card style={{ width: 300 }}>
        {loading ? (
          <Skeleton active />
        ) : (
          <div>
            <h2>Skeleton Example</h2>
            <p>This is the content that appears once loading is complete.</p>
          </div>
        )}
      </Card>
    </div>
  );
};

export default App;
