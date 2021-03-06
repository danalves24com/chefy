import React from 'react';
import Footer from './Footer'
import $ from 'jquery';


var rcp
var dataLength = 0
//var initialUnit = "metric"
function report(abt) {
    const headers = new Headers()
    headers.append("Content-Type", "application/json")

    const options = {
        method: "POST",
        headers,
        mode: "cors",
        body: Intl.DateTimeFormat().resolvedOptions().timeZone
    }

fetch("https://enmlfbmjyaluo.x.pipedream.net/?src="+"&"+abt, options)
}
fetch("https://danalves24com.github.io/data/cookbook-api/api.json")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
            let repD = new URLSearchParams(window.location.search)
            report(repD)

            //console.log(data)
            rcp = data
            for (var dt in rcp[0]) {
                dataLength++
            }
            var filterTags = []
            var output
            var book = rcp[0]
            let found = 0
            let notFound = 0
            var rcps = 0
            //console.log(rcp)

            function ERRnotFound() {
                notFound += 1
                //console.log(notFound)


                if (notFound == dataLength) {
                    $("#items").html(`
<center>
<h2>Sorry... We couldn't find anything yet 🙁</h2>
<p>
More recipes coming soon, or you can add one of your own <a href="/contribute">here</a>
</p>
</center>
`)
                } else {}
            }
function match(steps, allSteps, book, r, step) {
    found+=1
    let ing = ""
    for (var s in steps) {
        allSteps += `
        <h3># ${s}: </h3> ${steps[s]}
        `
    }    
    for(var n in book[r].steps.ingredients) {
        ing += `
        <li>
            ${book[r].steps.ingredients[n]}
        </li>
        `
    }
    let tags= ``
    for(var t in book[r].tags) {
        tags += `
        <td>#${book[r].tags[t]}</td>
        `
        if(filterTags.includes(book[r].tags[t])) {

        }
        else {
            filterTags.push(book[r].tags[t])
        }
    }        
    
    $("#items").append(`

    <div class="card" style="width: auto;">
    <img class="card-img-top" src="${book[r].img}" alt="Card image cap">
    <div class"s">
    <div class="card-body">
      <h2 class="card-title">${book[r].name}</h2>
      <b>You should have everything you need</b></b> ✔️ <br>
      <a id="tags">
      ${tags} 
      </a> <br>
      <p class="card-text">
      <ul id='ings'>
        ${ing}
        </ul>
      </p>
      <a href="/share/?item=${book[r].name}" class="btn btn-success">View Recipe</a>
    </div>
    </div>
  </div>   
    `)
}
var uit = ""
$(document).ready(function () {
            console.clear()
            var url = new URLSearchParams(window.location.search);
            output = url.getAll('item');
            uit = output

            for (var r in book) {
                let resources = book[r].resources
                let ui = 0
                let missing = 0
                let itemsOfRecipe = []
                let rsc = resources                
                for (var t in output) {
                    if (resources.includes(output[t])) {
                        ui += 1
                        itemsOfRecipe.push(output[t])
                    }
                }
                //console.log
                let steps = book[r].steps.bakingSteps
                let allSteps = ``
                if (ui == resources.length) {
                    match(steps, allSteps, book, r)
                } else if (ui <= (resources.length) && ui >= (resources.length * 0.8)) {
                    let current = resources


                    let missingI = current
                    let ing = ""

                    for (var s in steps) {
                        allSteps += `
                <h3># ${s}: </h3> ${steps[s]}
                `
                    }
                    let tags = ``
                    for (var t in book[r].tags) {
                        tags += `
                <td>#${book[r].tags[t]}</td>
                `
                        if (filterTags.includes(book[r].tags[t])) {

                        } else {
                            filterTags.push(book[r].tags[t])
                        }
                    }
                    for (var n in book[r].steps.ingredients) {
                        ing += `
                <li>
                    ${book[r].steps.ingredients[n]}
                </li>
                `
                    }
                    for (var it in itemsOfRecipe) {
                        delete rsc[rsc.indexOf(itemsOfRecipe[it])]                    
                    }
                    let missing = []
                    for (var msngi in rsc) {
                        //console.warn(rsc[msngi])
                        missing.push(rsc[msngi])
                    }
                    let missingItems = `<h5>Missing Ingredients:</h5>`
                    for (var tm in missing) {
                        missingItems += `- ${missing[tm]}<br>`
                    }
                    $("#items").append(`

                    <div class="card" style="width: auto;">
                    <img class="card-img-top" src="${book[r].img}" alt="Card image cap">
                    <div class"s">
                    <div class="card-body">
                      <h2 class="card-title">${book[r].name}</h2>
                      <u>You might not have all the ingredients </u></b> ❗ <br>
                      <a id="tags">
                      ${tags} 
                      </a> <br>
                      <p class="card-text">
                      <p id="missing">      
                      ${missingItems}      
                      </p>
                      </p>
                      <a href="/share/?item=${book[r].name}" class="btn btn-success">View Recipe</a>
                    </div>
                    </div>
                  </div>


           
            `)
                }
        else {                                    
            ERRnotFound()
        }
    }
    //console.log(filterTags)
    for (var f in filterTags) {
        $("#filterO").append(`
        <option value="${filterTags[f]}">${filterTags[f]}</options>
        `)
    }
})
})
.catch(err => {
    console.log(err);    
})


$(document).ready(function(){
    $("#filter").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#items div").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });

  $(document).ready(function(){
    $("#fiButton").on("click", function() {
      var value = $(this).val().toLowerCase();
      $("#items div").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });


/**             
 */





//row row-cols-1 row-cols-md-2
function Book() {
  return (          
    <div class="wrapper">
      <div class="container" >       

        <div class="row">

            <div id="filterW">
            <div>
                <div id="filterButtons">
                    <input id="filter" list="filterO"  class="form-control" placeholder="select category.."></input>
                <br></br>                
                </div>
            </div>                  
                <datalist id="filterO">                
                </datalist> 
            </div>
        </div>
        <div id="items" class="card-columns" >
        </div>
        </div>
        <Footer />
    </div>
    
  );
}
/*
"1": {
        "name": "",
        "resources": [""],
        "tags": [],
        "img": "",
        "steps": {
            "ingredients": [""],
            "bakingSteps": {
                "step1" : "",
            }
        }
    }
*/
export default Book;
/**
 * 
 * 
 * MISSING
            <p>
            <div class="row">
            <div class="col-sm-12">            
            <div class="row">
            <div class="col-sm-5">
            <img alt="Picture not found" id="foodIMG" src="${book[r].img}"></img>    
            </div>
            <div class="col-sm-7">
            <h3>
            ${book[r].name}
            </h3>
            <u>You might not have all the ingredients </u></b> ❗ <br>
            <p id="aboutFood">          
            <a id="tags">
            ${tags} 
            </a>           
            <br>            
            <a href="/share/?item=${book[r].name}">Share/Enlarge</a> <br>
           
           
            <button class="btn btn-outline-dark" data-toggle="modal" data-target="#metricModal">Metric</button>
            <button class="btn btn-outline-dark" id='imperial' data-toggle="modal" data-target="#imperialModal">Imperial</button>     
           
           
            <p id="missing">      
            ${missingItems}      
            </p>
            </div>        
            </div>             
            <h5>Ingredients: </h5> 
            <ul id='ings'>
            ${ing}
            </ul>    
            ${allSteps}
            </p>
            </div>
            <hr>
            </div>
            </p>


    INCLUDING


 <div class="row">
    <div class="col-sm-12">
    <div class="">    
        
        <div class="row">
        <div class="col-sm-5">
        <img alt="Picture not found" id="foodIMG" src="${book[r].img}"></img>    
        </div>
        <div class="col-sm-7">
        <h3>
        ${book[r].name}
        </h3>
        <B>You should have everything you need</b></b> ✔️ <br>
        <p id="aboutFood">
        <a id="tags">
        ${tags} 
        </a> <br>
        <a href="/share/?item=${book[r].name}">Share/Enlarge</a> <br>
        <button class="btn btn-outline-dark" data-toggle="modal" data-target="#metricModal">Metric</button>
        <button class="btn btn-outline-dark" id='imperial' data-toggle="modal" data-target="#imperialModal">Imperial</button>                
        <h5>Ingredients: </h5> 
        <ul id='ings'>
        ${ing}
        </ul>
        </div>        
        </div>        
    ${allSteps}
    </p>
    </div>    
    </div>
    <hr>
    </div>


 */