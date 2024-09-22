const n=`<template>
  <div class="chart-box">
    <an-chart
        :chart-data="barChartData"
        chart-type="pie"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      barChartData: [
        { name: 'Mon', value: 120 },
        { name: 'Tue', value: 200 },
        { name: 'Wed', value: 150 },
        { name: 'Thu', value: 80 },
        { name: 'Fri', value: 70 },
        { name: 'Sat', value: 110 },
        { name: 'Sun', value: 130 }
      ]
    };
  }
};
<\/script>

<style scoped>
.chart-box{
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
`;export{n as default};
