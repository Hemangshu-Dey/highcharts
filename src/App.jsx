import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const options = {
  chart: {
    type: "column",
  },
  title: {
    text: "BARCHART: MONTHLY SALES FIGURES",
  },
  subtitle: {
    text: "Comparison of sales across three product categories",
  },
  xAxis: {
    categories: ["January", "February", "March", "April", "May", "June"],
    crosshair: true,
    accessibility: {
      description: "Months",
    },
  },
  yAxis: {
    min: 0,
    title: {
      text: "Sales (in $)",
    },
  },
  tooltip: {
    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
    pointFormat:
      '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
      '<td style="padding:0"><b>${point.y}</b></td></tr>',
    footerFormat: "</table>",
    shared: true,
    useHTML: true,
  },
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0,
      dataLabels: {
        enabled: true,
      },
    },
  },
  series: [
    {
      name: "Electronics",
      data: [12000, 15000, 14000, 13000, 17000, 16000],
    },
    {
      name: "Clothing",
      data: [8000, 9000, 9500, 11000, 10500, 10000],
    },
    {
      name: "Groceries",
      data: [5000, 6000, 5500, 7000, 6500, 7500],
    },
  ],
};

const App = () => {
  return (
    <>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </>
  );
};

export default App;
