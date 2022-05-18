var dog= 0;
var cow= 0;
var cat= 0;
var lion= 0;

function startclassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/xKks-yek6/model.json",modelReady)
    
}
function modelReady(){
    classifier.classify(gotResult)
}
function gotResult(error,result)
    if(error){
        console.log(error);
    }
    else{
        console.log(result)
        random_number_r=Math.floor(Math.random()* 255)+1
        random_number_g=Math.floor(Math.random()* 255)+1
        random_number_b=Math.floor(Math.random()* 255)+1


        document.getElementById("result_label").innerHTML=result[0].label
        document.getElementById("result_confidence").innerHTML=result[0].confidence

        document.getElementById("result_label").style.color="rgb("+random_number_r +","+ random_number_g +","+ random_number_b +")"
        document.getElementById("result_confidence").style.color="rgb("+random_number_r +","+ random_number_g +","+ random_number_b +")"

        img=document.getElementById("cat")
            if(result[0].label=="cat"){
                img.src='cat.jpg'
            }
        
        img1=document.getElementById("cow")
        if(result[0].label=="cow"){
            img1.src='cow.jpg'
        }
    }
        img2=document.getElementById("dog")
        if(result[0].label=="dog")
            img2.src='dog.jpg'
        
        
        img3=document.getElementById("lion")
        if(result[0].label=="lion"){
            img3.src='lion.jpg'
        }

        