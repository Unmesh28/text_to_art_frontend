//document.getElementById('spinner').style.display = 'none';

function generateImageVideo() {
    console.log("Called..........")
    document.getElementById("Button").disabled = true;
    
    //document.getElementById('spinner').style.display = 'block';

    // var x = document.getElementById("myForm").elements.length;
    // console.log(x)

    var name = document.getElementById("name").value;
    var prompts = document.getElementById("prompts").value;
    sessionStorage.setItem("prompts", prompts);
    sessionStorage.setItem("name", name);
    var style = document.getElementById("style").value;
    sessionStorage.setItem("style", style);
    
    console.log(prompts);
    window.open("loader_page.html", "_self");

    // var obj = new Object();
    // //obj.name = name;
    // obj.prompts = prompts;
    // obj.style = style;
    // obj.make_video = true;
    // var jsonString= JSON.stringify(obj);
    // console.log(jsonString)

    

    // $.ajax({
    //     url: 'http://e106-3-110-60-245.ngrok.io/generate',
    //     type: "POST",
    //     data: jsonString,
    //     dataType: "json",
    //     contentType: "application/x-www-form-urlencoded",
    //     success: function (data) {
    //         console.log(data);
    //         document.getElementById('spinner').style.display = 'none';
    //     },
    //     error: function (error) {
    //         console.log(`Error ${error}`);
    //         document.getElementById('spinner').style.display = 'none';
    //     }
    // });
}
