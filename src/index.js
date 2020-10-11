module.exports = function check(str, bracketsConfig)   {
  let newStr = [];
  str = str.replace(/\s/g, '')
  if (str.length % 2 != 0) {
    return false;
  }

  for(let i = 0; i < str.length; i++) {


    for(let j = 0; j < bracketsConfig.length; j++) {
      
      if (bracketsConfig[j][0] != bracketsConfig[j][1]) { 
        if(str[i] == bracketsConfig[j][0]) {   // проходим строку слева
          newStr.push(str[i]);                 // если ок - добавляем в нашу строку
        } else if(str[i] == bracketsConfig[j][1] && newStr[newStr.length-1] == bracketsConfig[j][0]) {     // проходим строку справа и проверяем симметричность
            newStr.pop();  // если ок - удаляем симметричный элемент из нашей строки
        }
      }

      else if (bracketsConfig[j][0] == bracketsConfig[j][1]) { // блок для проверки кейсов с несимметричной вложенностью
        if(str[i] == bracketsConfig[j][0]) {
          if (!newStr.length || newStr[newStr.length-1] != bracketsConfig[j][0]) {
            newStr.push(str[i]);
          } else if(newStr[newStr.length-1] == bracketsConfig[j][0]) {
            newStr.pop();
          }
        }
      }
      
    }


  }
  
  // console.log(newStr)
  if(newStr.length) return false;

  return true;
};