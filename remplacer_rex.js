function myReplace(str, before, after) {

    let tkt = str.slice();
    
    let rep = new RegExp(before);
    let trick = /^[A-Z]/;
    if(trick.test(before)){
    
    after = after[0].toUpperCase() + after.substring(1);
    }else{
    after = after[0].toLowerCase() + after.substring(1);
    }
    return str.replace(before,after);
    }
    
    console.log(myReplace("His name is Tom", "Tom", "john"));