function concat(previous_text, new_text){
  if(exists(new_text)){
    if(exists(previous_text))
      previous_text += " ";
    previous_text += new_text;
  }
  return previous_text;
}

function findByAttribute(array, attr, value) {

  log("00", value );

  if(array != undefined){

    if(Array.isArray(array)){
      for(let i = 0; i < array.length; i += 1) {
        if(array[i][attr] === value) {
          return i;
        }
      }
    }else{
      for (let key of Object.keys(array)) {

        log("01", array[key] );

        if(array[key][attr] === value) {

          log("02", array[key][attr] );

          return key;
        }
      }
    }


  }else{
    return undefined;
  }
}

function log(string, object = undefined){
  let print = "";
  if(object){
    print = string + " : " + JSON.stringify(object);
  }else{
    print = string;
  }
  console.log(print);
  return print;
}

function merge(o1, o2){
  let merged_object = {};
  Object.assign(merged_object, o1, o2);
  return merged_object;
}

function getNamesFromIds(array, ids){
  let names = [];
  if(ids instanceof Array){
    for (let id of ids) {
      let name = getNameFromId(array, id);
      if(name){
        names.push(name);
      }
    }
  }else{
    let name = getNameFromId(array, ids);
    if(name) {
      names.push(name);
    }
  }
  return names;
}

function getNameFromId(array, id){
  let element = array.find(function (d) {
    return d.id == id;
  });
  if(element){
    return to_s(element);
  }else{
    return undefined;
  }
}

function getIdFromName(array, name){
  let element = array.find(function (d) {
    return to_s(d).toLowerCase() === name.toLowerCase();
  });
  if(element){
    return element.id
  }else{
    return undefined
  }
}

function isInteger(value){
   return value==parseInt(value);
}

function getIdByValue(array, value){
  if(value==parseInt(value)){
    // value is an ID
    return parseInt(value)
  }else{
    // value is a string
    value = value.replace(/"/g, '');
    return getIdFromName(array, value)
  }
}

function surroundWithQuotesIfNecessary(value){
  log("surroud if necessary", value);
  if(isString(value) && value.indexOf(' ')>0){
    return "\"" + value + "\""
  }else{
    return value
  }
}

function isString(value){
  return (typeof value === 'string' || value instanceof String);
}

function exists(value){
  if( value != undefined && (value > 0 || value.length > 0 || typeof value === "boolean" || typeof value === "object") ){
    return true;
  }else{
    return false;
  }
}

function removeBlankAttributes(object){

  log("start", object);

  let obj = Object.assign({}, object);
  Object.keys(obj).forEach(key => ((obj[key]!==false && !obj[key]) || JSON.stringify(obj[key])===JSON.stringify({}) ) && delete obj[key]);

  log("removeBlankAttributes", obj);

  return obj;
}

function convertToBoolean(value){

  log('convertToBoolean', value);

  if (isString(value)){
    value = value.toLowerCase();
  }
  return (value != 'false' && value != '0' && value != 'no' && value!==false);
}

function getSelectedValues(select) {
  var result = [];
  var options = select && select.options;
  var opt;

  for (var i=0, iLen=options.length; i<iLen; i++) {
    opt = options[i];

    if (opt.selected) {
      result.push(opt.value || opt.text);
    }
  }
  return result;
}

function insertBefore(el, referenceNode) {
  referenceNode.parentNode.insertBefore(el, referenceNode);
}

function last_of(array){
  return array[array.length - 1];
}
