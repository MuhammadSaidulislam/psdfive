function crossProduct(){
    //value of A vector
    ax =parseInt(document.getElementById("ax").value);
    ay = parseInt(document.getElementById("ay").value);
    az = parseInt(document.getElementById("az").value);

    //value of B vector
    bx =parseInt(document.getElementById("bx").value);
    by = parseInt(document.getElementById("by").value);
    bz = parseInt(document.getElementById("bz").value);

    //calculation
    cx = (ay*bz) - (az*by);
    cy = (az*bx) - (ax*bz);
    cz = (ax*by) - (ay*bx);

//    console.log(ax+ " "+ay+" "+az+" ");
//    console.log(bx+ " "+by+" "+bz+" ");
//    console.log(cx+ " "+cy+" "+cz+" ");
    document.getElementById("cx").innerHTML = cx;
    document.getElementById("cy").innerHTML = cy;
    document.getElementById("cz").innerHTML = cz;

}