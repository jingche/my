$(function(){
    //数据，实际情况是从后台获取的，格式json
      var data = [{"Ower":"EYUAMIA ","Started date":" 2017/08/09","Finished date":"2017/08/12","Used Days":"7 ","Category":"Improvement", "Description":"[NCMAIN repo][test-rbsnc project]: make UpgradeWithCpriBreakTest choose test focus UP as its upToState"
},{"Ower":"EYUAIA ","Started date":" 2017/08/06","Finished date":"2017/08/11","Used Days":"5","Category":"Bug", "Description":"[NCMAIN repo][test-rbsnc project]: make UpgradeWithCpriBreakTest choose test focus UP as its upToState"
},{"Ower":"EYUAMIA ","Started date":" 2017/08/09","Finished date":"2017/08/12","Used Days":"7 ","Category":"Improvement", "Description":"[NCMAIN repo][test-rbsnc project]: make UpgradeWithCpriBreakTest choose test focus UP as its upToState"
},{"Ower":"EYUAMIA ","Started date":" 2017/08/09","Finished date":"2017/08/12","Used Days":"4 ","Category":"Improvement", "Description":"[NCMAIN repo][test-rbsnc project]: make UpgradeWithCpriBreakTest choose test focus UP as its upToState"
},{"Ower":"EYUAMIA ","Started date":" 2017/08/09","Finished date":"2017/08/12","Used Days":"8 ","Category":"Improvement", "Description":"[NCMAIN repo][test-rbsnc project]: make UpgradeWithCpriBreakTest choose test focus UP as its upToState"
},{"Ower":"EYUAMIA ","Started date":" 2017/08/09","Finished date":"2017/08/12","Used Days":"7 ","Category":"Improvement", "Description":"sv4 jcat improvement#1382593"
},{"Ower":"EYUAMIA ","Started date":" 2017/08/09","Finished date":"2017/08/12","Used Days":"10","Category":"Improvement", "Description":"[NCMAIN repo][test-rbsnc project]: make UpgradeWithCpriBreakTest choose test focus UP as its upToState"
},{"Ower":"EYUAMIA ","Started date":" 2017/08/09","Finished date":"2017/08/12","Used Days":"7 ","Category":"Improvement", "Description":"[NCMAIN repo][test-rbsnc project]: make UpgradeWithCpriBreakTest choose test focus UP as its upToState"
},{"Ower":"EYUAMIA ","Started date":" 2017/08/09","Finished date":"2017/08/12","Used Days":"12 ","Category":"Improvement", "Description":"[NCMAIN repo][test-rbsnc project]: make UpgradeWithCpriBreakTest choose test focus UP as its upToState"
},{"Ower":"EYUAMIA ","Started date":" 2017/08/09","Finished date":"2017/08/12","Used Days":"7 ","Category":"Improvement", "Description":"[NCMAIN repo][test-rbsnc project]: make UpgradeWithCpriBreakTest choose test focus UP as its upToState"
},{"Ower":"EYUAMIA ","Started date":" 2017/08/09","Finished date":"2017/08/12","Used Days":"8 ","Category":"Improvement", "Description":"sv4 jcat improvement#1382593 "
},{"Ower":"EYUAMIA ","Started date":" 2017/08/09","Finished date":"2017/08/12","Used Days":"7 ","Category":"Improvement", "Description":"[NCMAIN repo][test-rbsnc project]: make UpgradeWithCpriBreakTest choose test focus UP as its upToState"
},{"Ower":"EYUAMIA ","Started date":" 2017/08/09","Finished date":"2017/08/12","Used Days":"8 ","Category":"Improvement", "Description":"[NCMAIN repo][test-rbsnc project]: make UpgradeWithCpriBreakTest choose test focus UP as its upToState"
},{"Ower":"EYUAMIA ","Started date":" 2017/08/09","Finished date":"2017/08/12","Used Days":"8 ","Category":"Improvement", "Description":"[NCMAIN repo][test-rbsnc project]: make UpgradeWithCpriBreakTest choose test focus UP as its upToState"
},{"Ower":"EYUAMIA ","Started date":" 2017/08/09","Finished date":"2017/08/12","Used Days":"7 ","Category":"Improvement", "Description":"[NCMAIN repo][test-rbsnc project]: make UpgradeWithCpriBreakTest choose test focus UP as its upToState"
},{"Ower":"EYUAMIA ","Started date":" 2017/08/09","Finished date":"2017/08/12","Used Days":"7 ","Category":"Improvement", "Description":" sv4 jcat improvement#1382593"
},{"Ower":"EYUAMIA ","Started date":" 2017/08/09","Finished date":"2017/08/12","Used Days":"7 ","Category":"Improvement",  "Description":"[NCMAIN repo][test-rbsnc project]: make UpgradeWithCpriBreakTest choose test focus UP as its upToState"
},{"Ower":"EYUAMIA ","Started date":" 2017/08/09","Finished date":"2017/08/12","Used Days":"7 ","Category":"Improvement", "Description":"[NCMAIN repo][test-rbsnc project]: make UpgradeWithCpriBreakTest choose test focus UP as its upToState"
},{"Ower":"EYUAMIA ","Started date":" 2017/08/09","Finished date":"2017/08/12","Used Days":"7 ","Category":"Improvement", "Description":"[NCMAIN repo][test-rbsnc project]: make UpgradeWithCpriBreakTest choose test focus UP as its upToState"
},{"Ower":"EYUAMIA ","Started date":" 2017/08/09","Finished date":"2017/08/12","Used Days":"7 ","Category":"Improvement", "Description":" sv4 jcat improvement#1382593"
},{"Ower":"EYUAMIA ","Started date":" 2017/08/09","Finished date":"2017/08/12","Used Days":"7 ","Category":"Improvement", "Description":"[NCMAIN repo][test-rbsnc project]: make UpgradeWithCpriBreakTest choose test focus UP as its upToState"
}];
          //在指定的table里根据要求制表，第一个参数是数据第二个是表格属性具体看createTable的defaults有具体注释
         $("#tableArea").createTable(data,{
              rows:10
           });

           $("#selectpage").bind("change",function(){
            var r = parseInt($(this).val());
             if($(this).val()=="All"){
              r=data.length;
             }
            $("#tableArea").createTable(data,{
              rows : r
            });
          });

          $("#inputNumber").bind("input",function(){
            var  r=parseInt($("#selectpage").val());
              if($("#selectpage").val()=="All"){
               r= data.length ;
              }
            var value = $(this).val();
            var temp = [];
            for(var i = 0;i < data.length;i++){
              for(x in data[i]){
                if(data[i][x].indexOf(value) > -1){
                  temp.push(data[i]);
                  break;
                }
              }
            }
            $("#tableArea").createTable(temp,{
              rows : r
            });
        });

});
$(function(){
       $("#time1").bind("blur",function(){
           calDays($(this).val(), $("#time2").val(),"time3");
       });
       $("#time2").bind("blur",function(){
           calDays($("#time1").val(),$(this).val(),"time3");
       });
       $("#editdate1").bind("blur",function(){
           calDays($(this).val(),$("#editdate2").val(), "editdate3");
       });
       $("#editdate2").bind("blur",function(){
           calDays($("#editdate1").val(),$(this).val(),"editdate3");
       });
       $("#time3").bind("click blur",function(){
           calDays($("#time1").val(),$("#time2").val(),"time3");
       });
       $("#editdate3").bind("click blur",function(){
           calDays($("#editdate1").val(),$("#editdate2").val(),"editdate3");
       });

});
$(function(){
     $("#sureAdd").bind("click",function(){
          $("#addError").text("").hide();
          //$("#editdate3").trigger(" blur");
          var $inputs =$("#addGroup").find("input");
          if($inputs[0].value== ""){
            showError("Owner can not be null !");
            return false;
          }
          else if($inputs[1].value== ""){
            showError(" Started date can not be null !");
            return false;
          }
         else  if($inputs[3].value== ""){
            showError(" Used Days can not be null !");
            return false;
          }

          else if($inputs[4].value== ""){
            showError(" Description can not be null !");
            return false;
          }


        //  验证完后ajax,最后把$("#cancelButton").click(),写入ajax的success中
         $("#cancelButton").click();
         
       //成功提交后切换模态框数据
         $("#addGroup").find("input").val("");
     });
     $("#sureEdit").bind("click",function(){
          $("#editError").text("").hide();
          $("#editdate3").trigger(" blur");
          /*var $inputs =$("#EditTable").find("input");
          if($inputs[0].value== ""){
            showError("Eriref can not be null !");
            return false;
          }
          else if($inputs[1].value== ""){
            showError("Registerded by can not be null !");
            return false;
          }
         else  if($inputs[2].value== ""){
            showError("Registerded date can not be null !");
            return false;
          }
          else if($inputs[4].value== ""){
            showError(" Turnaround Time can not be null !");
            return false;
          }
          else if($inputs[7].value== ""){
            showError(" Heading can not be null !");
            return false;
          }*/

        //验证完后ajax,最后把$("#cancelButton").click(),写入ajax的success中
         $("#cancelEdit").click();
     });

});

$(function(){
         $("#changeUser").bind("click",function(){
                 $(this).hide(360);
                 $("#newGroup").hide(360);
                 $("#closeEdit").show();
            $("#tableArea").bind("click",function(evt){
                 var which = evt.target;
                 var  $tr = $(which).closest("tr");
                 createEditModel($tr);
                 $("#edit").trigger("click");
            });
         });
          $("#closeEdit").bind("click",function(){
                $(this).hide(360);
                $("#newGroup").show();
                $("#changeUser").show();
                $("#tableArea").unbind("click");
          });
         function createEditModel($tr){
                var $input = $("#EditTable").find("input");
                var $tds = $tr.find("td");
                for(var i= 0;i<$tds.length;i++){
                  $($input[i]).val($tds[i].innerText);
                }
         }
});

  function showError(msg){
    $("#addError").text(msg).show();
  }
     function calDays (d1,d2,which){
       var reg=/^(\d{4})(-|\/)(\d{1,2})(-|\/)(\d{1,2})$/;
       if(reg.test(d1) && reg.test(d2)){
         reg.exec(d1);
         var td1= RegExp.$1 +"-" + RegExp.$3 + "-"+ RegExp.$5;
         reg.exec(d2);
         var td2= RegExp.$1 +"-"+ RegExp.$3 + "-"+ RegExp.$5;
         $("#"+which).val(dateDiff(td2,td1));
       }
       else if(reg.test(d1) && d2==""){
         $("#"+which).val("ongoing");
       }
     }
     function dateDiff(date1, date2) {
              var type1 = typeof date1, type2 = typeof date2;
              if (type1 == 'string')
                  date1 = stringToTime(date1);
              else if (date1.getTime)
                  date1 = date1.getTime();
              if (type2 == 'string')
                  date2 = stringToTime(date2);
              else if (date2.getTime)
                  date2 = date2.getTime();
              //alert((date1 - date2) / (1000*60*60));
              return (date1 - date2) / (1000 * 60 * 60 * 24); //结果是小时
          }
          //字符串转成Time(dateDiff)所需方法
          function stringToTime(string) {
              var f = string.split(' ', 2);
              var d = (f[0] ? f[0] : '').split('-', 3);
              var t = (f[1] ? f[1] : '').split(':', 3);
              return (new Date(
             parseInt(d[0], 10) || null,
             (parseInt(d[1], 10) || 1) - 1,
              parseInt(d[2], 10) || null,
              parseInt(t[0], 10) || null,
              parseInt(t[1], 10) || null,
              parseInt(t[2], 10) || null
              )).getTime();
          }
