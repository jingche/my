$(function(){
    //数据，实际情况是从后台获取的，格式json
    var data = [{"Date":" 2017/08/09", "Passed":"7 ","Failed TR":"4", " Failed Environment":"8", "Failed Artifact":"4", "Inconclusive":"1", "Comment":"[NCMAIN repo][test-rbsnc project]: make UpgradeWithCpriBreakTest choose test focus UP as its upToState"
,"G1 LTE UP":" CXP9024418_6-R24A52","G2 MSME UP":"CXP9024418_6-R24A52","Effectiveness":"20%","Stability":"10%"},{"date":" 2017/08/09", "Passed":"7 ","Failed TR":"4", " Failed Environment":"8", "Failed Artifact":"4", "Inconclusive":"1", "Comment":"[NCMAIN repo][test-rbsnc project]: make UpgradeWithCpriBreakTest choose test focus UP as its upToState"
,"G1 LTE UP":" CXP9024418_6-R24A52","G2 MSME UP":"CXP9024418_6-R24A52","Effectiveness":"20%","Stability":"10%"},{"date":" 2017/08/09", "Passed":"7 ","Failed TR":"4", " Failed Environment":"8", "Failed Artifact":"4", "Inconclusive":"1", "Comment":"[NCMAIN repo][test-rbsnc project]: make UpgradeWithCpriBreakTest choose test focus UP as its upToState"
,"G1 LTE UP":" CXP9024418_6-R24A52","G2 MSME UP":"CXP9024418_6-R24A52","Effectiveness":"20%","Stability":"10%"},{"date":" 2017/08/09", "Passed":"7 ","Failed TR":"4", " Failed Environment":"8", "Failed Artifact":"4", "Inconclusive":"1", "Comment":"[NCMAIN repo][test-rbsnc project]: make UpgradeWithCpriBreakTest choose test focus UP as its upToState"
,"G1 LTE UP":" CXP9024418_6-R24A52","G2 MSME UP":"CXP9024418_6-R24A52","Effectiveness":"20%","Stability":"10%"},{"date":" 2017/08/09", "Passed":"7 ","Failed TR":"4", " Failed Environment":"8", "Failed Artifact":"4", "Inconclusive":"1", "Comment":"[NCMAIN repo][test-rbsnc project]: make UpgradeWithCpriBreakTest choose test focus UP as its upToState"
,"G1 LTE UP":" CXP9024418_6-R24A52","G2 MSME UP":"CXP9024418_6-R24A52","Effectiveness":"20%","Stability":"10%"},{"date":" 2017/08/09", "Passed":"7 ","Failed TR":"4", " Failed Environment":"8", "Failed Artifact":"4", "Inconclusive":"1", "Comment":"[NCMAIN repo][test-rbsnc project]: make UpgradeWithCpriBreakTest choose test focus UP as its upToState sdh jhdj jhdj jshwe jhfjjhkk hejh"
,"G1 LTE UP":" CXP9024418_6-R24A52","G2 MSME UP":"CXP9024418_6-R24A52","Effectiveness":"20%","Stability":"10%"}, {"date":" 2017/08/09", "Passed":"7 ","Failed TR":"4", " Failed Environment":"8", "Failed Artifact":"4", "Inconclusive":"1", "Comment":"[NCMAIN repo][test-rbsnc project]: make UpgradeWithCpriBreakTest choose test focus UP as its upToState"
,"G1 LTE UP":" CXP9024418_6-R24A52","G2 MSME UP":"CXP9024418_6-R24A52","Effectiveness":"20%","Stability":"10%"},{"date":" 2017/08/09", "Passed":"7 ","Failed TR":"4", " Failed Environment":"8", "Failed Artifact":"4", "Inconclusive":"1", "Comment":"[NCMAIN repo][test-rbsnc project]: make UpgradeWithCpriBreakTest choose test focus UP as its upToState"
,"G1 LTE UP":" CXP9024418_6-R24A52","G2 MSME UP":"CXP9024418_6-R24A52","Effectiveness":"20%","Stability":"10%"},{"date":" 2017/08/09", "Passed":"7 ","Failed TR":"4", " Failed Environment":"8", "Failed Artifact":"4", "Inconclusive":"1", "Comment":"[NCMAIN repo][test-rbsnc project]: make UpgradeWithCpriBreakTest choose test focus UP as its upToState"
,"G1 LTE UP":" CXP9024418_6-R24A52","G2 MSME UP":"CXP9024418_6-R24A52","Effectiveness":"20%","Stability":"10%"},{"date":" 2017/08/09", "Passed":"7 ","Failed TR":"4", " Failed Environment":"8", "Failed Artifact":"4", "Inconclusive":"1", "Comment":"[NCMAIN repo][test-rbsnc project]: make UpgradeWithCpriBreakTest choose test focus UP as its upToState"
,"G1 LTE UP":" CXP9024418_6-R24A52","G2 MSME UP":"CXP9024418_6-R24A52","Effectiveness":"20%","Stability":"10%"},{"date":" 2017/08/09", "Passed":"7 ","Failed TR":"4", " Failed Environment":"8", "Failed Artifact":"4", "Inconclusive":"1", "Comment":"[NCMAIN repo][test-rbsnc project]: make UpgradeWithCpriBreakTest choose test focus UP as its upToState"
,"G1 LTE UP":" CXP9024418_6-R24A52","G2 MSME UP":"CXP9024418_6-R24A52","Effectiveness":"20%","Stability":"10%"},{"date":" 2017/08/09", "Passed":"7 ","Failed TR":"4", " Failed Environment":"8", "Failed Artifact":"4", "Inconclusive":"1", "Comment":"[NCMAIN repo][test-rbsnc project]: make UpgradeWithCpriBreakTest choose test focus UP as its upToState"
,"G1 LTE UP":" CXP9024418_6-R24A52","G2 MSME UP":"CXP9024418_6-R24A52","Effectiveness":"20%","Stability":"10%"},{"date":" 2017/08/09", "Passed":"7 ","Failed TR":"4", " Failed Environment":"8", "Failed Artifact":"4", "Inconclusive":"1", "Comment":"[NCMAIN repo][test-rbsnc project]: make UpgradeWithCpriBreakTest choose test focus UP as its upToState"
,"G1 LTE UP":" CXP9024418_6-R24A52","G2 MSME UP":"CXP9024418_6-R24A52","Effectiveness":"20%","Stability":"10%"},{"date":" 2017/08/09", "Passed":"7 ","Failed TR":"4", " Failed Environment":"8", "Failed Artifact":"4", "Inconclusive":"1", "Comment":"[NCMAIN repo][test-rbsnc project]: make UpgradeWithCpriBreakTest choose test focus UP as its upToState"
,"G1 LTE UP":" CXP9024418_6-R24A52","G2 MSME UP":"CXP9024418_6-R24A52","Effectiveness":"20%","Stability":"10%"}];
          //在指定的table里根据要求制表，第一个参数是数据第二个是表格属性具体看createTable的defaults有具体注释
        // $("#tableArea").createTable(data,{
            //  rows:10
           //});
            createTable(data);
            //实现选择框下拉菜单选项被点击之后的显示的个数，其中createtable.js是写的一个图表插件，目的是形成图表，相关js有对应注释。
           $("#selectpage").bind("change",function(){
            var r = parseInt($(this).val());
             if($(this).val()=="All"){
              r=data.length;
             }
            $("#tableArea").createTable(data,{
              rows : r
            });
          });
          //实现search：处对应的筛选工作，根据选择框实现显示的对应个数。data[i]是满足条件的对应行。
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
//table默认是显示10行。
function createTable(data){
       $("#tableArea").createTable(data, {
           rows:10
       });
}
//将table上的表头值对应到add部分new test显示。
$(function(){
  $("#newGroup").bind("click",function(){
      var tableTh=$("#example thead th");
      var addTh=$("#addGroup th");
      for(var i=0;i<addTh.length;i++){
         $(addTh[i]).text($(tableTh[i]).text());
      }
  });

});
//获取四张表的data
function getData(which){
    /*
    $.ajax({
      type:"post",
      url:"",
      data:"which":which,
      dataType:"",
      success: function(data){
          createTable(data);
    }


  });
    */

    var data=[];
    switch(which){
      case "1103":
       data=[{"Date":" 2017/08/09", "Passed":"7 ","Failed TR":"4", " Failed Environment":"8", "Failed Artifact":"4", "Inconclusive":"1", "Comment":"[NCMAIN repo][test-rbsnc project]: make UpgradeWithCpriBreakTest choose test focus UP as its upToState"
 ,"G1 LTE UP":" CXP9024418_6-R24A52","G2 MSME UP":"CXP9024418_6-R24A52","Effectiveness":"20%","Stability":"10%"},{"date":" 2017/08/09", "Passed":"7 ","Failed TR":"4", " Failed Environment":"8", "Failed Artifact":"4", "Inconclusive":"1", "Comment":"[NCMAIN repo][test-rbsnc project]: make UpgradeWithCpriBreakTest choose test focus UP as its upToState"
 ,"G1 LTE UP":" CXP9024418_6-R24A52","G2 MSME UP":"CXP9024418_6-R24A52","Effectiveness":"20%","Stability":"10%"},{"date":" 2017/08/09", "Passed":"7 ","Failed TR":"4", " Failed Environment":"8", "Failed Artifact":"4", "Inconclusive":"1", "Comment":"[NCMAIN repo][test-rbsnc project]: make UpgradeWithCpriBreakTest choose test focus UP as its upToState"
 ,"G1 LTE UP":" CXP9024418_6-R24A52","G2 MSME UP":"CXP9024418_6-R24A52","Effectiveness":"20%","Stability":"10%"},{"date":" 2017/08/09", "Passed":"7 ","Failed TR":"4", " Failed Environment":"8", "Failed Artifact":"4", "Inconclusive":"1", "Comment":"[NCMAIN repo][test-rbsnc project]: make UpgradeWithCpriBreakTest choose test focus UP as its upToState"
 ,"G1 LTE UP":" CXP9024418_6-R24A52","G2 MSME UP":"CXP9024418_6-R24A52","Effectiveness":"20%","Stability":"10%"},{"date":" 2017/08/09", "Passed":"7 ","Failed TR":"4", " Failed Environment":"8", "Failed Artifact":"4", "Inconclusive":"1", "Comment":"[NCMAIN repo][test-rbsnc project]: make UpgradeWithCpriBreakTest choose test focus UP as its upToState"
 ,"G1 LTE UP":" CXP9024418_6-R24A52","G2 MSME UP":"CXP9024418_6-R24A52","Effectiveness":"20%","Stability":"10%"},{"date":" 2017/08/09", "Passed":"7 ","Failed TR":"4", " Failed Environment":"8", "Failed Artifact":"4", "Inconclusive":"1", "Comment":"[NCMAIN repo][test-rbsnc project]: make UpgradeWithCpriBreakTest choose test focus UP as its upToState sdh jhdj jhdj jshwe jhfjjhkk hejh"
 ,"G1 LTE UP":" CXP9024418_6-R24A52","G2 MSME UP":"CXP9024418_6-R24A52","Effectiveness":"20%","Stability":"10%"}, {"date":" 2017/08/09", "Passed":"7 ","Failed TR":"4", " Failed Environment":"8", "Failed Artifact":"4", "Inconclusive":"1", "Comment":"[NCMAIN repo][test-rbsnc project]: make UpgradeWithCpriBreakTest choose test focus UP as its upToState"
 ,"G1 LTE UP":" CXP9024418_6-R24A52","G2 MSME UP":"CXP9024418_6-R24A52","Effectiveness":"20%","Stability":"10%"},{"date":" 2017/08/09", "Passed":"7 ","Failed TR":"4", " Failed Environment":"8", "Failed Artifact":"4", "Inconclusive":"1", "Comment":"[NCMAIN repo][test-rbsnc project]: make UpgradeWithCpriBreakTest choose test focus UP as its upToState"
 ,"G1 LTE UP":" CXP9024418_6-R24A52","G2 MSME UP":"CXP9024418_6-R24A52","Effectiveness":"20%","Stability":"10%"},{"date":" 2017/08/09", "Passed":"7 ","Failed TR":"4", " Failed Environment":"8", "Failed Artifact":"4", "Inconclusive":"1", "Comment":"[NCMAIN repo][test-rbsnc project]: make UpgradeWithCpriBreakTest choose test focus UP as its upToState"
 ,"G1 LTE UP":" CXP9024418_6-R24A52","G2 MSME UP":"CXP9024418_6-R24A52","Effectiveness":"20%","Stability":"10%"},{"date":" 2017/08/09", "Passed":"7 ","Failed TR":"4", " Failed Environment":"8", "Failed Artifact":"4", "Inconclusive":"1", "Comment":"[NCMAIN repo][test-rbsnc project]: make UpgradeWithCpriBreakTest choose test focus UP as its upToState"
 ,"G1 LTE UP":" CXP9024418_6-R24A52","G2 MSME UP":"CXP9024418_6-R24A52","Effectiveness":"20%","Stability":"10%"},{"date":" 2017/08/09", "Passed":"7 ","Failed TR":"4", " Failed Environment":"8", "Failed Artifact":"4", "Inconclusive":"1", "Comment":"[NCMAIN repo][test-rbsnc project]: make UpgradeWithCpriBreakTest choose test focus UP as its upToState"
 ,"G1 LTE UP":" CXP9024418_6-R24A52","G2 MSME UP":"CXP9024418_6-R24A52","Effectiveness":"20%","Stability":"10%"},{"date":" 2017/08/09", "Passed":"7 ","Failed TR":"4", " Failed Environment":"8", "Failed Artifact":"4", "Inconclusive":"1", "Comment":"[NCMAIN repo][test-rbsnc project]: make UpgradeWithCpriBreakTest choose test focus UP as its upToState"
 ,"G1 LTE UP":" CXP9024418_6-R24A52","G2 MSME UP":"CXP9024418_6-R24A52","Effectiveness":"20%","Stability":"10%"},{"date":" 2017/08/09", "Passed":"7 ","Failed TR":"4", " Failed Environment":"8", "Failed Artifact":"4", "Inconclusive":"1", "Comment":"[NCMAIN repo][test-rbsnc project]: make UpgradeWithCpriBreakTest choose test focus UP as its upToState"
 ,"G1 LTE UP":" CXP9024418_6-R24A52","G2 MSME UP":"CXP9024418_6-R24A52","Effectiveness":"20%","Stability":"10%"},{"date":" 2017/08/09", "Passed":"7 ","Failed TR":"4", " Failed Environment":"8", "Failed Artifact":"4", "Inconclusive":"1", "Comment":"[NCMAIN repo][test-rbsnc project]: make UpgradeWithCpriBreakTest choose test focus UP as its upToState"
 ,"G1 LTE UP":" CXP9024418_6-R24A52","G2 MSME UP":"CXP9024418_6-R24A52","Effectiveness":"20%","Stability":"10%"}];

      break;
      case "1104":
        data=[{"Date":" 2017/08/09", "Passed":"7 ","Failed TR":"4", " Failed Environment":"8", "Failed Artifact":"4", "Inconclusive":"1", "Comment":"[NCMAIN repo][test-rbsnc project]: make UpgradeWithCpriBreakTest choose test focus UP as its upToState"
  ,"G1 LTE UP":" CXP9024418_6-R24A52","G2 LTE UP":"CXP9024418_6-R24A52","Effectiveness":"20%","Stability":"10%"},{"date":" 2017/08/09", "Passed":"7 ","Failed TR":"4", " Failed Environment":"8", "Failed Artifact":"4", "Inconclusive":"1", "Comment":"[NCMAIN repo][test-rbsnc project]: make UpgradeWithCpriBreakTest choose test focus UP as its upToState"
  ,"G1 LTE UP":" CXP9024418_6-R24A52","G2 LTE  UP":"CXP9024418_6-R24A52","Effectiveness":"20%","Stability":"10%"},{"date":" 2017/08/09", "Passed":"7 ","Failed TR":"4", " Failed Environment":"8", "Failed Artifact":"4", "Inconclusive":"1", "Comment":"[NCMAIN repo][test-rbsnc project]: make UpgradeWithCpriBreakTest choose test focus UP as its upToState"
  ,"G1 LTE UP":" CXP9024418_6-R24A52","G2 LTE UP":"CXP9024418_6-R24A52","Effectiveness":"20%","Stability":"10%"},{"date":" 2017/08/09", "Passed":"7 ","Failed TR":"4", " Failed Environment":"8", "Failed Artifact":"4", "Inconclusive":"1", "Comment":"[NCMAIN repo][test-rbsnc project]: make UpgradeWithCpriBreakTest choose test focus UP as its upToState"
  ,"G1 LTE UP":" CXP9024418_6-R24A52","G2 LTE UP":"CXP9024418_6-R24A52","Effectiveness":"20%","Stability":"10%"},{"date":" 2017/08/09", "Passed":"7 ","Failed TR":"4", " Failed Environment":"8", "Failed Artifact":"4", "Inconclusive":"1", "Comment":"[NCMAIN repo][test-rbsnc project]: make UpgradeWithCpriBreakTest choose test focus UP as its upToState"
  ,"G1 LTE UP":" CXP9024418_6-R24A52","G2 LTE UP":"CXP9024418_6-R24A52","Effectiveness":"20%","Stability":"10%"},{"date":" 2017/08/09", "Passed":"7 ","Failed TR":"4", " Failed Environment":"8", "Failed Artifact":"4", "Inconclusive":"1", "Comment":"[NCMAIN repo][test-rbsnc project]: make UpgradeWithCpriBreakTest choose test focus UP as its upToState sdh jhdj jhdj jshwe jhfjjhkk hejh"
  ,"G1 LTE UP":" CXP9024418_6-R24A52","G2 LTE UP":"CXP9024418_6-R24A52","Effectiveness":"20%","Stability":"10%"}, {"date":" 2017/08/09", "Passed":"7 ","Failed TR":"4", " Failed Environment":"8", "Failed Artifact":"4", "Inconclusive":"1", "Comment":"[NCMAIN repo][test-rbsnc project]: make UpgradeWithCpriBreakTest choose test focus UP as its upToState"
  ,"G1 LTE UP":" CXP9024418_6-R24A52","G2 LTE UP":"CXP9024418_6-R24A52","Effectiveness":"20%","Stability":"10%"},{"date":" 2017/08/09", "Passed":"7 ","Failed TR":"4", " Failed Environment":"8", "Failed Artifact":"4", "Inconclusive":"1", "Comment":"[NCMAIN repo][test-rbsnc project]: make UpgradeWithCpriBreakTest choose test focus UP as its upToState"
  ,"G1 LTE UP":" CXP9024418_6-R24A52","G2 LTE UP":"CXP9024418_6-R24A52","Effectiveness":"20%","Stability":"10%"},{"date":" 2017/08/09", "Passed":"7 ","Failed TR":"4", " Failed Environment":"8", "Failed Artifact":"4", "Inconclusive":"1", "Comment":"[NCMAIN repo][test-rbsnc project]: make UpgradeWithCpriBreakTest choose test focus UP as its upToState"
  ,"G1 LTE UP":" CXP9024418_6-R24A52","G2 LTE UP":"CXP9024418_6-R24A52","Effectiveness":"20%","Stability":"10%"},{"date":" 2017/08/09", "Passed":"7 ","Failed TR":"4", " Failed Environment":"8", "Failed Artifact":"4", "Inconclusive":"1", "Comment":"[NCMAIN repo][test-rbsnc project]: make UpgradeWithCpriBreakTest choose test focus UP as its upToState"
  ,"G1 LTE UP":" CXP9024418_6-R24A52","G2 LTE UP":"CXP9024418_6-R24A52","Effectiveness":"20%","Stability":"10%"},{"date":" 2017/08/09", "Passed":"7 ","Failed TR":"4", " Failed Environment":"8", "Failed Artifact":"4", "Inconclusive":"1", "Comment":"[NCMAIN repo][test-rbsnc project]: make UpgradeWithCpriBreakTest choose test focus UP as its upToState"
  ,"G1 LTE UP":" CXP9024418_6-R24A52","G2 LTE UP":"CXP9024418_6-R24A52","Effectiveness":"20%","Stability":"10%"},{"date":" 2017/08/09", "Passed":"7 ","Failed TR":"4", " Failed Environment":"8", "Failed Artifact":"4", "Inconclusive":"1", "Comment":"[NCMAIN repo][test-rbsnc project]: make UpgradeWithCpriBreakTest choose test focus UP as its upToState"
  ,"G1 LTE UP":" CXP9024418_6-R24A52","G2 LTE UP":"CXP9024418_6-R24A52","Effectiveness":"20%","Stability":"10%"},{"date":" 2017/08/09", "Passed":"7 ","Failed TR":"4", " Failed Environment":"8", "Failed Artifact":"4", "Inconclusive":"1", "Comment":"[NCMAIN repo][test-rbsnc project]: make UpgradeWithCpriBreakTest choose test focus UP as its upToState"
  ,"G1 LTE UP":" CXP9024418_6-R24A52","G2 LTE UP":"CXP9024418_6-R24A52","Effectiveness":"20%","Stability":"10%"},{"date":" 2017/08/09", "Passed":"7 ","Failed TR":"4", " Failed Environment":"8", "Failed Artifact":"4", "Inconclusive":"1", "Comment":"[NCMAIN repo][test-rbsnc project]: make UpgradeWithCpriBreakTest choose test focus UP as its upToState"
  ,"G1 LTE UP":" CXP9024418_6-R24A52","G2 LTE UP":"CXP9024418_6-R24A52","Effectiveness":"20%","Stability":"10%"}];

      break;
      case "1114":
      data=[{"Date":" 2017/08/09", "Passed":"7 ","Failed TR":"4", " Failed Environment":"8", "Failed Artifact":"4", "Inconclusive":"1", "Comment":"[NCMAIN repo][test-rbsnc project]: make UpgradeWithCpriBreakTest choose test focus UP as its upToState"
,"G1 LTE UP":" CXP9024418_6-R24A52","G1 WCDMA UP":"CXP9024418_6-R24A52","Effectiveness":"20%","Stability":"10%"},{"date":" 2017/08/09", "Passed":"7 ","Failed TR":"4", " Failed Environment":"8", "Failed Artifact":"4", "Inconclusive":"1", "Comment":"[NCMAIN repo][test-rbsnc project]: make UpgradeWithCpriBreakTest choose test focus UP as its upToState"
,"G1 LTE UP":" CXP9024418_6-R24A52","G1 WCDMA UP":"CXP9024418_6-R24A52","Effectiveness":"20%","Stability":"10%"},{"date":" 2017/08/09", "Passed":"7 ","Failed TR":"4", " Failed Environment":"8", "Failed Artifact":"4", "Inconclusive":"1", "Comment":"[NCMAIN repo][test-rbsnc project]: make UpgradeWithCpriBreakTest choose test focus UP as its upToState"
,"G1 LTE UP":" CXP9024418_6-R24A52","G1 WCDMA UP":"CXP9024418_6-R24A52","Effectiveness":"20%","Stability":"10%"},{"date":" 2017/08/09", "Passed":"7 ","Failed TR":"4", " Failed Environment":"8", "Failed Artifact":"4", "Inconclusive":"1", "Comment":"[NCMAIN repo][test-rbsnc project]: make UpgradeWithCpriBreakTest choose test focus UP as its upToState"
,"G1 LTE UP":" CXP9024418_6-R24A52","G1 WCDMA UP":"CXP9024418_6-R24A52","Effectiveness":"20%","Stability":"10%"},{"date":" 2017/08/09", "Passed":"7 ","Failed TR":"4", " Failed Environment":"8", "Failed Artifact":"4", "Inconclusive":"1", "Comment":"[NCMAIN repo][test-rbsnc project]: make UpgradeWithCpriBreakTest choose test focus UP as its upToState"
,"G1 LTE UP":" CXP9024418_6-R24A52","G1 WCDMA UP":"CXP9024418_6-R24A52","Effectiveness":"20%","Stability":"10%"},{"date":" 2017/08/09", "Passed":"7 ","Failed TR":"4", " Failed Environment":"8", "Failed Artifact":"4", "Inconclusive":"1", "Comment":"[NCMAIN repo][test-rbsnc project]: make UpgradeWithCpriBreakTest choose test focus UP as its upToState sdh jhdj jhdj jshwe jhfjjhkk hejh"
,"G1 LTE UP":" CXP9024418_6-R24A52","G1 WCDMA UP":"CXP9024418_6-R24A52","Effectiveness":"20%","Stability":"10%"}, {"date":" 2017/08/09", "Passed":"7 ","Failed TR":"4", " Failed Environment":"8", "Failed Artifact":"4", "Inconclusive":"1", "Comment":"[NCMAIN repo][test-rbsnc project]: make UpgradeWithCpriBreakTest choose test focus UP as its upToState"
,"G1 LTE UP":" CXP9024418_6-R24A52","G1 WCDMA UP":"CXP9024418_6-R24A52","Effectiveness":"20%","Stability":"10%"},{"date":" 2017/08/09", "Passed":"7 ","Failed TR":"4", " Failed Environment":"8", "Failed Artifact":"4", "Inconclusive":"1", "Comment":"[NCMAIN repo][test-rbsnc project]: make UpgradeWithCpriBreakTest choose test focus UP as its upToState"
,"G1 LTE UP":" CXP9024418_6-R24A52","G1 WCDMA UP":"CXP9024418_6-R24A52","Effectiveness":"20%","Stability":"10%"},{"date":" 2017/08/09", "Passed":"7 ","Failed TR":"4", " Failed Environment":"8", "Failed Artifact":"4", "Inconclusive":"1", "Comment":"[NCMAIN repo][test-rbsnc project]: make UpgradeWithCpriBreakTest choose test focus UP as its upToState"
,"G1 LTE UP":" CXP9024418_6-R24A52","G1 WCDMA UP":"CXP9024418_6-R24A52","Effectiveness":"20%","Stability":"10%"},{"date":" 2017/08/09", "Passed":"7 ","Failed TR":"4", " Failed Environment":"8", "Failed Artifact":"4", "Inconclusive":"1", "Comment":"[NCMAIN repo][test-rbsnc project]: make UpgradeWithCpriBreakTest choose test focus UP as its upToState"
,"G1 LTE UP":" CXP9024418_6-R24A52","G1 WCDMA UP":"CXP9024418_6-R24A52","Effectiveness":"20%","Stability":"10%"},{"date":" 2017/08/09", "Passed":"7 ","Failed TR":"4", " Failed Environment":"8", "Failed Artifact":"4", "Inconclusive":"1", "Comment":"[NCMAIN repo][test-rbsnc project]: make UpgradeWithCpriBreakTest choose test focus UP as its upToState"
,"G1 LTE UP":" CXP9024418_6-R24A52","G1 WCDMA UP":"CXP9024418_6-R24A52","Effectiveness":"20%","Stability":"10%"},{"date":" 2017/08/09", "Passed":"7 ","Failed TR":"4", " Failed Environment":"8", "Failed Artifact":"4", "Inconclusive":"1", "Comment":"[NCMAIN repo][test-rbsnc project]: make UpgradeWithCpriBreakTest choose test focus UP as its upToState"
,"G1 LTE UP":" CXP9024418_6-R24A52","G1 WCDMA UP":"CXP9024418_6-R24A52","Effectiveness":"20%","Stability":"10%"},{"date":" 2017/08/09", "Passed":"7 ","Failed TR":"4", " Failed Environment":"8", "Failed Artifact":"4", "Inconclusive":"1", "Comment":"[NCMAIN repo][test-rbsnc project]: make UpgradeWithCpriBreakTest choose test focus UP as its upToState"
,"G1 LTE UP":" CXP9024418_6-R24A52","G1 WCDMA UP":"CXP9024418_6-R24A52","Effectiveness":"20%","Stability":"10%"},{"date":" 2017/08/09", "Passed":"7 ","Failed TR":"4", " Failed Environment":"8", "Failed Artifact":"4", "Inconclusive":"1", "Comment":"[NCMAIN repo][test-rbsnc project]: make UpgradeWithCpriBreakTest choose test focus UP as its upToState"
,"G1 LTE UP":" CXP9024418_6-R24A52","G1 WCDMA UP":"CXP9024418_6-R24A52","Effectiveness":"20%","Stability":"10%"}];
      break;
      case "1115":
      data=[{"Date":" 2017/08/09", "Passed":"7 ","Failed TR":"4", " Failed Environment":"8", "Failed Artifact":"4", "Inconclusive":"1", "Comment":"[NCMAIN repo][test-rbsnc project]: make UpgradeWithCpriBreakTest choose test focus UP as its upToState"
,"G1 LTE UP":" CXP9024418_6-R24A52","G1 WCDMA UP":"CXP9024418_6-R24A52","Effectiveness":"20%","Stability":"10%"},{"date":" 2017/08/09", "Passed":"7 ","Failed TR":"4", " Failed Environment":"8", "Failed Artifact":"4", "Inconclusive":"1", "Comment":"[NCMAIN repo][test-rbsnc project]: make UpgradeWithCpriBreakTest choose test focus UP as its upToState"
,"G1 LTE UP":" CXP9024418_6-R24A52","G1 WCDMA UP":"CXP9024418_6-R24A52","Effectiveness":"20%","Stability":"10%"},{"date":" 2017/08/09", "Passed":"7 ","Failed TR":"4", " Failed Environment":"8", "Failed Artifact":"4", "Inconclusive":"1", "Comment":"[NCMAIN repo][test-rbsnc project]: make UpgradeWithCpriBreakTest choose test focus UP as its upToState"
,"G1 LTE UP":" CXP9024418_6-R24A52","G1 WCDMA UP":"CXP9024418_6-R24A52","Effectiveness":"20%","Stability":"10%"},{"date":" 2017/08/09", "Passed":"7 ","Failed TR":"4", " Failed Environment":"8", "Failed Artifact":"4", "Inconclusive":"1", "Comment":"[NCMAIN repo][test-rbsnc project]: make UpgradeWithCpriBreakTest choose test focus UP as its upToState"
,"G1 LTE UP":" CXP9024418_6-R24A52","G1 WCDMA UP":"CXP9024418_6-R24A52","Effectiveness":"20%","Stability":"10%"},{"date":" 2017/08/09", "Passed":"7 ","Failed TR":"4", " Failed Environment":"8", "Failed Artifact":"4", "Inconclusive":"1", "Comment":"[NCMAIN repo][test-rbsnc project]: make UpgradeWithCpriBreakTest choose test focus UP as its upToState"
,"G1 LTE UP":" CXP9024418_6-R24A52","G1 WCDMA UP":"CXP9024418_6-R24A52","Effectiveness":"20%","Stability":"10%"},{"date":" 2017/08/09", "Passed":"7 ","Failed TR":"4", " Failed Environment":"8", "Failed Artifact":"4", "Inconclusive":"1", "Comment":"[NCMAIN repo][test-rbsnc project]: make UpgradeWithCpriBreakTest choose test focus UP as its upToState sdh jhdj jhdj jshwe jhfjjhkk hejh"
,"G1 LTE UP":" CXP9024418_6-R24A52","G1 WCDMA UP":"CXP9024418_6-R24A52","Effectiveness":"20%","Stability":"10%"}, {"date":" 2017/08/09", "Passed":"7 ","Failed TR":"4", " Failed Environment":"8", "Failed Artifact":"4", "Inconclusive":"1", "Comment":"[NCMAIN repo][test-rbsnc project]: make UpgradeWithCpriBreakTest choose test focus UP as its upToState"
,"G1 LTE UP":" CXP9024418_6-R24A52","G1 WCDMA UP":"CXP9024418_6-R24A52","Effectiveness":"20%","Stability":"10%"},{"date":" 2017/08/09", "Passed":"7 ","Failed TR":"4", " Failed Environment":"8", "Failed Artifact":"4", "Inconclusive":"1", "Comment":"[NCMAIN repo][test-rbsnc project]: make UpgradeWithCpriBreakTest choose test focus UP as its upToState"
,"G1 LTE UP":" CXP9024418_6-R24A52","G1 WCDMA UP":"CXP9024418_6-R24A52","Effectiveness":"20%","Stability":"10%"},{"date":" 2017/08/09", "Passed":"7 ","Failed TR":"4", " Failed Environment":"8", "Failed Artifact":"4", "Inconclusive":"1", "Comment":"[NCMAIN repo][test-rbsnc project]: make UpgradeWithCpriBreakTest choose test focus UP as its upToState"
,"G1 LTE UP":" CXP9024418_6-R24A52","G1 WCDMA UP":"CXP9024418_6-R24A52","Effectiveness":"20%","Stability":"10%"},{"date":" 2017/08/09", "Passed":"7 ","Failed TR":"4", " Failed Environment":"8", "Failed Artifact":"4", "Inconclusive":"1", "Comment":"[NCMAIN repo][test-rbsnc project]: make UpgradeWithCpriBreakTest choose test focus UP as its upToState"
,"G1 LTE UP":" CXP9024418_6-R24A52","G1 WCDMA UP":"CXP9024418_6-R24A52","Effectiveness":"20%","Stability":"10%"},{"date":" 2017/08/09", "Passed":"7 ","Failed TR":"4", " Failed Environment":"8", "Failed Artifact":"4", "Inconclusive":"1", "Comment":"[NCMAIN repo][test-rbsnc project]: make UpgradeWithCpriBreakTest choose test focus UP as its upToState"
,"G1 LTE UP":" CXP9024418_6-R24A52","G1 WCDMA UP":"CXP9024418_6-R24A52","Effectiveness":"20%","Stability":"10%"},{"date":" 2017/08/09", "Passed":"7 ","Failed TR":"4", " Failed Environment":"8", "Failed Artifact":"4", "Inconclusive":"1", "Comment":"[NCMAIN repo][test-rbsnc project]: make UpgradeWithCpriBreakTest choose test focus UP as its upToState"
,"G1 LTE UP":" CXP9024418_6-R24A52","G1 WCDMA UP":"CXP9024418_6-R24A52","Effectiveness":"20%","Stability":"10%"},{"date":" 2017/08/09", "Passed":"7 ","Failed TR":"4", " Failed Environment":"8", "Failed Artifact":"4", "Inconclusive":"1", "Comment":"[NCMAIN repo][test-rbsnc project]: make UpgradeWithCpriBreakTest choose test focus UP as its upToState"
,"G1 LTE UP":" CXP9024418_6-R24A52","G1 WCDMA UP":"CXP9024418_6-R24A52","Effectiveness":"20%","Stability":"10%"},{"date":" 2017/08/09", "Passed":"7 ","Failed TR":"4", " Failed Environment":"8", "Failed Artifact":"4", "Inconclusive":"1", "Comment":"[NCMAIN repo][test-rbsnc project]: make UpgradeWithCpriBreakTest choose test focus UP as its upToState"
,"G1 LTE UP":" CXP9024418_6-R24A52","G1 WCDMA UP":"CXP9024418_6-R24A52","Effectiveness":"20%","Stability":"10%"}];
       break;
       default:
       return false;
    }
    createTable(data);
}
//which是选择的下拉菜单中的1103,1104,1114,1115
$(function(){
      $("#chartSelect").bind("change",function(){
        var which=$(this).find("option:selected").val();
       getData(which);
       //切换表格时清空add数据
       $("#addGroup").find("input").val("");
       $("#addGroup").find("textarea").val("");


      });
});
/*
实现点击add按钮和edit按钮后显示内容中自动计算effectiveness和stability的值。
*/

$(function(){

           var $inputs =$("#addGroup").find("input");
           for(var i=1;i<=5;i++){
             $($inputs[i]).bind("blur",function(){
               var passed1=parseInt($($inputs[1]).val());
               var passed2=parseInt($($inputs[2]).val());
                calAverage($inputs,9,passed1);
                calAverage($inputs,8,passed2);
             });
           }
           var $editinputs=$("#EditTable").find("input");
           for(var i=1;i<=5;i++){
             $($editinputs[i]).bind("blur",function(){
               var passed1=parseInt($($editinputs[1]).val());
               var passed2=parseInt($($editinputs[2]).val());
                calAverage($editinputs,9,passed1);
                calAverage($editinputs,8,passed2);
             });
           }




});
    /*
    检查输入值是否是输入，选中的输入框为1-5，方便计算百分比
    */
    function calAverage(inputs,row,passed){
        var reg=/^\d+$/;
        var sum=0;
        for(var i=1;i<=5;i++){
          if(!reg.test($(inputs[i]).val())){
            return false;
          }
          else
            sum += parseInt($(inputs[i]).val());

        }

           //if(passed==0)
            //return false;
            var ans= calAve(sum,passed);
            $(inputs[row]).val(ans);
    }
    /*
    总数 ,通过数 最后求得通过率
    */
function calAve (sum,passed){

   return (Math.round( passed / sum * 10000) / 100.00 + "%");
 }



/*
这是一个验证输入合法的过程
*/
$(function(){
     $("#sureAdd").bind("click",function(){
          $("#addError").text("").hide();
          //$("#editdate3").trigger(" blur");
          var $inputs =$("#addGroup").find("input");
          if($inputs[0].value== ""){
            showError("Date can not be null !");
            return false;
          }
          else if($inputs[1].value== ""){
            showError("  Passed can not be null !");
            return false;
          }
         else  if($inputs[2].value== ""){
            showError("  Failed TR can not be null !");
            return false;
          }

          else if($inputs[3].value== ""){
            showError("  Failed Environment can not be null !");
            return false;
          }
          else if($inputs[4].value== ""){
            showError("  Failed Artifact can not be null !");
            return false;
          }
          else if($inputs[5].value== ""){
            showError("  Inconclusive can not be null !");
            return false;
          }

          else if($inputs[6].value== ""){
            showError("  G1 LTE UP can not be null !");
            return false;
          }




        //  验证完后ajax,最后把$("#cancelButton").click(),写入ajax的success中
         $("#cancelButton").click();
         //成功提交后切换模态框数据
         $("#addGroup").find("input").val("");
         $("#addGroup").find("textarea").val("");
     });
     $("#sureEdit").bind("click",function(){
          $("#editError").text("").hide();
          $("#editdate3").trigger(" blur");

        //验证完后ajax,最后把$("#cancelButton").click(),写入ajax的success中
         $("#cancelEdit").click();
     });

});
/*
点击edit按钮之后，当点击table中的任意一个th都会跳出edit窗口实现编辑功能。点击完edit按钮，使add按钮隐藏，edit按钮隐藏，closeEdit显示。
“#tablearea”是表示点击的任意的th区域，“#newGroup”是add按钮的id,"#closeEdit"是closeedit按钮的id。

*/
$(function(){
         $("#changeUser").bind("click",function(){
                 $(this).hide(360);
                 $("#newGroup").hide(360);
                 $("#closeEdit").show();
            $("#tableArea").bind("click",function(evt){
                 var which = evt.target;
                 var  $tr = $(which).closest("tr");
                 var tableth1=$("#example thead th");//1
                 var editth1=$("#EditTable th");//2
                 for(var j=0;j<editth1.length;j++){//3
                   $(editth1[j]).text($(tableth1[j]).text());//1,2,3,以及此行是将对应得四个不同table的头标签的值都显示在edit部分的头标签。
                 }
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
          /*由于comment中的内容比较多，所以设置其为textarea的标签，所以前面用于计算effectiveness和stability的input标签的前六个正常放入值，comment之后的值就是存在错位放的情况。
          $tds[i]的值是遍历的选中的th中的每个td值，只是这边comment需要也特别设置。
          */
         function createEditModel($tr){
                var $input = $("#EditTable").find("input");
                var $tds = $tr.find("td");
                var i=0;
                for(;i<6;i++){
                  $($input[i]).val($tds[i].innerText);
                }
                $("#editcomment1").val($tds[i++].innerText);
                for(;i<$tds.length;i++){
                  $($input[i-1]).val($tds[i].innerText);
                }
         }
});

  function showError(msg){
    $("#addError").text(msg).show();
  }
