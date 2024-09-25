import React from 'react';
import { Doughnut,Line, Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
   } from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
);

const DashboardContent = () => {
    const lineData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
            {
                label: 'Sales',
                data: [150, 200, 180, 220, 250, 300],
                fill: false,
                backgroundColor: 'rgb(75, 192, 192)',
                borderColor: 'rgba(75, 192, 192, 0.2)',
            },
        ],
    };

    const barData = {
        labels: ['Product A', 'Product B', 'Product C', 'Product D'],
        datasets: [
            {
                label: 'Stock',
                data: [120, 190, 300, 500],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const doughnutData = {
        labels: ['Product A', 'Product B', 'Product C', 'Product D'],
        datasets: [
          {
            label: 'Most Ordered Products',
            data: [300, 500, 100, 200],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };

    return (
        <div>
            <h2>Dashboard</h2>
            <div className="row">
                <div className="col-lg-3 col-sm-3 col-sm-6">
                    <div className="card text-left bg-primary text-light border-0">

                        <div className="card-body">
                            <h3 className="card-title">150</h3>
                            <p className="card-text">New Orders</p>

                        </div>
                        <div className="card-footer bg-gradient border-0 text-center">
                            More info
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-3 col-sm-6">
                    <div className="card text-left bg-success text-light border-0">

                        <div className="card-body">
                            <h3 className="card-title">53%</h3>
                            <p className="card-text">Bounce Rate</p>

                        </div>
                        <div className="card-footer bg-gradient border-0 text-center">
                            More info
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-3 col-sm-6">
                    <div className="card text-left bg-warning text-dark border-0">

                        <div className="card-body">
                            <h3 className="card-title">44</h3>
                            <p className="card-text">User Registrations</p>

                        </div>
                        <div className="card-footer bg-gradient border-0 text-center">
                            More info
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-3 col-sm-6">
                    <div className="card text-left bg-danger text-light border-0">

                        <div className="card-body">
                            <h3 className="card-title">65</h3>
                            <p className="card-text">Unique Visitors</p>

                        </div>
                        <div className="card-footer bg-gradient border-0 text-center">
                            More info
                        </div>
                    </div>
                </div>
            </div>          
            <div className='row p-3 justify-content-center align-item-center'>
                <div className="col-lg-6 p-2">
                    <Line data={lineData} />
                </div>
                <div className="col-lg-6 p-2">
                    <Bar data={barData} />
                </div>
                <div className="col-lg-5 p-2">
                    <Doughnut data={doughnutData} />
                </div>
                
            </div>
        </div>
    );
};

export default DashboardContent;
