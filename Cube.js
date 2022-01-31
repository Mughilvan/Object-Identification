Status="";
function setup(){ 
    object_Detector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects";
}
function gotResults(error,results){
    if(error){
        console.error(error);
    }
    console.log(results);
}
function draw(){
    if(Status!=""){
        objectDetector.detect(gotResult);
        for(i=0;i<objects.length;i++){
            document.getElementById("status").innerHTML="status : objects detected";
            fill("#ff0000");
            percent=floor(objects[i].confidence*100);
            text(objects[i].label+" "+percent+"%",objects[i].x+15,objects[i].y+15);
            noFill();
            stroke("#ff0000");
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
        }
    }
}
function modelLoaded(){
    console.log("Model Loaded");
    Status=true;
    object_Detector.detect(gotResults);
}