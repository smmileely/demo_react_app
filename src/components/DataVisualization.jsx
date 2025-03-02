import { useState, useEffect } from "react";

export function DataVisualization() {
  const [chartData, setChartData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching chart data
    const fetchChartData = async () => {
      setIsLoading(true);
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setChartData({
        monthlyRevenue: [
          42000, 45000, 51000, 53000, 48000, 52000, 58000, 61000, 62000, 59000,
          63000, 67000,
        ],
        userGrowth: [
          1200, 1350, 1500, 1750, 2100, 2400, 2800, 3200, 3600, 4100, 4500,
          5000,
        ],
        conversionRates: [
          2.8, 2.9, 3.0, 3.1, 3.0, 3.2, 3.4, 3.5, 3.6, 3.5, 3.7, 3.8,
        ],
        months: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      });
      setIsLoading(false);
    };

    fetchChartData();
  }, []);

  if (isLoading) {
    return <div className="loading-data">Preparing visualization data...</div>;
  }

  return (
    <div className="data-visualization-container">
      <h2>Data Visualization</h2>

      <div className="chart-controls">
        <div className="chart-control-group">
          <label>Date Range:</label>
          <select>
            <option>Last 12 months</option>
            <option>Last 6 months</option>
            <option>Last 30 days</option>
            <option>Custom range</option>
          </select>
        </div>

        <div className="chart-control-group">
          <label>Metrics:</label>
          <select>
            <option>All metrics</option>
            <option>Revenue only</option>
            <option>User growth only</option>
            <option>Conversion only</option>
          </select>
        </div>

        <button className="export-button">Export Data</button>
      </div>

      <div className="charts-grid">
        <div className="chart-container">
          <h3>Monthly Revenue</h3>
          <div className="chart-placeholder">
            {/* In a real app, you would render a chart library component here */}
            <div className="mock-bar-chart">
              {chartData.monthlyRevenue.map((value, index) => (
                <div key={index} className="mock-bar-container">
                  <div
                    className="mock-bar"
                    style={{ height: `${(value / 70000) * 100}%` }}
                    title={`${
                      chartData.months[index]
                    }: $${value.toLocaleString()}`}
                  ></div>
                  <div className="mock-bar-label">
                    {chartData.months[index]}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="chart-container">
          <h3>User Growth</h3>
          <div className="chart-placeholder">
            {/* In a real app, you would render a chart library component here */}
            <div className="mock-line-chart">
              {chartData.userGrowth.map((value, index) => (
                <div key={index} className="mock-point-container">
                  <div
                    className="mock-point"
                    style={{
                      bottom: `${(value / 5000) * 100}%`,
                      left: `${(index / 11) * 100}%`,
                    }}
                    title={`${
                      chartData.months[index]
                    }: ${value.toLocaleString()} users`}
                  ></div>
                  {index > 0 && (
                    <div
                      className="mock-line"
                      style={{
                        width: `${100 / 11}%`,
                        bottom: `${
                          (chartData.userGrowth[index - 1] / 5000) * 100
                        }%`,
                        left: `${((index - 1) / 11) * 100}%`,
                        transform: `rotate(${Math.atan2(
                          ((chartData.userGrowth[index] -
                            chartData.userGrowth[index - 1]) /
                            5000) *
                            100,
                          100 / 11
                        )}rad)`,
                        transformOrigin: "left bottom",
                      }}
                    ></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="data-table-container">
        <h3>Monthly Performance Data</h3>
        <table className="data-table">
          <thead>
            <tr>
              <th>Month</th>
              <th>Revenue</th>
              <th>Users</th>
              <th>Conversion Rate</th>
            </tr>
          </thead>
          <tbody>
            {chartData.months.map((month, index) => (
              <tr key={index}>
                <td>{month}</td>
                <td>${chartData.monthlyRevenue[index].toLocaleString()}</td>
                <td>{chartData.userGrowth[index].toLocaleString()}</td>
                <td>{chartData.conversionRates[index]}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
