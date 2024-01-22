previsão1 = "";

Webcam.set({
    width:350,
    height:300,
imageFormat: 'png',
pngQuality: 90
});
camera = document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot(){
Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML = 
    '<img id="captured_image" src="' + data_uri + '"/>';
});
}
console.log('ml5 version: ', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/3_9u3f74B/model.json', modelLoaded);
function modelLoaded(){
console.log("Modelo Carregado!!!");
}
function check(){
    img = document.getElementById("captured_image");
    classifier.classify(img, gotResult);
   }

   function gotResult(error, results){
   if (error){
   console.log(error);
   }
   else{
   console.log(results);
   document.getElementById("status").innerHTML = results[0].label;
   prediction_1 = results[0].label;

   if (results[0].label == "mascara"){
    document.getElementById("update_emoji").innerHTML = "&#128567;"
    }
    if (results[0].label == "sem mascara"){
        document.getElementById("update_emoji").innerHTML = "&#128528;"
        }}}
//crie seu modelo e armazene-o na var classifier var

//defina a função modelLoaded

//defina função check()


//defina a função gotResult(error,results)