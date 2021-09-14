import "./expense.scss";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const data = [
  {
    subject: 'Labor',
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: 'Pesticides',
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Manure',
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Water',
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: 'Animal feed',
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: 'Medicine',
    A: 65,
    B: 85,
    fullMark: 150,
  },
];

export default function Expenses() {
  
   
      return (
<div className="expensecard">
<div className="expenseItemf">
<h3 className="expenseItemTitle">Expenditure Report</h3>
<div class="row"  className= "expenserow">
  <div class="col-6 col-sm-4" style={{"width": "30rem"}} className="financecard" >
  <div class="card" >
  <div class="card-body" style={{"textAlign":"center", "textJustify":"distribute"}}>
    <h5 class="card-title">Animal feed</h5>
    <h6 class="card-subtitle mb-2 text-muted">Aug 2021</h6>
    <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur earum atque nesciunt corporis quo nobis est itaque cupiditate quibusdam laudantium, vero sit, nemo, at iusto consequatur dicta. Fugit, laudantium dolorum?</p>
    
    <a href="#" class="card-link" style={{"textDecoration":"none", "padding":"10px"}}>Generate Receipt</a>
  </div>
</div>
  </div>
  <div class="col-6 col-sm-4"  style={{"width": "30rem"}} className="financecard" >
  <div class="card">
  <div class="card-body" style={{"textAlign":"center", "textJustify":"distribute"}}>
    <h5 class="card-title">Labor Expenses</h5>
    <h6 class="card-subtitle mb-2 text-muted">Aug 2021</h6>
    <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur earum atque nesciunt corporis quo nobis est itaque cupiditate quibusdam laudantium, vero sit, nemo, at iusto consequatur dicta. Fugit, laudantium dolorum? </p>
    
    <a href="#" class="card-link" style={{"textDecoration":"none", "padding":"10px"}}>Generate Receipt</a>
  </div>
</div>
  </div>
  <div class="col-6 col-sm-4"  style={{"width": "30rem","height": "25rem"}} className="financecard" >
  <div class="card">
  <div class="card-body" style={{"textAlign":"center", "textJustify":"distribute"}}>
    <h5 class="card-title">Equipment Lease</h5>
    <h6 class="card-subtitle mb-2 text-muted">Aug 2021</h6>
    <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur earum atque nesciunt corporis quo nobis est itaque cupiditate quibusdam laudantium, vero sit, nemo, at iusto consequatur dicta. Fugit, laudantium dolorum?</p>
    
    <a href="#" class="card-link" style={{"textDecoration":"none", "padding":"10px"}}>Generate Receipt</a>
  </div>
</div>
  </div>

</div>
</div>

<div className="expenseItem">
<h3 className="expenseItemTitle">Expenses</h3>
<RadarChart
      cx={300}
      cy={250}
      outerRadius={150}
    width={500}
     height={500}
      data={data}
    >
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis />
      <Radar
        name="Mike"
        dataKey="A"
        stroke="#8884d8"
        fill="#8884d8"
        fillOpacity={0.6}
      />
    </RadarChart>
</div>
</div>
        
          
        
      );
  }