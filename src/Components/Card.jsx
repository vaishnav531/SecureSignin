export function Card({ children, className }) {
    return (
      <div className={`bg-white shadow-lg rounded-2xl p-6 ${className}`}>
        {children}
      </div>
    );
  }
  
  export function CardContent({ children }) {
    return <div className="mt-4">{children}</div>;
  }
  