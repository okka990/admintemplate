  //javascript area

// start site setting
    const getsitesettings = document.getElementById('sitesettings');
    getsitesettings.addEventListener('click',function(){
        document.body.classList.toggle('show-nav');
    })
// end site setting

  // start navbar
  // start top sdiebars

 
  // end top sdiebars
  // end navbar
   function dropbtn(e){
    e.target.parentElement.nextElementSibling.classList.toggle('show');
    // console.log(e.target);
    console.log(e.target.parentElement);
    console.log(e.target.parentElement.nextElementSibling);
    // console.log(e.target.parentElement.nextElementSibling.classList);

  }
  $(document).ready(function(){
    // start left site bar
        $('.sidebarlinks').click(function(){
            $('.sidebarlinks').removeClass('currents');
            $(this).addClass('currents');
        })
    // end left site bar

  });

// start gauge 
  var gaugeusr = new JustGage({
            id: "gaugeuser", // the id of the html element
            value: 50,
            min: 0,
            max: 100,
            decimals: 2,
            gaugeWidthScale: 0.6
        });

  var gaugecus = new JustGage({
            id: "gaugecustomers", // the id of the html element
            value: 50,
            min: 0,
            max: 100,
            decimals: 2,
            gaugeWidthScale: 0.6
        });

  var gaugeemps = new JustGage({
            id: "gaugeemployees", // the id of the html element
            value: 50,
            min: 0,
            max: 100,
            decimals: 2,
            gaugeWidthScale: 0.6
        });

  var gaugeinvs = new JustGage({
            id: "gaugeinvesters", // the id of the html element
            value: 50,
            min: 0,
            max: 100,
            decimals: 2,
            gaugeWidthScale: 0.6
        });

// update the value randomly
setInterval(() => {
  gaugeusr.refresh(Math.random() * 100);
  gaugecus.refresh(Math.random() * 100);
  gaugeemps.refresh(Math.random() * 100);
  gaugeinvs.refresh(Math.random() * 100);


}, 4000)
// end gauge 


  // start expenses area

  const ctx = document.getElementById('mypiechart');

  let abc = new Chart(ctx, {

    type: 'doughnut',
    data: {
    
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    }
    // ,
    // options: {
    //   scales: {
    //     y: {
    //       beginAtZero: true
    //     }
    //   }
    // }
  });

  console.log(abc.canvas.height);
  // end expenses area

  // start earning overview

  google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Year', 'Sales', 'Expenses'],
          ['2004',  1000,      400],
          ['2005',  1170,      460],
          ['2006',  660,       1120],
          ['2007',  1030,      540]
        ]);

        var options = {
          title: 'Sales Performance',
          curveType: 'function',
          legend: { position: 'bottom' }
        };

        var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

        chart.draw(data, options);
      }
  // end earning overview

  // start footer

  const getyear = document.getElementById('getyear');
  const getfullyear = new Date().getFullYear();
  getyear.textContent = getfullyear;
  
  // end footer


  //javascript area
  // 12FT

