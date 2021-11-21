let textbox = document.getElementById("textbox");



textbox.addEventListener('input',function(){
    var text = this.value;
    // console.log(text);
    let char = text.length;
    document.getElementById("char").innerHTML=char;
    text=text.trim();//remove starting and last space
    let arr = text.split(' ');
    let cleanLisst = arr.filter((ele)=>{
        return ele!="";//remove space b/w  array;
    });
    document.getElementById('word').innerHTML=cleanLisst.length;
});