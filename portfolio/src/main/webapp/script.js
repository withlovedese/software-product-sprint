// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random greeting to the page.
 */
function addRandomGreeting() {
  const greetings = ['When we hit our lowest point, we are open to the greatest change.', 'Be the best you can be!', 'Light can be found in the darkest of places if only one remembers to turn on the light ;)', 'When you want something, all the universe conspires to help you achieve it'];

  // Pick a random greeting.
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];

  // Add it to the page.
  const greetingContainer = document.getElementById('greeting-container');
  greetingContainer.innerText = greeting;
}

//gets content from /data url
async function getCommentUsingAsyncAwait(){
    const response = await fetch('/data');
    const comments = await response.json();
    
    // Add it to the page.
    const commentContainer = document.getElementById('comment-container');
    commentContainer.innerText = comments;
}

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

/** Creates a chart and adds it to the page. */
function drawChart() {
  const data = new google.visualization.DataTable();
  data.addColumn('string', 'Qualities');
  data.addColumn('number', 'Percent');
        data.addRows([
          ['Optimism', 30],
          ['Kindness', 20],
          ['Resilience', 15]
        ]);

  const options = {
    'title': 'My Personality',
    'width':500,
    'height':400
  };

  const chart = new google.visualization.PieChart(
      document.getElementById('chart-container'));
  chart.draw(data, options);
}







  
