import { LineChart, axisClasses } from "@mui/x-charts";
import Title from "../../layouts/title/title.component";
import { data } from "../../constants/chartinfo"

export default function Chart() {
  return (
    <>
    
      <Title>Today</Title>
      <div style={{ width: "100%", flexGrow: 1, overflow: "hidden" }}>
        <LineChart
          dataset={data}
          margin={{
            top: 16,
            right: 20,
            left: 70,
            bottom: 30,
          }}
          xAxis={[
            {
              scaleType: "point",
              dataKey: "time",
              tickNumber: 2,
              
            },
          ]}
          yAxis={[
            {
              label: "Sales ($)",
              labelStyle: {
               
               
              },
             
              max: 2500,
              tickNumber: 3,
            },
          ]}
          series={[
            {
              dataKey: "amount",
              showMark: false,
             
            },
          ]}
          sx={{
            [`.${axisClasses.root} line`]: {
              
            },
            [`.${axisClasses.root} text`]: {
             
            },
            [`& .${axisClasses.left} .${axisClasses.label}`]: {
              transform: "translateX(-25px)",
            },
          }}
        />
      </div>
     
    </>
  );
}
