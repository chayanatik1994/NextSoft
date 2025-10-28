import RatingDistributionChart from './RatingDistributionChart';

const App = () => {
  const ratingData = [
    { name: '5 Star', count: 9542 },
    { name: '4 Star', count: 6389 },
    { name: '3 Star', count: 3201 },
    { name: '2 Star', count: 1530 },
    { name: '1 Star', count: 850 },
  ];

  return (
    <div className="card-container">
      <h3>Customer Rating Distribution</h3>
      {/* Use the component with the data */}
      <RatingDistributionChart 
        data={ratingData} 
        barColor="#ffc107" // Optional: change the bar color to a gold/yellow
      />
    </div>
  );
};

export default App;