interface CounterDisplayProps {
    count: number;
  }
  
  const CounterDisplay: React.FC<CounterDisplayProps> = ({ count }) => (
    <div>
      <h1>Current Count: {count}</h1>
    </div>
  );
  
  export default CounterDisplay;
  