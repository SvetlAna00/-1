function getRandIndex(maxlength){
  return Math.floor(Math.random()*maxlength);
}
var data;

function getCaptcha(){
  var canvas = document.getElementById('canvas');
  var pen = canvas.getContext('2d');
  var captch = Math.random().toString(36).substring(5);

  pen.font = "30px Georgia";
  pen.fillStyle = "rgba(29, 119, 155, 0.2)";
  pen.fillRect(0, 0, 400, 400);
  pen.fillStyle = "#fff";
  maxlength = captch.length;
  index1 = getRandIndex(maxLength);
  index2 = getRandIndex(maxLength);

  captch = captch.substring(0, index-1)+captch[index1].toUpperCase()+captch.substring(index1+1, maxLength);

  captch = captch.substring(0, index-1)+captch[index2].toUpperCase()+captch.substring(index2+1, maxLength);

  data = captch;
  captch = captch.split('').join(' ');
  pen.fillText(captch, 40, 40);
}

function checkIt(){
  typedData = document.getElementById('typedNum').value;
  if(typedData == data){
    document.getElementById('string').innerHTML = "Successfully";
    getCaptcha();
    document.getElementById('typedNum').value = "";
  }
  else{
    document.getElementById('string').innerHTML = "Unsuccessfully";
    getCaptcha();
  }
}