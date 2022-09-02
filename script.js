var l1=label("label","for","fn","firstname");
var br1=linebreaker("br");
var I1=inputelement("input","type","text","id","fn");
var br2=linebreaker("br");
var l2=label("label","for","mn","middlename");
var br3=linebreaker("br");
var I2=inputelement("input","type","text","id","mn");
var br4=linebreaker("br");
var l3=label("label","for","ln","lastname");
var br5=linebreaker("br");
var I3=inputelement("input","type","text","id","ln");
var br6=linebreaker("br");
var l4=label("label","for","em","email");
var br7=linebreaker("br");
var I4=inputelement("input","type","text","id","em");
var br8=linebreaker("br");
var l5=label("label","for","ct","contact");
var br9=linebreaker("br");
var I5=inputelement("input","type","text","id","ct");
var br10=linebreaker("br");
document.body.append(l1,br1,I1,br2,l2,br3,I2,br4,l3,br5,I3,br6,l4,br7,I4,br8,l5,br9,I5,br10);




function label(tagname,attrname,attrvalue,content){
    var ele=document.createElement(tagname);
     ele.setAttribute(attrname,attrvalue);
     ele.innerHTML=content;
     return ele;
    }
    function linebreaker(element){
    var ele=document.createElement(element);
    return ele;
    }
    function inputelement(tagname,attrname,attrvalue,attrname1,attrvalue1){
    var ele=document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.setAttribute(attrname1,attrvalue1);
    return ele;
    }
