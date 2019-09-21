

function insert (num){
    document.form.textview.value = document.form.textview.value+num;
    }
    
    function equal (){
        var exp = document.form.textview.value;
        if(exp){
        document.form.textview.value = eval(exp)
        }
    
    }
    
    function c(){
        document.form.textview.value = "";
    }
    
    function back (){
        var exp = document.form.textview.value;
        document.form.textview.value=exp.substring(0,exp.length-1);
    }
    function log(){
        var exp = document.form.textview.value;
        document.form.textview.value = Math.log10(exp);
    }
    function sin (){
        var exp = document.form.textview.value;
        document.form.textview.value = Math.sin(exp *  Math.PI/180);
    }

    function cos(){
        var exp = document.form.textview.value;
        document.form.textview.value = Math.cos(exp*Math.PI);
    }

    function tan(){
        var exp = document.form.textview.value;
        document.form.textview.value = Math.tan(exp * Math.PI/180);
    }

    function sroot(){
        var exp = document.form.textview.value;
        document.form.textview.value = Math.sqrt(exp);
    }

   
    function perc(){
        var exp = document.form.textview.value;
        document.form.textview.value = Math.round((exp / exp) * 100)
    }



    function exit(){
        var exp = document.form.textview.value;
        document.form.textview.value = window.close(exp);
    }
    