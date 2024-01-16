	


$(document).ready(function(){

	//start left sidebar section

		$('.sidebarlinks').click(function(){
			$('.sidebarlinks').removeClass('currents');
			$(this).addClass('currents');
		});
	//start right sidebar section

// start user permission

	$('.form-check-input').change(function(){
		
		if($(this).is(':checked')){
			$(this).parent().parent().find('i').addClass('fa-lock-open');
			$(this).parent().parent().find('i').removeClass('fa-lock');
		}else{
			$(this).parent().parent().find('i').removeClass('fa-lock-open');
			$(this).parent().parent().find('i').addClass('fa-lock');
		}
	});
// end user permission

	// <!-- start quick sale and customer activities analysis -->
	$("#datepicker").datepicker({
		numberOfMonths:[2,3]
	});
	// <!-- end quick sale and customer activities analysis -->

})


	//start viewer report
	 google.charts.load('current', {'packages':['corechart', 'bar']});
      google.charts.setOnLoadCallback(drawStuff);

      function drawStuff() {

        var button = document.getElementById('change-chart');
        var chartDiv = document.getElementById('chart_div');

        var data = google.visualization.arrayToDataTable([
          ['Galaxy', 'Distance', 'Brightness'],
          ['Canis Major Dwarf', 8000, 23.3],
          ['Sagittarius Dwarf', 24000, 4.5],
          ['Ursa Major II Dwarf', 30000, 14.3],
          ['Lg. Magellanic Cloud', 50000, 0.9],
          ['Bootes I', 60000, 13.1]
        ]);

        var materialOptions = {
          width: 900,
          chart: {
            title: 'Nearby galaxies',
            subtitle: 'distance on the left, brightness on the right'
          },
          series: {
            0: { axis: 'male' }, // Bind series 0 to an axis named 'distance'.
            1: { axis: 'female' } // Bind series 1 to an axis named 'brightness'.
          },
          axes: {
            y: {
              distance: {label: 'parsecs'}, // Left y-axis.
              brightness: {side: 'right', label: 'apparent magnitude'} // Right y-axis.
            }
          }
        };

        var classicOptions = {
          width: 900,
          series: {
            0: {targetAxisIndex: 0},
            1: {targetAxisIndex: 1}
          },
          title: 'Nearby galaxies - distance on the left, brightness on the right',
          vAxes: {
            // Adds titles to each axis.
            0: {title: 'parsecs'},
            1: {title: 'apparent magnitude'}
          }
        };

        function drawMaterialChart() {
          var materialChart = new google.charts.Bar(chartDiv);
          materialChart.draw(data, google.charts.Bar.convertOptions(materialOptions));
          button.innerText = 'Change to Classic';
          button.onclick = drawClassicChart;
        }

        function drawClassicChart() {
          var classicChart = new google.visualization.ColumnChart(chartDiv);
          classicChart.draw(data, classicOptions);
          button.innerText = 'Change to Material';
          button.onclick = drawMaterialChart;
        }



        drawMaterialChart();
    };

      //end viewer report

    //start sale analysis
    const getchart = document.getElementById('mychart');
    new Chart(getchart, {
 		 type: 'doughnut',
  		data:  {
  		labels: ['cash','visa','mpu','mobile banking'],
  		datasets: [{
        	data: [35, 15 ,30, 20]}
        ]}
	});
	//end sale analysis

// javascript area
// start footer
	const getyear = document.getElementById('getyear');
	const getfullyear = new Date().getFullYear();

	getyear.textContent = getfullyear 
// end footer
	// 15GC

	


