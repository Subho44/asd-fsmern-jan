//if-else

function cp(score) {
    if(score >= 50) {
        return "pass"
    } else {
        return "Fail";
    }
}
//if-else if-else
    function grade(marks) {
    if(marks >= 90) {
        return "A grade"
    } else if(marks >=70) {
        return "B grade";
    }
    else {
        return "C grade";
    }
}
//ternary operator

function getresult(score) {
    return (score >= 50) ? "Pass" : "Fail";
}

module.exports = {cp,grade,getresult};