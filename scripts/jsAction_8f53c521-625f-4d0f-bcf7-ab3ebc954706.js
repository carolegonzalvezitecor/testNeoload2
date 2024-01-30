filterInt = function (value) {
  if (/^(-|\+)?(\d+|Infinity)$/.test(value))
    return Number(value);
  return NaN;
}

var position = new Array();

// Store the position of each figure

// 1st line 
if (context.variableManager.getValue("ch00") != "empty") {
    position[filterInt(context.variableManager.getValue("ch00"))]="0,0";
}
if (context.variableManager.getValue("ch01")!= "empty") {
    position[filterInt(context.variableManager.getValue("ch01"))]="0,1";
}
if (context.variableManager.getValue("ch02")!= "empty") {
    position[filterInt(context.variableManager.getValue("ch02"))]="0,2";
}
if (context.variableManager.getValue("ch03")!= "empty") {
    position[filterInt(context.variableManager.getValue("ch03"))]="0,3";
}

// 2sd line 
if (context.variableManager.getValue("ch10")!= "empty") {
    position[filterInt(context.variableManager.getValue("ch10"))]="1,0";
}
if (context.variableManager.getValue("ch11")!= "empty") {
    position[filterInt(context.variableManager.getValue("ch11"))]="1,1";
}
if (context.variableManager.getValue("ch12")!= "empty") {
    position[filterInt(context.variableManager.getValue("ch12"))]="1,2";
}
if (context.variableManager.getValue("ch13")!= "empty") {
    position[filterInt(context.variableManager.getValue("ch13"))]="1,3";
}

// 3rd line 
if (context.variableManager.getValue("ch20")!= "empty") {
    position[filterInt(context.variableManager.getValue("ch20"))]="2,0";
}
if (context.variableManager.getValue("ch21")!= "empty") {
    position[filterInt(context.variableManager.getValue("ch21"))]="2,1";
}
if (context.variableManager.getValue("ch22")!= "empty") {
    position[filterInt(context.variableManager.getValue("ch22"))]="2,2";
}
if (context.variableManager.getValue("ch23")!= "empty") {
    position[filterInt(context.variableManager.getValue("ch23"))]="2,3";
}

// Inject the computed value in a runtime variable
//context.variableManager.setValue("computedPassword",concat(position[0],position[2],position[2],position[0],position[1],position[4]));
context.variableManager.setValue("computedPassword",position[0]+position[2]+position[2]+position[0]+position[1]+position[4])

//var computedValue = myLibraryFunction(myVar);
logger.debug("ComputedValue="+context.variableManager.getValue("computedPassword"));
