Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
    });
    camera=document.getElementById("camera");
    Webcam.attach('#camera')
    function capture_image(){
        Webcam.snap(function(data_uri){
    document.getElementById("snap").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
    });}
    console.log("ml5 version",ml5.version);
    classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/1mUVksWfP/model.json",modelLoaded);
    function modelLoaded(){
    console.log("Model Loaded !!");
    }
    function predict(){
        img=document.getElementById("captured_image");
        classifier.classify(img,gotResult);
    }
    function gotResult(error,results){
        if(error){
            console.error(error);
        }
        else {
            console.log(results)
            document.getElementById("result_name_1").innerHTML=results[0].label;
            document.getElementById("result_name_2").innerHTML=results[1].label;
            prediction_1=results[0].label;
            prediction_2=results[1].label;
            speak();
            if(results[0].label=="Thumbs Up!"){
                document.getElementById("update_hand_1").innerHTML;
            }
            if(results[0].label=="Victory!"){
                document.getElementById("update_hand_1").innerHTML;
            }
            if(results[0].label=="Amazing"){
                document.getElementById("update_hand_1").innerHTML;
            }
            if(results[1].label=="Thumbs Up!"){
                document.getElementById("update_hand_2").innerHTML;
            }
            if(results[1].label=="Victory!"){
                document.getElementById("update_hand_2").innerHTML;
            }
            if(results[1].label=="Amazing"){
                document.getElementById("update_hand_2").innerHTML;
            }                
        }
    }
    function speak() {
        var synth=window.speechSynthesis;
    speak_data_1="The First Prediction is"+prediction_1;
    speak_data_2="The Second Prediction is"+prediction_2;
    var utterThis=new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
    utterThis.rate=0.5;
    synth.speak(utterThis);
    }