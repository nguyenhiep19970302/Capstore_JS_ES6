const getEle = (id) => document.getElementById(id);
class Validation {
    checkOtion = (idSel, errId, mess) => {
        if (getEle(idSel).selectedIndex !== 0) {
            getEle(errId).innerHTML = "";
            getEle(errId).style.display = "none";
            return true;
        }
        getEle(errId).innerHTML = mess;
        getEle(errId).style.display = "block";
        return false;
    }

    checkNull = (val, errId, mess) => {
        if (val === "") {
            getEle(errId).innerHTML = mess;
            getEle(errId).style.display = "block";
            return false;
        }
        getEle(errId).innerHTML = "";
        getEle(errId).style.display = "none";
        return true;
    }
}

export default Validation;
