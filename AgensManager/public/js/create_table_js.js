    var colNo = $(".col_no");
    var trLth;
    $(".add").click(function(e){
    trLth = $("#column tr").length;
    console.log(trLth);
    e.preventDefault();
    $("#column").append("<tr><td class=\"column\"><label for=\"column\" class=\"col_no\">"+trLth+". "+"</label><input type=\"text\" name=\"\" /></td><td><select name=\"\" class=\"type\"><option value=\"SERIAL\">SERIAL</option></select><select name=\"\" class=\"array\"><option value=\"\"></option><option value=\"[]\">[]</option></select></td><td><input type=\"text\" name=\"\" class=\"length\"/></td><td><input type=\"checkbox\" name=\"\" class=\"not_null\"/></td><td><input type=\"checkbox\" name=\"\" class=\"u_key\"/></td><td><input type=\"checkbox\" name=\"\" class=\"p_key\"/></td><td><input type=\"text\" name=\"\" class=\"default\"/></td><td><input type=\"text\" name=\"\" class=\"comment\"/></td><td><button class=\"remove button\">remove</button></td></tr>");
    });
    $("#column").on("click", ".remove", function(e){
    e.preventDefault();
    $(this).parent().parent().remove();
    trLth = $("#column tr").length-1;
    for(var i = 1 ; i <= trLth ; i++){
    $(".col_no").eq(i-1).text(i+". ");
    }
    console.log(trLth);
    });