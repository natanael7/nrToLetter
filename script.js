function mDigit(test){
    let rezd = parseInt(test.slice(1, test.length))
    return rezd
}
function t4(a){
    let rezd;
    let rez1;
    let rez2;
    let rez3;
    let nr = a.toString();
    
    rez1 = "o mie " + t3(mDigit(nr))
    rez2 = "două mii " + t3(mDigit(nr))
    rez3 = t2(mDigit(nr));
    rezd = td(nr[0]) + " mii " + t3(mDigit(nr))

    if (nr[0] == "1")
        return rez1;
    else if (nr[0] == "2")
        return rez2
    else if (nr[0] == "0")
        return rez3;
    else
        return rezd;
}
function t3(a){
    let rezd;
    let rez1;
    let rez2;    
    let rez3;
    let nr = a.toString();

    rez1 = "o sută " + t2(mDigit(nr))
    rez2 = "două sute " + t2(mDigit(nr))
    rez3 = t2(mDigit(nr));
    rezd = td(nr[0]) + " sute " + t2(mDigit(nr))

    if (nr[0] == "1")
        return rez1;
    else if (nr[0] == "2")
        return rez2
    else if (nr[0] == "0")
        return rez3;
    else
        return rezd;
}
function t2(a){
    let rezd;
    let rez1;
    let rez2;  
    let rez3;  
    let nr = a.toString();

    rez1 = "zece"
    rez2 = "douăzeci și " + td(mDigit(nr))
    rez3 = td(mDigit(nr)) + "sprezece"
    rez4 = td(nr[0]) + "zeci"
    rez5 = "douăzeci"
    rez6 = td(mDigit(nr))
    rezd = td(nr[0]) + "zeci și " + td(mDigit(nr))

    if (nr[0] == "1" && nr[1] == "0")
        return rez1;
    else if (nr[0] == "2" && nr[1] == "0")
        return rez5
    else if (nr[0] == "2")
        return rez2
    else if (nr[0] == "1" && nr[1] != "0")
        return rez3;
    else if (nr[1] == "0")
        return rez4;
    else
        return rezd;
}
function td(a){
    let cifre = ["unu","doi","trei","patru","cinci","șase","șapte","opt","nouă"]
    return cifre[a-1];
}
function t(a){
    let rez = "st";
    switch (a.toString().length) {
        case 1:
            rez = td(a)
            break;
        case 2:
            rez = t2(a)
            break;
        case 3:
            rez = t3(a)
            break;
        case 4:
            rez = t4(a)
            break;
                        
    }
    rez = rez.replace("undefinedzeci și undefined","")
    rez = rez.replace("undefinedsprezece","unu")
    rez = rez.replace("zeci și undefined","")

    return rez;
}
